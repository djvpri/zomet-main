import type { Metadata } from 'next'
import Link from 'next/link'
import { getDownloads, ZXPAJAK_DOWNLOADS } from '@/lib/downloads'

// ISR: halaman dirender ulang tiap 5 menit supaya versi & ukuran APK mengikuti
// rilis terbaru. Tanpa ini, getDownloads() hanya jalan saat build (tanpa token)
// dan repo privat gagal dibaca.
export const revalidate = 300

export const metadata: Metadata = {
  title: 'ZX Pajak Kendaraan — Cek & Bayar Pajak KB Kalbar | Zomet',
  description:
    'ZX Pajak Kendaraan: cek dan bayar pajak kendaraan plat KB Kalimantan Barat dari HP. Unggah STNK, terima rincian, bayar transfer, struk tersimpan. Aplikasi Android.',
}

const alur = [
  {
    n: '01',
    t: 'Masukkan plat',
    d: 'Tiga kotak: KB tetap, angka 1–4 digit, lalu kode huruf. Nomor WhatsApp ikut diisi untuk kabar status.',
  },
  {
    n: '02',
    t: 'Unggah STNK',
    d: 'Foto STNK dari HP. Petugas memverifikasi data kendaraan; kamu tidak perlu mengisi angka pajak sendiri.',
  },
  {
    n: '03',
    t: 'Terima rincian',
    d: 'Rincian terbuka: pajak pokok, biaya cek, biaya admin, dan biaya kirim — dipisah, bukan satu angka gelondongan.',
  },
  {
    n: '04',
    t: 'Bayar & simpan struk',
    d: 'Bayar transfer ke rekening yang tampil di layar, unggah bukti, struk tersimpan dan bisa disalin atau dibagikan sebagai gambar.',
  },
]

const fitur = [
  {
    ikon: 'bi-phone',
    judul: 'Tanpa antre samsat',
    teks: 'Semua langkah dari HP: input plat, unggah STNK, rincian, sampai bukti bayar. Tidak perlu datang atau titip berkas.',
  },
  {
    ikon: 'bi-receipt-cutoff',
    judul: 'Rincian terbuka',
    teks: 'Pajak pokok, biaya cek, admin, dan kirim ditampilkan terpisah. Kamu tahu ke mana uangnya pergi sebelum menekan Bayar.',
  },
  {
    ikon: 'bi-bell',
    judul: 'Status lewat notifikasi',
    teks: 'Push notification saat permintaan dibuat, dijawab petugas, lunas, dan saat struk siap — tidak perlu menebak dengan membuka app.',
  },
  {
    ikon: 'bi-share',
    judul: 'Struk bisa dibagikan',
    teks: 'Struk disalin sebagai teks atau dibagikan sebagai gambar — berguna saat perlu bukti untuk pihak lain.',
  },
  {
    ikon: 'bi-shield-check',
    judul: 'Masuk dengan Google',
    teks: 'Login pakai akun Google lewat Credential Manager. Tidak ada password tambahan yang harus dihafal atau bocor.',
  },
  {
    ikon: 'bi-clock-history',
    judul: 'Riwayat di satu tempat',
    teks: 'Semua permintaan tampil di layar input: status, total, dan status bayar — bisa dibuka lagi kapan saja.',
  },
]

const faq = [
  {
    q: 'Kendaraan apa yang bisa dipakai?',
    a: 'Kendaraan dengan plat nomor berawalan KB — Kalimantan Barat. Prefix KB dikunci di layar, jadi tidak bisa salah ketik.',
  },
  {
    q: 'Apakah harus punya akun?',
    a: 'Cukup akun Google. Tidak ada pendaftaran terpisah dan tidak ada password baru; token sesi disimpan di perangkat.',
  },
  {
    q: 'Bagaimana cara bayarnya?',
    a: 'Transfer ke rekening yang ditampilkan di layar pembayaran, lalu unggah bukti transfer. Petugas memverifikasi dan status berubah jadi lunas.',
  },
  {
    q: 'Berapa biayanya?',
    a: 'Pemakaian aplikasi gratis. Yang dibayar adalah pajak kendaraan itu sendiri ditambah biaya layanan (cek, admin, kirim) yang sudah ditampilkan di rincian sebelum kamu membayar.',
  },
]

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default async function ZXPajakPage() {
  const downloads = await getDownloads(ZXPAJAK_DOWNLOADS)
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="sticky top-0 z-20 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex min-h-[44px] items-center gap-2 text-lg font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" aria-hidden="true" /> Zomet
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/produk" className="text-white">Produk</Link>
            <a href="#alur" className="hidden transition-colors hover:text-white sm:block">Cara pakai</a>
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
          <span className="text-gray-300">ZX Pajak Kendaraan</span>
        </nav>

        {/* hero */}
        <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900 bg-emerald-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-300">
              Android · plat KB
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              Pajak kendaraan,{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                tanpa antre samsat
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
              <b className="text-gray-200">ZX Pajak Kendaraan</b> menerima permintaan cek pajak plat KB dari HP. Unggah
              STNK, petugas memverifikasi, rincian muncul dengan angka yang dipisah, lalu bayar transfer dan bukti
              tersimpan sebagai struk.
            </p>
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-sm font-semibold text-gray-400">Aplikasi</span>
              <span className="text-3xl font-extrabold tracking-tight">Gratis</span>
              <span className="text-sm text-gray-500">biaya layanan tampil di rincian sebelum bayar</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/api/dl/zxpajak"
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold transition-colors hover:bg-blue-500"
              >
                <i className="bi bi-download" aria-hidden="true" /> Unduh aplikasi
              </a>
              <a
                href="#alur"
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-5 text-sm font-semibold transition-colors hover:border-gray-500 hover:bg-gray-800"
              >
                Lihat cara pakai
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/50 p-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-gray-700 bg-gray-800/60 text-emerald-400">
                <i className="bi bi-phone text-lg" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold">{downloads[0]?.name ?? 'ZX Pajak Kendaraan — Android'}</p>
                <p className="mt-0.5 text-xs text-gray-500">{downloads[0]?.assets[0]?.note}</p>
              </div>
              <div className="text-left text-xs text-gray-400 tabular-nums sm:text-right">
                <b className="font-bold text-gray-200">v{downloads[0]?.version ?? '1.1.1'}</b>
                {downloads[0]?.assets[0]?.size && <span className="block">{downloads[0].assets[0].size}</span>}
              </div>
            </div>
            <ul className="mt-6 flex flex-wrap gap-6 text-xs text-gray-400">
              {['Plat KB Kalbar', 'Unggah STNK', 'Struk digital'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-emerald-400"><Check /></span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 rounded-xl border border-gray-800 bg-gray-900/40 p-4 text-xs leading-relaxed text-gray-400">
              <i className="bi bi-info-circle mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
              <span>
                <b className="text-gray-200">Android:</b> unduhan langsung berupa APK (belum di Play Store). Izinkan
                <b className="text-gray-200"> Install unknown apps</b> untuk browser yang dipakai mengunduh; kalau Play
                Protect muncul, pilih Install anyway. Tersedia juga cek pembaruan otomatis di dalam aplikasi.
              </span>
            </p>
          </div>

          {/* kartu alur ringkas */}
          <div className="flex flex-col gap-3">
            {alur.map((a) => (
              <div
                key={a.n}
                className="grid grid-cols-[38px_1fr] items-start gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-colors hover:border-gray-600"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-900 bg-gray-950 font-mono text-xs font-bold text-emerald-400">
                  {a.n}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold">{a.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-400">{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* pratinjau layar */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Tampilan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Lima layar, dari input sampai struk</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Input plat, rincian tagihan, pembayaran, bukti terkirim, dan struk — semuanya di HP.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                img: 'input', w: 709, h: 1600, t: 'Input plat',
                d: 'Tiga kotak: KB terkunci, angka, lalu kode huruf — plus nomor WhatsApp untuk kabar status.',
              },
              {
                img: 'rincian', w: 709, h: 1600, t: 'Rincian tagihan',
                d: 'Total, rincian biaya, dan detail pengiriman dalam satu layar sebelum membayar.',
              },
              {
                img: 'bayar', w: 709, h: 1600, t: 'Pembayaran',
                d: 'Nominal dan rekening tujuan ditampilkan; unggah bukti transfer, lalu kirim.',
              },
              {
                img: 'terkirim', w: 709, h: 1600, t: 'Bukti terkirim',
                d: 'Status jelas: bukti sudah dikirim dan sedang menunggu verifikasi admin.',
              },
              {
                img: 'struk', w: 709, h: 1600, t: 'Struk digital',
                d: 'Setelah lunas, struk tercetak dengan rincian, kurir, dan nomor resi.',
              },
            ].map((f) => (
              <figure
                key={f.img}
                className="m-0 flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-colors hover:border-gray-600"
              >
                <div className="flex justify-center bg-gray-950 p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/zxpajak/${f.img}.webp`}
                    alt={`${f.t} di ZX Pajak Kendaraan`}
                    width={f.w}
                    height={f.h}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto rounded-lg border border-gray-800"
                    style={{ maxHeight: 420 }}
                  />
                </div>
                <figcaption className="px-5 py-4">
                  <b className="block text-sm font-bold">{f.t}</b>
                  <span className="mt-1 block text-xs leading-relaxed text-gray-400">{f.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* alur lengkap */}
        <section id="alur" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Alur</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Empat langkah, semuanya dari HP</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Tidak ada berkas yang perlu diantar dan tidak ada angka yang perlu kamu hitung sendiri.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {alur.map((a) => (
              <div key={a.n} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <span className="font-mono text-xs font-bold text-emerald-400">{a.n}</span>
                <h3 className="mt-3 text-sm font-bold">{a.t}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{a.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* fitur */}
        <section id="fitur" className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Fitur</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Yang membuatnya beda dari titip berkas</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Status yang jelas, angka yang terbuka, dan bukti yang tidak hilang.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fitur.map((f) => (
              <div
                key={f.judul}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-colors hover:border-gray-600"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-900 bg-gray-900 text-emerald-400">
                  <i className={`bi ${f.ikon} text-lg`} aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-sm font-bold">{f.judul}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{f.teks}</p>
              </div>
            ))}
          </div>
        </section>

        {/* biaya */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">Biaya</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Yang dibayar, terlihat semua</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Tidak ada angka gelondongan. Empat baris ini yang muncul di layar rincian sebelum kamu menekan Bayar.
            </p>
          </div>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
            {[
              ['Pajak pokok', 'Sesuai data kendaraan dari STNK'],
              ['Biaya cek', 'Verifikasi data oleh petugas'],
              ['Biaya admin', 'Pengurusan berkas'],
              ['Biaya kirim', 'Pengiriman bukti/surat'],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  i > 0 ? 'border-t border-gray-800' : ''
                }`}
              >
                <b className="text-sm">{k}</b>
                <span className="text-xs text-gray-400">{v}</span>
              </div>
            ))}
            <div className="border-t border-gray-800 bg-gray-950/60 px-6 py-4">
              <p className="text-xs leading-relaxed text-gray-400">
                Pemakaian aplikasi tidak dikenakan langganan. Nominal tiap baris ditentukan dari data kendaraan dan
                tampil di rincian sebelum pembayaran.
              </p>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="border-t border-gray-800 py-16">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">FAQ</p>
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
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-700 bg-gradient-to-r from-emerald-950/40 to-gray-900/40 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">Pajak kendaraanmu sudah dekat jatuh tempo?</h2>
              <p className="mt-1.5 text-sm text-gray-400">
                Kirim plat dan foto STNK, sisanya kami urus. Rincian dulu, baru bayar.
              </p>
            </div>
            <a
              href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20mengunduh%20ZX%20Pajak%20Kendaraan"
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
          <span>zomet.my.id · ZX Pajak Kendaraan</span>
        </footer>
      </div>
    </main>
  )
}
