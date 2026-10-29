import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AcuMedis — Klinik Akupunktur & TCM | Zomet',
  description:
    'AcuMedis: pasien, jadwal, sesi terapi, analisis lidah AI, nota thermal, dan laporan keuangan klinik. Aplikasi Android + backend. Rp 100.000/bulan atau Rp 1.000.000/tahun.',
}

const features = [
  {
    img: 'dashboard',
    title: 'Beranda & antrean',
    desc: 'Jadwal hari ini, jumlah selesai, menunggu, dan belum bayar — sekilas sebelum pasien pertama masuk.',
    wide: true,
  },
  { img: 'pasien', title: 'Pasien', desc: 'Daftar pasien dengan pencarian, jumlah sesi, dan kunjungan terakhir.' },
  { img: 'rekam-medis', title: 'Rekam medis', desc: 'Riwayat sesi per pasien: keluhan, diagnosis TCM, titik terapi, dan nota.' },
  { img: 'sesi-baru', title: 'Sesi terapi', desc: 'Lidah, titik akupunktur, skala nyeri, biaya, dan bantuan analisis AI dalam satu layar.' },
  { img: 'jadwal', title: 'Jadwal', desc: 'Booking per hari dengan nomor antrean otomatis dan pencegahan jam bentrok.' },
  { img: 'keuangan', title: 'Keuangan', desc: 'Pendapatan, pengeluaran, laba, piutang, dan grafik harian per periode.' },
]

const planFeats = [
  'Aplikasi Android (semua fitur)',
  'Pasien & sesi terapi tanpa batas',
  'Analisis lidah AI (Gemini di server)',
  'Nota thermal 58/80 mm + kirim WhatsApp',
  'Laporan keuangan & daftar piutang',
]

const faqs = [
  { q: 'Analisis lidah AI-nya pakai apa?', a: 'Gemini, dipanggil lewat server AcuMedis — kunci API tidak pernah masuk ke aplikasi. Hasilnya saran bantu, bukan diagnosis final.' },
  { q: 'Nota bisa dicetak ke printer thermal?', a: 'Bisa. Nota digambar 384 px (58 mm) sehingga pas untuk printer thermal 58 mm maupun 80 mm, dan bisa dikirim ke WhatsApp sebagai gambar.' },
  { q: 'Apakah berjalan tanpa internet?', a: 'Data tersimpan di server, jadi aplikasi butuh koneksi. Nota yang sudah dibuat tetap bisa dicetak ulang dari riwayat.' },
  { q: 'Bisa lebih dari satu praktisi?', a: 'Bisa. Jumlah praktisi mengikuti paket lisensi, dan tiap praktisi punya akun sendiri.' },
]

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function AcuMedisPage() {
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
          <span className="text-gray-300">AcuMedis</span>
        </nav>

        {/* hero */}
        <section className="grid items-center gap-14 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-900 bg-sky-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-sky-300">
              Android + backend
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Rekam medis klinik{' '}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">tanpa kertas</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
              <b className="text-gray-200">AcuMedis</b> menangani pasien, jadwal, sesi terapi akupunktur, analisis lidah dengan AI,
              nota thermal, sampai laporan keuangan — dari aplikasi Android.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-sm font-semibold text-gray-400">Mulai</span>
              <span className="text-3xl font-extrabold tracking-tight tabular-nums">Rp 100.000</span>
              <span className="text-sm text-gray-500">/bulan · atau Rp 1 juta/tahun</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/api/dl/acumedis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                <i className="bi bi-download" aria-hidden="true" /> Unduh aplikasi
              </a>
              <a
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20mencoba%20AcuMedis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-sm font-semibold transition-colors hover:border-gray-500 hover:bg-gray-800"
              >
                Minta akun demo
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-6 text-xs text-gray-400">
              {['Android native', 'Analisis lidah AI', 'Nota thermal'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-emerald-400"><Check /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* pratinjau HP: rasio 709x1600 */}
          <div className="mx-auto w-full max-w-[290px] overflow-hidden rounded-[2rem] border border-gray-700 bg-gray-900 p-2 shadow-2xl shadow-black/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/acumedis/dashboard.webp"
              alt="Beranda AcuMedis"
              className="block w-full rounded-[1.6rem]"
            />
          </div>
        </section>

        {/* fitur */}
        <section id="fitur" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">Fitur</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Isi lengkap AcuMedis</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Dari pendaftaran pasien sampai laporan laba bulanan, tanpa buku catatan.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <figure
                key={f.img}
                className={`m-0 flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-600 ${
                  f.wide ? 'sm:col-span-2' : ''
                }`}
              >
                <div className={`bg-gray-950 ${f.wide ? 'p-4' : 'p-3'} flex justify-center`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/acumedis/${f.img}.webp`}
                    alt={f.title}
                    className={`block rounded-lg border border-gray-800 ${f.wide ? 'max-h-[460px]' : 'max-h-[420px]'} w-auto`}
                  />
                </div>
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
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">Harga</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Satu paket, semua fitur</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Tidak ada tier bertingkat. Satu langganan mencakup aplikasi Android dan backend-nya.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="relative flex flex-col rounded-2xl border border-sky-800 bg-gradient-to-b from-sky-950/40 to-gray-900/40 p-6 ring-4 ring-sky-950/40">
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
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20AcuMedis%20tahunan"
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
                href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20langganan%20AcuMedis%20bulanan"
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
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-700 bg-gradient-to-r from-sky-950/40 to-gray-900/40 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">Siap pindahkan klinik Anda ke AcuMedis?</h2>
              <p className="mt-1.5 text-sm text-gray-400">Pasang di Android, data pasien langsung rapi. Gratis demo 1 bulan.</p>
            </div>
            <a
              href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20mencoba%20AcuMedis"
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
          <span>zomet.my.id · AcuMedis</span>
        </footer>
      </div>
    </main>
  )
}
