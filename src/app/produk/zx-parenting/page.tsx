import type { Metadata } from 'next'
import Link from 'next/link'
import { getDownloads, ZXPARENTING_DOWNLOADS } from '@/lib/downloads'

export const metadata: Metadata = {
  title: 'ZX Parenting — Kontrol Orang Tua & HP Anak | Zomet',
  description:
    'ZX Parenting: batasi waktu layar, blokir aplikasi dan situs, zona aman GPS, jam tidur otomatis, kuis belajar, dan hadiah Token. Dua aplikasi Android — untuk orang tua dan untuk anak. Rp 100.000/bulan.',
}

const fitur = [
  {
    ikon: 'bi-hourglass-split',
    judul: 'Kuota waktu main',
    teks: 'Tentukan jatah menit per hari. Sisa kuota bisa ditukar dengan Token — anak belajar menghargai waktu, bukan sekadar dilarang.',
  },
  {
    ikon: 'bi-calendar-week',
    judul: 'Jadwal per hari',
    teks: 'Aturan berbeda untuk hari sekolah dan akhir pekan. Jam belajar, jam makan, dan jam tidur dijalankan otomatis.',
  },
  {
    ikon: 'bi-shield-lock',
    judul: 'Blokir aplikasi & situs',
    teks: 'Pilih aplikasi yang tidak boleh dibuka dan situs yang tidak boleh diakses. Filter pencarian aman ikut aktif.',
  },
  {
    ikon: 'bi-geo-alt',
    judul: 'Zona aman GPS',
    teks: 'Buat area seperti sekolah dan rumah. Dapat notifikasi saat anak masuk atau keluar area, plus riwayat perjalanan.',
  },
  {
    ikon: 'bi-moon-stars',
    judul: 'Jam tidur otomatis',
    teks: 'HP terkunci sendiri di jam tidur dan curfew. Tidak perlu rebutan setiap malam.',
  },
  {
    ikon: 'bi-mortarboard',
    judul: 'Kuis & tugas',
    teks: 'Bank soal, kuis AI, dan tugas dari orang tua. Nilai dan progres terlihat di laporan, bukan di kertas.',
  },
  {
    ikon: 'bi-coin',
    judul: 'Token & hadiah',
    teks: 'Token didapat dari belajar dan tugas, ditukar hadiah yang orang tua siapkan sendiri di marketplace.',
  },
  {
    ikon: 'bi-graph-up-arrow',
    judul: 'Laporan & AI insight',
    teks: 'Ringkasan harian, tren mingguan, laporan bulanan, dan insight dari AI soal kebiasaan digital anak.',
  },
]

const paketFitur = [
  'Dua aplikasi Android: orang tua + anak',
  'Kuota waktu main & jadwal per hari',
  'Blokir aplikasi, situs, filter pencarian',
  'Zona aman GPS & riwayat lokasi',
  'Jam tidur otomatis (curfew)',
  'Kuis, tugas, Token & marketplace hadiah',
  'Laporan harian, mingguan, bulanan + AI insight',
  'Proteksi anti-uninstall (Device Admin)',
]

const faq = [
  {
    q: 'Kenapa harus dua aplikasi?',
    a: 'App orang tua menyimpan aturan dan melihat laporan; app anak yang menjalankan aturan itu di HP anak. Keduanya dipasangkan lewat token sekali tempel — tidak perlu akun untuk anak.',
  },
  {
    q: 'Apakah data anak aman?',
    a: 'Data anak bersifat sensitif, jadi disimpan seminimal mungkin dan hanya bisa dibaca dari akun orang tua yang memasangkannya. Lokasi hanya direkam kalau fitur GPS dinyalakan.',
  },
  {
    q: 'Apakah anak bisa menghapus aplikasinya?',
    a: 'Bisa dicegah. App anak memakai Device Admin, sehingga Android menolak uninstall sampai izin itu dicabut lewat pengaturan — yang butuh konfirmasi orang tua.',
  },
  {
    q: 'Beda Pro dan Elite?',
    a: 'Pro Rp 100.000/bulan untuk satu profil anak dengan kontrol penuh. Elite Rp 250.000/bulan untuk profil anak tak terbatas, akses kreator marketplace, fitur prioritas, dan analitik lanjutan.',
  },
]

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default async function ZXParentingPage() {
  const downloads = await getDownloads(ZXPARENTING_DOWNLOADS)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="sticky top-0 z-20 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex min-h-[44px] items-center gap-2 text-lg font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" aria-hidden="true" /> Zomet
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/produk" className="text-white">Produk</Link>
            <a href="#harga" className="hidden transition-colors hover:text-white sm:block">Harga</a>
            <a href="#fitur" className="hidden transition-colors hover:text-white sm:block">Fitur</a>
          </nav>
          <Link
            href="/"
            className="flex min-h-[44px] items-center rounded-lg border border-gray-700 px-4 text-sm text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
          >
            Beranda
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex items-center gap-2 pt-6 text-xs text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-300">Beranda</Link>
          <span>/</span>
          <Link href="/produk" className="hover:text-gray-300">Produk</Link>
          <span>/</span>
          <span className="text-gray-300">ZX Parenting</span>
        </nav>

        {/* hero */}
        <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-900 bg-violet-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-violet-300">
              Dua aplikasi Android
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Aturan di HP anak,{' '}
              <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                tenang di tangan orang tua
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
              <b className="text-gray-200">ZX Parenting</b> mengatur waktu layar, memblokir aplikasi dan situs, menjaga
              zona aman lewat GPS, mengunci HP saat jam tidur — lalu mengubah kedisiplinan itu jadi Token yang bisa
              ditukar hadiah.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-sm font-semibold text-gray-400">Mulai</span>
              <span className="text-3xl font-extrabold tracking-tight tabular-nums">Rp 100.000</span>
              <span className="text-sm text-gray-500">/bulan · Elite Rp 250.000/bulan</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/api/dl/zxparentingortu"
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                <i className="bi bi-download" aria-hidden="true" /> Unduh app orang tua
              </a>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20mencoba%20ZX%20Parenting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 text-sm font-semibold transition-colors hover:border-gray-500 hover:bg-gray-800"
              >
                Minta akun demo
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-6 text-xs text-gray-400">
              {['App ortu + app anak', 'Laporan + AI insight', 'Token & hadiah'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-emerald-400"><Check /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* daftar unduhan */}
          <div className="flex flex-col gap-3">
            {downloads.map((d) => (
              <div
                key={d.id}
                className="grid grid-cols-[46px_1fr] items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-colors hover:border-gray-600 sm:grid-cols-[46px_1fr_auto_auto] sm:p-5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-gray-700 bg-gray-800/60 text-violet-400">
                  <i className={`bi ${d.id.endsWith('anak') ? 'bi-phone' : 'bi-person-check'} text-lg`} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold">{d.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{d.assets[0].note}</p>
                </div>
                <div className="col-span-2 text-left text-xs text-gray-400 tabular-nums sm:col-span-1 sm:text-right">
                  <b className="font-bold text-gray-200">v{d.version}</b>
                  {d.assets[0].size && <span className="block">{d.assets[0].size}</span>}
                </div>
                <a
                  href={d.assets[0].url}
                  className="col-span-2 inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold transition-colors hover:bg-blue-500 sm:col-span-1"
                >
                  {d.assets[0].label}
                </a>
              </div>
            ))}
            <p className="flex items-start gap-2 rounded-xl border border-gray-800 bg-gray-900/40 p-4 text-xs leading-relaxed text-gray-400">
              <i className="bi bi-info-circle mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
              <span>
                <b className="text-gray-200">Urutan pasang:</b> pasang app <b>orang tua</b> dulu, buat profil anak,
                lalu pasang app <b>anak</b> di HP anak dan tempel token pairing yang muncul di app orang tua.
              </span>
            </p>
          </div>
        </section>

        {/* pratinjau aplikasi */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">Tampilan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">App orang tua</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Profil, anak, tugas, hadiah, dan langganan — semua dari satu aplikasi.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="m-0 flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-600">
              <div className="flex justify-center bg-gray-950 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/zxparenting/profil.webp"
                  alt="Profil di aplikasi ZX Parenting untuk orang tua"
                  width={709}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto rounded-lg border border-gray-800"
                  style={{ maxHeight: 420 }}
                />
              </div>
              <figcaption className="px-5 py-4">
                <b className="block text-sm font-bold">Profil</b>
                <span className="mt-1 block text-xs leading-relaxed text-gray-400">
                  Identitas orang tua, pengaturan bahasa, status langganan, dan keluar akun.
                </span>
              </figcaption>
            </figure>
            <figure className="m-0 flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-600">
              <div className="flex justify-center bg-gray-950 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/zxparenting/feature.webp"
                  alt="ZX Parenting — Cerdas Berteknologi, Aman Berkreasi"
                  width={1024}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full self-center rounded-lg border border-gray-800"
                />
              </div>
              <figcaption className="px-5 py-4">
                <b className="block text-sm font-bold">Cerdas berteknologi, aman berkreasi</b>
                <span className="mt-1 block text-xs leading-relaxed text-gray-400">
                  Kontrol waktu layar, blokir konten, zona aman GPS, dan apresiasi lewat Token.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* fitur */}
        <section id="fitur" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">Fitur</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Bukan cuma pembatas waktu</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Kontrol, pembelajaran, dan apresiasi dalam satu ekosistem — supaya aturan tidak terasa seperti hukuman.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fitur.map((f) => (
              <div
                key={f.judul}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-colors hover:border-gray-600"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-violet-900 bg-gray-900 text-violet-400">
                  <i className={`bi ${f.ikon} text-lg`} aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-sm font-bold">{f.judul}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{f.teks}</p>
              </div>
            ))}
          </div>
        </section>

        {/* harga */}
        <section id="harga" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">Harga</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Dua paket, keduanya lengkap</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Selisihnya di jumlah profil anak dan fitur lanjutan — bukan di fitur dasar.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="relative flex flex-col rounded-2xl border border-violet-800 bg-gradient-to-b from-violet-950/40 to-gray-900/40 p-6 ring-4 ring-violet-950/40">
              <span className="absolute -top-2.5 left-6 rounded bg-blue-600 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                Paling banyak dipakai
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">ZX Pro</h3>
              <p className="mt-3 text-3xl font-extrabold tracking-tight tabular-nums">
                Rp 100.000<span className="text-sm font-medium text-gray-500"> /bulan</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">Satu profil anak dengan kontrol penuh.</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[13px] text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>1 profil anak
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>Kontrol penuh + pelacakan GPS
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>Preset & kuis tanpa batas
                </li>
              </ul>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZX%20Parenting%20Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                Langganan Pro
              </a>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">ZX Elite</h3>
              <p className="mt-3 text-3xl font-extrabold tracking-tight tabular-nums">
                Rp 250.000<span className="text-sm font-medium text-gray-500"> /bulan</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">Untuk keluarga dengan lebih dari satu anak.</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[13px] text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>Profil anak tak terbatas
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>Akses kreator marketplace
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>Fitur prioritas + analitik lanjutan
                </li>
              </ul>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZX%20Parenting%20Elite"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-4 text-sm font-semibold transition-colors hover:border-gray-600 hover:bg-gray-700"
              >
                Langganan Elite
              </a>
            </div>
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-2.5 text-[13px] text-gray-300 sm:grid-cols-2">
            {paketFitur.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* faq */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Pertanyaan yang sering muncul</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <h3 className="text-sm font-bold">{f.q}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-700 bg-gradient-to-r from-violet-950/40 to-gray-900/40 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">Siap mengatur HP anak tanpa drama?</h2>
              <p className="mt-1.5 text-sm text-gray-400">
                Pasang app orang tua, buat profil anak, tempel token di HP anak. Aturan langsung jalan.
              </p>
            </div>
            <a
              href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20mencoba%20ZX%20Parenting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center rounded-lg bg-blue-600 px-5 text-sm font-semibold transition-colors hover:bg-blue-500"
            >
              Hubungi kami
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-gray-800 py-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 PT Zomet Teknologi Indonesia</span>
          <span>zomet.my.id · ZX Parenting</span>
        </footer>
      </div>
    </main>
  )
}
