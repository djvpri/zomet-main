import type { Metadata } from 'next'
import Link from 'next/link'
import { getDownloads, ZXGYM_DOWNLOADS } from '@/lib/downloads'

export const metadata: Metadata = {
  title: 'ZXGym — Manajemen Gym & Membership | Zomet',
  description:
    'ZXGym: kelola member, kelas, jadwal, absensi QR, personal training, dan laporan keuangan gym. Web app + aplikasi Windows. Rp 100.000/bulan atau Rp 1.000.000/tahun.',
}

export const revalidate = 3600

const features = [
  { img: 'dashboard', title: 'Dashboard', desc: 'Ringkasan total member, omzet bulan ini, dan kelas populer sekilas.', wide: true },
  { img: 'member', title: 'Member', desc: 'Daftar anggota + QR gabung member untuk pendaftaran mandiri.' },
  { img: 'kelas', title: 'Kelas', desc: 'Buat kelas, atur kuota dan jadwalnya per studio.' },
  { img: 'jadwal', title: 'Jadwal', desc: 'Tabel jadwal mingguan semua kelas dan instruktur.' },
  { img: 'absensi', title: 'Absensi QR', desc: 'Member scan QR untuk check-in mandiri, riwayat tercatat otomatis.' },
  { img: 'pt', title: 'Personal Training', desc: 'Booking sesi PT, jadwal mendatang per trainer, dan riwayatnya.' },
  { img: 'pembayaran', title: 'Pembayaran', desc: 'Catat iuran member, ringkasan total, dan status lunas.' },
  { img: 'produk', title: 'Produk', desc: 'Jual suplemen, apparel, atau paket tambahan dari kasir gym.' },
  { img: 'laporan', title: 'Laporan', desc: 'Omzet, jumlah member aktif, dan performa kelas per periode.' },
  { img: 'ai', title: 'Asisten AI', desc: 'Analisis bisnis dan saran retensi dari data member Anda.' },
  { img: 'lisensi', title: 'Lisensi', desc: 'Status langganan dan sisa kuota paket yang dipakai.' },
  { img: 'staff', title: 'Kelola staff', desc: 'Akun resepsionis, trainer, dan admin dengan akses berbeda.' },
  { img: 'pengaturan', title: 'Pengaturan', desc: 'Info gym, jam operasional, dan identitas untuk halaman member.' },
]

const planFeats = [
  'ZXGym versi web (semua fitur)',
  'Aplikasi Windows (installer)',
  'Member, kelas & jadwal tanpa batas',
  'Absensi QR mandiri untuk member',
  'Laporan keuangan & export data',
]

const faqs = [
  { q: 'Member check-in pakai apa?', a: 'QR code. Member scan QR yang ditampilkan di meja resepsionis — absensi tercatat tanpa perlu alat tambahan.' },
  { q: 'Bisa lebih dari satu cabang?', a: 'Bisa. Tiap cabang punya data member, kelas, dan laporan sendiri dalam satu akun.' },
  { q: 'Apakah berjalan di HP?', a: 'Ya, ZXGym berupa aplikasi web — dibuka dari browser laptop maupun HP tanpa instalasi.' },
  { q: 'Data member bisa diekspor?', a: 'Bisa. Daftar member dan laporan keuangan dapat diunduh untuk arsip atau pembukuan.' },
]

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default async function ZXGymPage() {
  const downloads = await getDownloads(ZXGYM_DOWNLOADS)
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
          <span className="text-gray-300">ZXGym</span>
        </nav>

        {/* hero */}
        <section className="grid items-center gap-14 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900 bg-emerald-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-300">
              Web app + Windows
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Kelola gym tanpa{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">buku catatan</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
              <b className="text-gray-200">ZXGym</b> menangani member, kelas, jadwal, absensi QR, personal training, sampai laporan
              keuangan — dari browser atau aplikasi Windows.
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
                href="https://zxgym.zomet.my.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold transition-colors hover:border-gray-500 hover:bg-gray-800"
              >
                Buka versi web
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-6 text-xs text-gray-400">
              {['Web & Windows', 'Absensi QR', 'Multi cabang'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-emerald-400"><Check /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-3 py-2">
              <i className="h-2.5 w-2.5 rounded-full bg-gray-700" />
              <i className="h-2.5 w-2.5 rounded-full bg-gray-700" />
              <i className="h-2.5 w-2.5 rounded-full bg-gray-700" />
              <span className="ml-2 font-mono text-[10px] text-gray-500">ZXGym — Dashboard</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/zxgym/dashboard.webp" alt="Dashboard ZXGym" className="block w-full" />
          </div>
        </section>

        {/* fitur */}
        <section id="fitur" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Fitur</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Isi lengkap ZXGym</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Tiga belas layar utama, dari pendaftaran member sampai laporan bulanan.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <figure
                key={f.img}
                className={`m-0 flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-600 ${f.wide ? 'sm:col-span-2' : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/zxgym/${f.img}.webp`} alt={f.title} className="block w-full border-b border-gray-800" />
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Harga</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Satu paket, semua fitur</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Tidak ada tier bertingkat. Satu langganan mencakup versi web dan aplikasi Windows.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="relative flex flex-col rounded-2xl border border-emerald-800 bg-gradient-to-b from-emerald-950/40 to-gray-900/40 p-6 ring-4 ring-emerald-950/40">
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
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZXGym%20tahunan"
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
                    <span className="mt-0.5 shrink-0 text-emerald-400"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20ZXGym%20bulanan"
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Unduhan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Aplikasi Windows ZXGym</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Buka ZXGym langsung dari desktop, tanpa tab browser. Selalu versi terbaru dari GitHub Releases.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {downloads.map((d) => (
              <div
                key={d.id}
                className="grid grid-cols-[46px_1fr] items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-colors hover:border-gray-600 sm:grid-cols-[46px_1fr_auto_auto] sm:p-5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-gray-700 bg-gray-800/60 text-sky-400">
                  <i className="bi bi-display text-lg" aria-hidden="true" />
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
              anyway. Butuh WebView2 (sudah terpasang di Windows 10/11).
            </span>
          </p>
        </section>

        {/* faq */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">FAQ</p>
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
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-700 bg-gradient-to-r from-emerald-950/40 to-gray-900/40 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">Siap pindahkan gym Anda ke ZXGym?</h2>
              <p className="mt-1.5 text-sm text-gray-400">Buka dari browser, tanpa instalasi. Gratis demo 1 bulan.</p>
            </div>
            <a
              href="https://zxgym.zomet.my.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 cursor-pointer rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
            >
              Buka ZXGym
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-gray-800 py-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 PT Zomet Teknologi Indonesia</span>
          <span>zomet.my.id · ZXGym</span>
        </footer>
      </div>
    </main>
  )
}
