import { NextResponse } from 'next/server'

// Unduhan langsung: pengunjung tidak mampir ke halaman GitHub.
// Asset diambil saat diklik, jadi rilis baru langsung terpakai tanpa rebuild.
export const revalidate = 300

const REPOS: Record<string, { repo: string; ext: string }> = {
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
}

export async function GET(_req: Request, { params }: { params: Promise<{ app: string }> }) {
  const { app } = await params
  const meta = REPOS[app]
  if (!meta) return NextResponse.json({ error: 'aplikasi tidak dikenal' }, { status: 404 })

  try {
    const res = await fetch(`https://api.github.com/repos/djvpri/${meta.repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 300 },
    })
    if (!res.ok) throw new Error(`github ${res.status}`)
    const rel = (await res.json()) as { assets?: { name: string; browser_download_url: string }[] }
    const hit = rel.assets?.find((a) => a.name.toLowerCase().endsWith(meta.ext))
    if (!hit) throw new Error('aset tidak ada')
    return NextResponse.redirect(hit.browser_download_url, 302)
  } catch {
    return NextResponse.redirect(`https://github.com/djvpri/${meta.repo}/releases/latest`, 302)
  }
}
