import { NextResponse } from 'next/server'

// Unduhan langsung: pengunjung tidak mampir ke halaman GitHub.
// Asset diambil saat diklik, jadi rilis baru langsung terpakai tanpa rebuild.
export const revalidate = 300

interface Target {
  repo: string
  ext: string
  /** repo privat: aset harus dialirkan lewat server, tidak bisa redirect */
  privat?: boolean
}

const REPOS: Record<string, Target> = {
  acumedis: { repo: 'acumedis-android', ext: '.apk' },
  zrooms: { repo: 'Z-Rooms-android', ext: '.apk' },
  zxgym: { repo: 'zgym_windows', ext: '.exe' },
  z1label: { repo: 'z1label-android', ext: '.apk' },
  zxcarwash: { repo: 'zx-carwash', ext: '.apk' },
  memberkit: { repo: 'memberkit', ext: '.apk' },
  // dua APK: orang tua + anak. `zxparenting` = app ortu (yang dipakai membeli)
  zxparenting: { repo: 'ZX-Parenting-ortu', ext: '.apk' },
  zxparentingortu: { repo: 'ZX-Parenting-ortu', ext: '.apk' },
  zxparentinganak: { repo: 'ZX-Parenting-agent', ext: '.apk' },
  // repo privat — aset dialirkan lewat route ini memakai GITHUB_TOKEN
  zxpajak: { repo: 'pajak-kb-user', ext: '.apk', privat: true },
  pajakkb: { repo: 'pajak-kb-user', ext: '.apk', privat: true },
}

interface Asset {
  id: number
  name: string
  browser_download_url: string
}

export async function GET(_req: Request, { params }: { params: Promise<{ app: string }> }) {
  const { app } = await params
  const meta = REPOS[app]
  if (!meta) return NextResponse.json({ error: 'aplikasi tidak dikenal' }, { status: 404 })

  const token = process.env.GITHUB_TOKEN

  try {
    const res = await fetch(`https://api.github.com/repos/djvpri/${meta.repo}/releases/latest`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 300 },
    })
    if (!res.ok) throw new Error(`github ${res.status}`)
    const rel = (await res.json()) as { assets?: Asset[] }
    const hit = rel.assets?.find((a) => a.name.toLowerCase().endsWith(meta.ext))
    if (!hit) throw new Error('aset tidak ada')

    // Repo publik: redirect langsung ke file, tanpa memakai bandwidth server.
    if (!meta.privat) return NextResponse.redirect(hit.browser_download_url, 302)

    // Repo privat: browser_download_url akan 404 untuk pengunjung tanpa login
    // GitHub, jadi byte-nya dialirkan lewat server memakai token.
    if (!token) throw new Error('GITHUB_TOKEN belum diisi')
    const bin = await fetch(
      `https://api.github.com/repos/djvpri/${meta.repo}/releases/assets/${hit.id}`,
      {
        headers: { Authorization: `Bearer ${token}`, Accept: 'application/octet-stream' },
        next: { revalidate: 300 },
      },
    )
    if (!bin.ok || !bin.body) throw new Error(`asset ${bin.status}`)
    return new NextResponse(bin.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': `attachment; filename="${hit.name}"`,
        'Cache-Control': 'public, max-age=300',
      },
    })
  } catch {
    return NextResponse.redirect(`https://github.com/djvpri/${meta.repo}/releases/latest`, 302)
  }
}
