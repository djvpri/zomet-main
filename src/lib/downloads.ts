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

/** ZXGym desktop (Tauri thin-client): installer + portable. */
export const ZXGYM_DOWNLOADS: Spec[] = [
  {
    id: 'zxgym-installer',
    repo: 'zgym_windows',
    name: 'ZXGym — Installer',
    note: 'Windows 10/11 64-bit · butuh WebView2 (bawaan Win 10/11)',
    pick: (f) => f.endsWith('_x64-setup.exe'),
    version: '0.2.2',
  },
  {
    id: 'zxgym-portable',
    repo: 'zgym_windows',
    name: 'ZXGym — Portable',
    note: 'Satu file .exe, jalankan langsung tanpa instalasi',
    pick: (f) => f.endsWith('_x64.exe') && !f.includes('setup'),
    version: '0.2.2',
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
    return {
      id: spec.id,
      name: spec.name,
      version: rel ? rel.tag_name.replace(/^v/, '') : spec.version,
      releaseUrl,
      assets: hit
        ? [{ label: 'Unduh', url: hit.browser_download_url, size: mb(hit.size), note: spec.note }]
        : [{ label: 'Halaman rilis', url: releaseUrl, size: '', note: spec.note }],
    }
  })
}
