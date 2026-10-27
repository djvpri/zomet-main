import type { Metadata } from 'next'
import Link from 'next/link'
import { getDownloads } from '@/lib/downloads'

export const metadata: Metadata = {
  title: 'Z1 Pos — Kasir & Label Harga | Zomet',
  description:
    'Z1 Pos: Z1 Kasir untuk desktop Windows dan Z1 Label untuk Android. Satu langganan, semua fitur. Rp 100.000/bulan atau Rp 1.000.000/tahun.',
}

export const revalidate = 3600

const features = [
  { img: 'kasir', title: 'Transaksi kasir', desc: 'Cari produk, keranjang, bayar tunai/QRIS/transfer, struk langsung cetak.', wide: true },
  { img: 'produk', title: 'Manajemen produk', desc: 'Harga jual, harga modal, stok, dan barcode per SKU.' },
  { img: 'laporan', title: 'Laporan penjualan', desc: 'Ringkasan omzet, produk terlaris, dan laba per periode.' },
  { img: 'stok', title: 'Stock opname', desc: 'Sesi hitung fisik, riwayat SO, dan koreksi stok otomatis.' },
  { img: 'kas', title: 'Pengeluaran kas', desc: 'Catat biaya operasional harian, filter per tanggal.' },
  { img: 'staff', title: 'Kelola staff', desc: 'Buat akun kasir, atur akses, pantau shift.' },
  { img: 'member', title: 'Member & harga khusus', desc: 'Kategori pelanggan dengan diskon otomatis.' },
  { img: 'online', title: 'Toko online', desc: 'Subdomain publik + checkout via WhatsApp.' },
  { img: 'ai', title: 'Asisten AI', desc: 'Analisis bisnis dan saran stok dari data penjualan Anda.' },
]

const planFeats = [
  'Z1 Kasir desktop (Windows)',
  'Z1 Label (Android)',
  'Multi-kasir & shift report',
  'Stok, laba, export Excel',
  'Backup harian & update otomatis',
]

const faqs = [
  { q: 'Apakah Z1 Kasir butuh internet?', a: 'Tidak untuk transaksi. Data disimpan lokal dan disinkronkan saat koneksi kembali.' },
  { q: 'Printer apa yang didukung?', a: 'Struk thermal 58/80 mm dengan driver Windows, dan printer label TSPL untuk Z1 Label.' },
  { q: 'Bisa satu akun untuk dua aplikasi?', a: 'Ya. Satu akun Zomet berlaku untuk Z1 Kasir dan Z1 Label, termasuk paketnya.' },
  { q: 'Kalau berhenti langganan, data hilang?', a: 'Tidak. Data tetap bisa dibuka dan diekspor setelah masa demo berakhir.' },
]

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default async function Z1PosPage() {
  const downloads = await getDownloads()

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* header */}
      <header className="sticky top-0 z-20 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" aria-hidden="true" /> Zomet
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <span className="text-white">Produk</span>
            <a href="#harga" className="hidden transition-colors hover:text-white sm:block">Harga</a>
            <a href="#unduh" className="hidden transition-colors hover:text-white sm:block">Unduh</a>
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
          <span>Produk</span>
          <span>/</span>
          <span className="text-gray-300">Z1 Pos</span>
        </nav>

        {/* hero */}
        <section className="grid items-center gap-14 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-900 bg-sky-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-sky-300">
              Ekosistem Z1 Pos
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Jualan lebih rapi dengan{' '}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">Z1 Pos</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
              Satu ekosistem kasir dari Zomet: <b className="text-gray-200">Z1 Kasir</b> di desktop toko,{' '}
              <b className="text-gray-200">Z1 Label</b> di HP staf untuk cetak label harga. Sinkron, satu akun, satu tagihan.
            </p>
            <div className="mt-7 flex items-baseline gap-3">
              <span className="text-sm font-semibold text-gray-400">Mulai</span>
              <span className="text-4xl font-extrabold tracking-tight tabular-nums">Rp 100 rb</span>
              <span className="text-sm text-gray-500">/bulan · atau Rp 1 juta/tahun</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#unduh"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                Coba Z1 Kasir
              </a>
              <a
                href="#unduh"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold transition-colors hover:border-gray-500 hover:bg-gray-800"
              >
                <i className="bi bi-download" aria-hidden="true" /> Unduh Aplikasi
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-6 text-xs text-gray-400">
              {['Windows & Android', 'Jalan offline', 'Data milik Anda'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-emerald-400"><Check /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-3 py-2">
                <i className="h-2.5 w-2.5 rounded-full bg-gray-700" />
                <i className="h-2.5 w-2.5 rounded-full bg-gray-700" />
                <i className="h-2.5 w-2.5 rounded-full bg-gray-700" />
                <span className="ml-2 font-mono text-[10px] text-gray-500">Z1 Kasir — Toserba Raya Mart</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/z1pos/kasir.webp" alt="Layar transaksi Z1 Kasir" className="block w-full" />
            </div>
            <div className="absolute -bottom-6 -right-2 w-40 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/70 ring-4 ring-gray-950 sm:w-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/z1pos/label-a.webp" alt="Z1 Label di Android" className="block w-full" />
            </div>
          </div>
        </section>

        {/* dua produk */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">Isi paket</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Dua aplikasi, satu ekosistem</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Z1 Kasir mengurus transaksi dan stok. Z1 Label mencetak label harga dari HP. Keduanya memakai data produk yang sama.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                img: 'kasir', cap: 'transaksi & keranjang', name: 'Z1 Kasir', meta: 'Windows 10/11 · v0.1.141',
                chip: 'Windows', chipCls: 'border-sky-800 bg-sky-950/50 text-sky-300',
                desc: 'Kasir desktop untuk toko harian. Transaksi cepat, stok otomatis berkurang, struk langsung tercetak ke printer thermal.',
                feats: ['Multi-kasir & shift report', 'Stok, harga modal, dan laba otomatis', 'Struk thermal 58/80 mm & barcode'],
                cta: 'Unduh',
              },
              {
                img: 'label-b', cap: 'cetak label dari HP', name: 'Z1 Label', meta: 'Android 8+ · v1.8.62',
                chip: 'Android', chipCls: 'border-emerald-800 bg-emerald-950/50 text-emerald-300',
                desc: 'Cetak label harga dari HP ke printer TSPL via Bluetooth. Pilih produk, atur ukuran, cetak — tanpa buka komputer.',
                feats: ['Template retail & harga dominan', 'Barcode otomatis dari kode produk', 'Ukuran label bebas (mm)'],
                cta: 'Unduh APK',
              },
            ].map((p) => (
              <article
                key={p.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-900/40 transition-colors hover:border-gray-600"
              >
                <div className="relative border-b border-gray-800 bg-gray-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/z1pos/${p.img}.webp`} alt={`${p.name} — ${p.cap}`} className="block h-44 w-full object-cover object-top opacity-90" />
                  <span className="absolute bottom-2.5 left-3 rounded border border-gray-700 bg-gray-950/80 px-2 py-0.5 font-mono text-[10px] text-gray-300">
                    {p.cap}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                      <p className="mt-1 text-xs text-gray-500 tabular-nums">{p.meta}</p>
                    </div>
                    <span className={`shrink-0 rounded border px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${p.chipCls}`}>
                      {p.chip}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.desc}</p>
                  <ul className="mt-4 flex flex-col gap-2 text-[13px] text-gray-300">
                    {p.feats.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-sky-400"><Check /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-800 pt-5">
                    <div className="text-xl font-extrabold tracking-tight">
                      Termasuk
                      <span className="mt-0.5 block text-xs font-medium text-gray-500">paket Z1 Pos</span>
                    </div>
                    <a href="#unduh" className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold transition-colors hover:bg-blue-500">
                      {p.cta}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* fitur */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">Fitur</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Yang bisa Anda lakukan</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Sembilan layar utama Z1 Kasir, dari transaksi harian sampai laporan dan asisten AI.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <figure
                key={f.img}
                className={`m-0 flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-600 ${f.wide ? 'sm:col-span-2' : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/z1pos/${f.img}.webp`} alt={f.title} className="block w-full border-b border-gray-800" />
                <figcaption className="px-5 py-4">
                  <b className="block text-sm font-bold">{f.title}</b>
                  <span className="mt-1 block text-xs leading-relaxed text-gray-400">{f.desc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* harga */}
        <section id="harga" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">Harga</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Satu harga, semua fitur</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Tidak ada tier bertingkat. Satu paket berisi Z1 Kasir dan Z1 Label dengan seluruh fitur terbuka.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="relative flex flex-col rounded-2xl border border-blue-800 bg-gradient-to-b from-blue-950/40 to-gray-900/40 p-6 ring-4 ring-blue-950/40">
              <span className="absolute -top-2.5 left-6 rounded bg-blue-600 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                Hemat 2 bulan
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">Tahunan</h3>
              <p className="mt-3 text-3xl font-extrabold tracking-tight tabular-nums">
                Rp 1.000.000<span className="text-sm font-medium text-gray-500"> /tahun</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">Setara Rp 83.333 per bulan — bayar sekali untuk 12 bulan.</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[13px] text-gray-300">
                {planFeats.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-blue-500">
                Langganan tahunan
              </button>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">Bulanan</h3>
              <p className="mt-3 text-3xl font-extrabold tracking-tight tabular-nums">
                Rp 100.000<span className="text-sm font-medium text-gray-500"> /bulan</span>
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">Fleksibel, berhenti kapan pun tanpa penalti.</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-[13px] text-gray-300">
                {planFeats.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full cursor-pointer rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-gray-600 hover:bg-gray-700">
                Langganan bulanan
              </button>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-center text-xs leading-relaxed text-gray-500">
            Gratis demo 1 bulan, akses semua fitur. Setelahnya pilih bulanan atau tahunan — data tetap tersimpan.
          </p>
        </section>

        {/* unduhan */}
        <section id="unduh" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">Unduhan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Ambil aplikasinya</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Installer dan versi portable untuk Windows, APK untuk Android. Selalu versi terbaru dari GitHub Releases.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {downloads.map((d) => (
              <div
                key={d.id}
                className="grid grid-cols-[46px_1fr] items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-colors hover:border-gray-600 sm:grid-cols-[46px_1fr_auto_auto] sm:p-5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-gray-700 bg-gray-800/60 text-sky-400">
                  <i className={`bi ${d.id === 'z1label' ? 'bi-phone' : 'bi-display'} text-lg`} aria-hidden="true" />
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold transition-colors hover:bg-blue-500 sm:col-span-1"
                >
                  {d.assets[0].label}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 flex items-start gap-2 rounded-xl border border-gray-800 bg-gray-900/40 p-4 text-xs leading-relaxed text-gray-400">
            <i className="bi bi-info-circle mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
            <span>
              <b className="text-gray-200">Windows:</b> belum bersertifikat komersial — saat pertama dibuka pilih More info lalu Run
              anyway. <b className="text-gray-200">Android:</b> izinkan Install unknown apps untuk browser yang dipakai mengunduh.
            </span>
          </p>
        </section>

        {/* faq */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Pertanyaan yang sering muncul</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <h3 className="text-sm font-bold">{f.q}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-700 bg-gradient-to-r from-sky-950/50 to-gray-900/40 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">Siap coba Z1 Pos di toko Anda?</h2>
              <p className="mt-1.5 text-sm text-gray-400">Unduh, pasang, dan mulai transaksi dalam 5 menit. Gratis demo 1 bulan.</p>
            </div>
            <a
              href="#unduh"
              className="shrink-0 cursor-pointer rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
            >
              Unduh Z1 Kasir
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-gray-800 py-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 PT Zomet Teknologi Indonesia</span>
          <span>zomet.my.id · Z1 Pos</span>
        </footer>
      </div>
    </main>
  )
}
