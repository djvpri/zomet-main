import type { Metadata } from 'next'
import Link from 'next/link'
import { getDownloads, ZROOMS_DOWNLOADS } from '@/lib/downloads'

export const metadata: Metadata = {
  title: 'ZXRoom — Booking Ruangan & Meeting Room | Zomet',
  description:
    'ZXRoom: booking ruangan untuk meeting room, studio, dan co-working space. Cek jadwal, pesan slot, dan kelola pembayaran. Aplikasi Android. Rp 100.000/bulan atau Rp 1.000.000/tahun.',
}

export const revalidate = 3600

const planFeats = [
  'ZXRoom versi web (semua fitur)',
  'Aplikasi Android (APK)',
  'Ruangan & jadwal tanpa batas',
  'Booking online + konfirmasi otomatis',
  'Laporan pemakaian & pendapatan',
]

const faqs = [
  { q: 'Penyewa perlu instal aplikasi?', a: 'Tidak. Penyewa bisa memesan lewat halaman web. Aplikasi Android untuk pengelola atau staf yang perlu memantau dari HP.' },
  { q: 'Bisa atur harga berbeda per ruangan?', a: 'Bisa. Tiap ruangan punya tarif sendiri, termasuk tarif per jam dan paket harian.' },
  { q: 'Bagaimana mencegah jadwal bentrok?', a: 'Slot yang sudah dipesan langsung terkunci, jadi tak ada double booking.' },
  { q: 'Data booking bisa diekspor?', a: 'Bisa. Riwayat booking dan laporan pendapatan dapat diunduh untuk pembukuan.' },
]

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default async function ZRoomsPage() {
  const downloads = await getDownloads(ZROOMS_DOWNLOADS)

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
          <Link href="/produk" className="hover:text-gray-300">Produk</Link>
          <span>/</span>
          <span className="text-gray-300">ZXRoom</span>
        </nav>

        {/* hero */}
        <section className="py-11 lg:py-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-900 bg-violet-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-violet-300">
              Web + Android
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Ruangan terisi,{' '}
              <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">jadwal rapi</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400">
              <b className="text-gray-200">ZXRoom</b> mengurus booking meeting room, studio, dan co-working space — cek
              ketersediaan, pesan slot, sampai tagihan. Pengelola bisa pantau dari HP.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-sm font-semibold text-gray-400">Mulai</span>
              <span className="text-3xl font-extrabold tracking-tight tabular-nums">Rp 100.000</span>
              <span className="text-sm text-gray-500">/bulan · atau Rp 1 juta/tahun</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#unduh"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                <i className="bi bi-download" aria-hidden="true" /> Unduh aplikasi
              </a>
              <a
                href="https://z-rooms.zomet.my.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold transition-colors hover:border-gray-500 hover:bg-gray-800"
              >
                Buka versi web
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-6 text-xs text-gray-400">
              {['Booking tanpa bentrok', 'Tarif per ruangan', 'Pantau dari HP'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-violet-400"><Check /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* cara kerja */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">Cara kerja</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Tiga langkah, ruangan terpesan</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { n: '01', t: 'Pilih ruangan', d: 'Lihat daftar ruangan beserta tarif dan fasilitasnya.' },
              { n: '02', t: 'Pilih slot', d: 'Jadwal tampil real-time; slot yang sudah terisi tak bisa dipilih.' },
              { n: '03', t: 'Konfirmasi', d: 'Booking tercatat, tagihan dan status pembayaran ikut tersimpan.' },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <span className="font-mono text-xs font-bold text-violet-400">{s.n}</span>
                <h3 className="mt-3 text-sm font-bold">{s.t}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* pratinjau aplikasi */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">Tampilan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Sembilan layar utama ZXRoom</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Dari kamar dan penyewa sampai karaoke, penjualan, shift kasir, dan laporan pendapatan.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { img: 'dashboard', title: 'Dashboard', desc: 'Hunian, kamar terisi, pendapatan bulan ini, dan aktivitas terbaru.', wide: true },
              { img: 'kamar', title: 'Kamar', desc: 'Daftar kamar beserta status terisi atau kosong.' },
              { img: 'penyewa', title: 'Penyewa', desc: 'Data penyewa, kamar yang dipakai, dan masa sewanya.' },
              { img: 'booking-baru', title: 'Booking / sewa baru', desc: 'Pesan kamar untuk penyewa baru, langsung tercatat.' },
              { img: 'karaoke', title: 'Karaoke', desc: 'Sewa ruang karaoke dengan hitungan waktu dan tarif.' },
              { img: 'penjualan', title: 'Penjualan barang', desc: 'Kasir untuk minuman, makanan, dan item tambahan.' },
              { img: 'shift', title: 'Shift kasir', desc: 'Buka dan tutup shift, kas awal dan kas akhir tercatat.' },
              { img: 'keuangan', title: 'Keuangan', desc: 'Pendapatan, tagihan, dan pengeluaran dalam satu layar.' },
              { img: 'pengaturan', title: 'Pengaturan', desc: 'Identitas penginapan, tarif, dan pengaturan aplikasi.', wide: true },
            ].map((f) => (
              <figure
                key={f.img}
                className={`m-0 flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-600 ${
                  f.wide ? 'sm:col-span-2' : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/zrooms/${f.img}.webp`} alt={f.title} className="block w-full border-b border-gray-800" />
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
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">Harga</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Satu harga, semua fitur</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Satu langganan mencakup versi web dan aplikasi Android.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="relative flex flex-col rounded-2xl border border-violet-800 bg-gradient-to-b from-violet-950/40 to-gray-900/40 p-6 ring-4 ring-violet-950/40">
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
                    <span className="mt-0.5 shrink-0 text-violet-400"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZXRoom%20tahunan"
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
                {planFeats.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-violet-400"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZXRoom%20bulanan"
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

        {/* unduhan */}
        <section id="unduh" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">Unduhan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Aplikasi Android ZXRoom</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Untuk pengelola yang perlu memantau booking dari HP. Selalu versi terbaru dari GitHub Releases.
            </p>
          </div>
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
              <b className="text-gray-200">Android:</b> izinkan Install unknown apps untuk browser yang dipakai mengunduh. Kalau Play
              Protect muncul, pilih Install anyway.
            </span>
          </p>
        </section>

        {/* faq */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-400">FAQ</p>
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
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-700 bg-gradient-to-r from-violet-950/40 to-gray-900/40 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">Siap kelola ruangan Anda di ZXRoom?</h2>
              <p className="mt-1.5 text-sm text-gray-400">Mulai dari web, atau pasang aplikasinya di Android.</p>
            </div>
            <a
              href="#unduh"
              className="shrink-0 cursor-pointer rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
            >
              Unduh ZXRoom
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-gray-800 py-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 PT Zomet Teknologi Indonesia</span>
          <span>zomet.my.id · ZXRoom</span>
        </footer>
      </div>
    </main>
  )
}
