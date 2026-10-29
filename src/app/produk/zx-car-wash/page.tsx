import type { Metadata } from 'next'
import Link from 'next/link'
import { getDownloads, ZXCARWASH_DOWNLOADS } from '@/lib/downloads'

export const metadata: Metadata = {
  title: 'ZX Carwash — Kasir Cuci Mobil & Kantin | Zomet',
  description:
    'ZX Carwash: kasir cuci mobil + kantin dengan satu bon gabungan, antrian per bay, komisi tukang, shift, laporan, dan cetak struk thermal. Jalan offline. Rp 100.000/bulan atau Rp 1.000.000/tahun.',
}

const fitur = [
  {
    ikon: 'bi-receipt',
    judul: 'Satu bon, dua omzet',
    teks: 'Pelanggan nyuci sambil makan tetap satu tagihan. Subtotal cuci dan kantin dipisah di layar dan di struk, jadi rekap per modul tetap jelas.',
  },
  {
    ikon: 'bi-list-ol',
    judul: 'Antrian per bay',
    teks: 'Nomor bay, tukang yang mengerjakan, jam mulai dan selesai. Dari situ komisi dihitung otomatis — tidak lagi menghitung mobil secara manual.',
  },
  {
    ikon: 'bi-wifi-off',
    judul: 'Tetap jalan tanpa sinyal',
    teks: 'Transaksi ditulis ke basis data lokal lebih dulu, struk langsung tercetak. Saat sinyal kembali, antrean dikirim ke server tanpa membuat bon dobel.',
  },
  {
    ikon: 'bi-printer',
    judul: 'Struk & tiket thermal',
    teks: 'Struk 58 mm lewat printer Bluetooth, plus tiket antrian untuk ditempel di kaca mobil — nomor bay besar, tanpa harga.',
  },
  {
    ikon: 'bi-cash-stack',
    judul: 'Shift & kas',
    teks: 'Buka shift dengan kas awal, tutup dengan kas fisik. Sistem menghitung kas seharusnya dan selisihnya, per metode bayar.',
  },
  {
    ikon: 'bi-graph-up',
    judul: 'Laporan harian',
    teks: 'Omzet hari ini, cuci vs kantin, per metode bayar, jam tersibuk, paket terlaris, komisi per tukang, dan tren 7/30 hari.',
  },
  {
    ikon: 'bi-stars',
    judul: 'Member & deposit',
    teks: 'Poin dan saldo deposit per pelanggan. Kasir bisa mengisi atau menarik saldo langsung dari aplikasi.',
  },
  {
    ikon: 'bi-box-seam',
    judul: 'Stok kantin',
    teks: 'Stok berkurang saat bon dibayar dan kembali kalau bon dibatalkan. Peringatan stok kritis, plus koreksi manual.',
  },
]

const paketFitur = [
  'Aplikasi Android (semua fitur)',
  'Kasir cuci + kantin, bon gabungan',
  'Antrian per bay & komisi tukang',
  'Struk thermal 58 mm + tiket antrian',
  'Laporan harian & periode',
  'Jalan offline, sinkron otomatis',
]

const faq = [
  {
    q: 'Apakah butuh internet terus?',
    a: 'Tidak. Transaksi, struk, dan antrian jalan tanpa internet. Data dikirim ke server saat koneksi tersedia; kalau kiriman terputus, bon tetap ada di antrean lokal.',
  },
  {
    q: 'Printer apa yang didukung?',
    a: 'Printer thermal Bluetooth 58 mm dengan perintah ESC/POS — termasuk tipe murah yang banyak dijual. Printer dipilih sekali, setelah itu tersambung otomatis saat aplikasi dibuka.',
  },
  {
    q: 'Bagaimana kalau pelanggan makan dulu, baru bayar cuci?',
    a: 'Bon bisa dibiarkan terbuka lalu dilunasi belakangan dari tab Shift. Daftar piutang menampilkan semua bon yang belum dibayar.',
  },
  {
    q: 'Bisa lebih dari satu kasir?',
    a: 'Bisa. Tiap kasir punya akun sendiri, dan semua transaksi menempel ke shift kasir yang membuka shift tersebut.',
  },
]

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default async function ZXCarwashPage() {
  const downloads = await getDownloads(ZXCARWASH_DOWNLOADS)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="sticky top-0 z-20 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" aria-hidden="true" /> Zomet
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/produk" className="text-white">Produk</Link>
            <a href="#harga" className="hidden transition-colors hover:text-white sm:block">Harga</a>
            <a href="#fitur" className="hidden transition-colors hover:text-white sm:block">Fitur</a>
          </nav>
          <Link
            href="/"
            className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
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
          <span className="text-gray-300">ZX Carwash</span>
        </nav>

        {/* hero */}
        <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-900 bg-cyan-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-300">
              Android + offline
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Cuci mobil dan kantin,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">satu bon</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
              <b className="text-gray-200">ZX Carwash</b> menangani antrian per bay, bon gabungan jasa cuci + makanan,
              komisi tukang, shift kasir, sampai laporan harian — dari HP kasir, tanpa internet.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-sm font-semibold text-gray-400">Mulai</span>
              <span className="text-3xl font-extrabold tracking-tight tabular-nums">Rp 100.000</span>
              <span className="text-sm text-gray-500">/bulan · atau Rp 1 juta/tahun</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/api/dl/zxcarwash"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                <i className="bi bi-download" aria-hidden="true" /> Unduh aplikasi
              </a>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20mencoba%20ZX%20Carwash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold transition-colors hover:border-gray-500 hover:bg-gray-800"
              >
                Minta akun demo
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-6 text-xs text-gray-400">
              {['Jalan offline', 'Struk thermal', 'Antrian per bay'].map((t) => (
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
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-gray-700 bg-gray-800/60 text-emerald-400">
                  <i className="bi bi-phone text-lg" aria-hidden="true" />
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
                  className="col-span-2 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold transition-colors hover:bg-blue-500 sm:col-span-1"
                >
                  {d.assets[0].label}
                </a>
              </div>
            ))}
            <p className="flex items-start gap-2 rounded-xl border border-gray-800 bg-gray-900/40 p-4 text-xs leading-relaxed text-gray-400">
              <i className="bi bi-info-circle mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
              <span>
                <b className="text-gray-200">Android:</b> izinkan Install unknown apps untuk browser yang dipakai
                mengunduh. Kalau Play Protect muncul, pilih Install anyway.
              </span>
            </p>
          </div>
        </section>

        {/* pratinjau aplikasi */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">Tampilan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Layanan dan harga dalam satu layar</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Paket cuci dengan harga per jenis kendaraan dan komisi tukang, berdampingan dengan add-on — diatur sendiri
              dari HP kasir.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[290px] overflow-hidden rounded-[2rem] border border-gray-700 bg-gray-900 p-2 shadow-2xl shadow-black/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/zxcarwash/dashboard.webp"
              alt="Layanan dan harga paket cuci di ZX Carwash"
              className="block w-full rounded-[1.6rem]"
            />
          </div>
        </section>

        {/* fitur */}
        <section id="fitur" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">Fitur</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Yang membedakan dari kasir biasa</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Dirancang untuk usaha cuci yang juga berjualan makanan — bukan kasir toko yang dipaksa.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fitur.map((f) => (
              <div
                key={f.judul}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-colors hover:border-gray-600"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-900 bg-gray-900 text-cyan-400">
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">Harga</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Satu paket, semua fitur</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Tidak ada tier bertingkat. Satu langganan mencakup aplikasi Android dan server-nya.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="relative flex flex-col rounded-2xl border border-cyan-800 bg-gradient-to-b from-cyan-950/40 to-gray-900/40 p-6 ring-4 ring-cyan-950/40">
              <span className="absolute -top-2.5 left-6 rounded bg-blue-600 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                Hemat 2 bulan
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">Tahunan</h3>
              <p className="mt-3 text-3xl font-extrabold tracking-tight tabular-nums">
                Rp 1.000.000<span className="text-sm font-medium text-gray-500"> /tahun</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">Setara Rp 83.333 per bulan — bayar sekali untuk 12 bulan.</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[13px] text-gray-300">
                {paketFitur.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZX%20Carwash%20tahunan"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                Langganan tahunan
              </a>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">Bulanan</h3>
              <p className="mt-3 text-3xl font-extrabold tracking-tight tabular-nums">
                Rp 100.000<span className="text-sm font-medium text-gray-500"> /bulan</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">Fleksibel, berhenti kapan pun tanpa penalti.</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[13px] text-gray-300">
                {paketFitur.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZX%20Carwash%20bulanan"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-center text-sm font-semibold transition-colors hover:border-gray-600 hover:bg-gray-700"
              >
                Langganan bulanan
              </a>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-center text-xs leading-relaxed text-gray-500">
            Gratis demo 1 bulan, akses semua fitur. Setelahnya pilih bulanan atau tahunan — data tetap tersimpan.
          </p>
        </section>

        {/* faq */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">FAQ</p>
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
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-700 bg-gradient-to-r from-cyan-950/40 to-gray-900/40 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">Siap pindahkan kasir cuci Anda ke ZX Carwash?</h2>
              <p className="mt-1.5 text-sm text-gray-400">Pasang di Android, transaksi tetap jalan meski sinyal hilang. Gratis demo 1 bulan.</p>
            </div>
            <a
              href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20mencoba%20ZX%20Carwash"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 cursor-pointer rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
            >
              Hubungi kami
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-gray-800 py-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 PT Zomet Teknologi Indonesia</span>
          <span>zomet.my.id · ZX Carwash</span>
        </footer>
      </div>
    </main>
  )
}
