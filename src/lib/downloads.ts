export interface DownloadAsset {
  label: string
  url: string
  size: string
  note: string
}

export interface DownloadItem {
  id: string
  name: string
  version: string
  releaseUrl: string
  assets: DownloadAsset[]
}

interface Spec {
  id: string
  repo: string
  name: string
  note: string
  pick: (file: string) => boolean
  version: string
  /** true = tombol menuju halaman rilis repo, bukan file aset langsung */
  linkToRepo?: boolean
}

const mb = (bytes: number) => `${(bytes / 1048576).toFixed(1)} MB`

/** Z1 Pos: installer + portable Windows, APK Android. */
export const Z1POS_DOWNLOADS: Spec[] = [
  {
    id: 'kasir-installer',
    repo: 'zpos_windows',
    name: 'Z1 Kasir — Installer',
    note: 'Windows 10/11 64-bit · dipasang permanen, update otomatis',
    pick: (f) => f.endsWith('_x64-setup.exe'),
    version: '0.1.141',
  },
  {
    id: 'kasir-portable',
    repo: 'zpos_windows',
    name: 'Z1 Kasir — Portable',
    note: 'Satu file .exe, jalankan dari flashdisk, tanpa instalasi',
    pick: (f) => f.endsWith('.exe') && /kasir/i.test(f) && !f.includes('setup'),
    version: '0.1.141',
  },
  {
    id: 'z1label',
    repo: 'z1label-android',
    name: 'Z1 Label',
    note: 'Android 8+ · cetak label TSPL via Bluetooth',
    pick: (f) => f.endsWith('.apk'),
    version: '1.8.62',
  },
]

/** ZXGym desktop (Tauri thin-client): satu tombol ke halaman rilis repo. */
export const ZXGYM_DOWNLOADS: Spec[] = [
  {
    id: 'zxgym-windows',
    repo: 'zgym_windows',
    name: 'ZXGym — Windows',
    note: 'Windows 10/11 64-bit · installer, butuh WebView2',
    pick: (f) => f.endsWith('_x64-setup.exe'),
    version: '0.2.2',
  },
]

/** ZXRoom Android: APK. */
export const ZROOMS_DOWNLOADS: Spec[] = [
  {
    id: 'zrooms-apk',
    repo: 'Z-Rooms-android',
    name: 'ZXRoom — Android',
    note: 'Android 8+ · pasang APK, izinkan install dari sumber tak dikenal',
    pick: (f) => f.endsWith('.apk'),
    version: '1.0.39',
  },
]

type Release = {
  tag_name: string
  assets: { name: string; size: number; browser_download_url: string }[]
}

async function latest(repo: string): Promise<Release | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/djvpri/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    return res.ok ? ((await res.json()) as Release) : null
  } catch {
    return null
  }
}

export async function getDownloads(specs: Spec[]): Promise<DownloadItem[]> {
  const repos = [...new Set(specs.map((s) => s.repo))]
  const releases = new Map<string, Release | null>()
  await Promise.all(
    repos.map(async (r) => {
      releases.set(r, await latest(r))
    })
  )

  return specs.map((spec) => {
    const rel = releases.get(spec.repo)
    const releaseUrl = `https://github.com/djvpri/${spec.repo}/releases/latest`
    const hit = rel?.assets.find((a) => spec.pick(a.name))
    // linkToRepo: arahkan ke halaman rilis repo, bukan file aset
    const url = spec.linkToRepo ? `https://github.com/djvpri/${spec.repo}` : hit?.browser_download_url || releaseUrl
    return {
      id: spec.id,
      name: spec.name,
      version: rel ? rel.tag_name.replace(/^v/, '') : spec.version,
      releaseUrl,
      assets: [
        {
          label: spec.linkToRepo ? 'Buka halaman rilis' : hit ? 'Unduh' : 'Halaman rilis',
          url,
          size: hit && !spec.linkToRepo ? mb(hit.size) : '',
          note: spec.note,
        },
      ],
    }
  })
}
