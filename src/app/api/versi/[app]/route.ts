import { NextResponse } from 'next/server'

// Versi terbaru untuk auto-update aplikasi Android.
// Dipakai app karena repo `pajak-kb-user` privat: panggilan langsung ke
// api.github.com tanpa token akan 404, dan token tidak boleh masuk APK.
export const revalidate = 300

const REPO: Record<string, { repo: string; ext: string; nama: string }> = {
  zxpajak: { repo: 'pajak-kb-user', ext: '.apk', nama: 'ZX Pajak Kendaraan' },
}

export async function GET(_req: Request, { params }: { params: Promise<{ app: string }> }) {
  const { app } = await params
  const meta = REPO[app]
  if (!meta) return NextResponse.json({ ok: false, error: 'aplikasi tidak dikenal' }, { status: 404 })

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
    const rel = (await res.json()) as {
      tag_name?: string
      published_at?: string
      assets?: { name: string; size: number }[]
    }
    const aset = rel.assets?.find((a) => a.name.toLowerCase().endsWith(meta.ext))
    return NextResponse.json(
      {
        ok: true,
        app,
        nama: meta.nama,
        versi: (rel.tag_name ?? '').replace(/^v/, ''),
        ukuran: aset?.size ?? null,
        berkas: aset?.name ?? null,
        // selalu rilis terbaru; app tidak perlu tahu URL GitHub
        unduh: `/api/dl/${app}`,
        dirilis: rel.published_at ?? null,
      },
      { headers: { 'Cache-Control': 'public, max-age=300' } },
    )
  } catch {
    return NextResponse.json({ ok: false, error: 'rilis tidak dapat diakses' }, { status: 502 })
  }
}
