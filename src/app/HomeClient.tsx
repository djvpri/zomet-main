'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import type { Article } from '@/lib/articles'

interface App {
  id: string; name: string; description: string; description_en: string
  url: string; bsIcon: string; tags: string[]
}
interface Testimoni {
  id: string; user: string; initial: string; color: string
  bisnis: string; kota: string; app: string; bintang: number; kutipan: string
}
interface ForumThread {
  id: string; user: string; initial: string; color: string
  waktu: string; judul: string; icon?: string; kategori: 'tips' | 'pertanyaan' | 'update' | 'diskusi'
  balasan: number; views: number; app: string
}
interface TickerItem { icon: string; text: string }
interface Props { latestArticles: Article[] }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return count
}

const apps: App[] = [
  { id: 'zsnap', name: 'ZSnap', description: 'AI Screenshot Solver berbasis Gemini. Menjawab soal dari screenshot secara instan, tersembunyi di layar.', description_en: 'AI Screenshot Solver powered by Gemini. Answers questions from screenshots instantly, hidden on screen.', url: 'https://zsnap.zomet.my.id/', bsIcon: 'bi-robot', tags: ['AI', 'Productivity'] },
  { id: 'zgold', name: 'ZGold', description: 'Sistem POS untuk toko perhiasan dengan multi-logam (emas, perak, platinum, palladium).', description_en: 'Jewelry Store POS System with multi-metal support (gold, silver, platinum, palladium).', url: 'https://zgold.zomet.my.id/', bsIcon: 'bi-gem', tags: ['POS', 'Jewelry'] },
  { id: 'zbengkel', name: 'ZBengkel', description: 'SaaS Workshop POS untuk bengkel motor, mobil, dan alat berat.', description_en: 'Workshop POS SaaS for motorcycle, car, and heavy equipment workshops.', url: 'https://zbengkel.zomet.my.id/', bsIcon: 'bi-tools', tags: ['POS', 'Workshop'] },
  { id: 'zlaundry', name: 'ZLaundry', description: 'POS Laundry dengan fitur offline-first dan PWA untuk kemudahan mobilitas.', description_en: 'Laundry POS with offline-first and PWA features for mobile convenience.', url: 'https://zlaundry.zomet.my.id/', bsIcon: 'bi-droplet', tags: ['POS', 'Laundry'] },
  { id: 'zresto', name: 'Z-Resto', description: 'POS Restoran dengan manajemen meja, delivery, dan kitchen display system.', description_en: 'Restaurant POS with table management, delivery, and kitchen display system.', url: 'https://zresto.zomet.my.id/', bsIcon: 'bi-cup-hot', tags: ['POS', 'Restaurant'] },
  { id: 'zbilliar', name: 'ZBilliar', description: 'Sistem manajemen rental biliar dengan timer real-time per meja dan kasir otomatis.', description_en: 'Billiard rental management system with real-time per-table timer and automated cashier.', url: 'https://zbilliar.zomet.my.id/', bsIcon: 'bi-trophy', tags: ['POS', 'Billiard'] },
  { id: 'zpos', name: 'ZPos', description: 'Aplikasi kasir digital simpel, mobile-friendly untuk warung, kafe, toko, dan UMKM.', description_en: 'Simple digital cashier app, mobile-friendly for shops, cafes, and SMEs.', url: 'https://zpos.zomet.my.id/', bsIcon: 'bi-cart3', tags: ['POS', 'Commerce'] },
  { id: 'zface', name: 'ZFace', description: 'Sistem identifikasi wajah berbasis AI dengan real-time accuracy untuk kontrol akses.', description_en: 'AI-powered face identification system with real-time accuracy for access control.', url: 'https://zface.zomet.my.id/', bsIcon: 'bi-person-badge', tags: ['AI', 'Security'] },
  { id: 'zabsen', name: 'Z-Absen', description: 'Sistem absensi dengan face recognition dan validasi GPS geofencing.', description_en: 'Attendance system with face recognition and GPS geofencing validation.', url: 'https://zabsen.zomet.my.id/', bsIcon: 'bi-clipboard-check', tags: ['HR', 'Attendance'] },
  { id: 'zgym', name: 'ZGym', description: 'Manajemen membership gym dengan fitur kelas, jadwal, dan laporan keuangan.', description_en: 'Gym membership management with classes, schedules, and financial reports.', url: 'https://zgym.zomet.my.id/', bsIcon: 'bi-heart-pulse', tags: ['Fitness', 'SaaS'] },
  { id: 'zrooms', name: 'Z-Rooms', description: 'Booking ruangan untuk meeting room dan co-working space.', description_en: 'Room booking for meeting rooms and co-working spaces.', url: 'https://z-rooms.zomet.my.id/', bsIcon: 'bi-house-door', tags: ['Booking', 'Workspace'] },
  { id: 'zmedics', name: 'Z-Medics', description: 'Platform kesehatan dengan rekam medis digital dan konsultasi.', description_en: 'Healthcare platform with digital medical records and consultations.', url: 'https://zmedics.zomet.my.id/', bsIcon: 'bi-hospital', tags: ['Health', 'SaaS'] },
  { id: 'zwisata', name: 'ZWisata', description: 'Manajemen paket wisata & tour dengan laporan pendapatan dan booking online.', description_en: 'Tour & travel package management with revenue reports and online booking.', url: 'https://zwisata.zomet.my.id/', bsIcon: 'bi-compass', tags: ['Wisata', 'Booking'] },
  { id: 'zprint', name: 'ZPrint', description: 'POS percetakan dengan harga fleksibel per pcs, per meter, maupun per m².', description_en: 'Printing shop POS with flexible pricing per piece, per meter, or per m².', url: 'https://zprint.zomet.my.id/', bsIcon: 'bi-printer', tags: ['POS', 'Printing'] },
  { id: 'zbarber', name: 'ZBarber', description: 'Manajemen barbershop: appointment, jadwal barber, layanan, dan laporan.', description_en: 'Barbershop management: appointments, barber schedules, services, and reports.', url: 'https://zbarber.zomet.my.id/', bsIcon: 'bi-scissors', tags: ['Beauty', 'Service'] },
  { id: 'ztrader', name: 'ZTrader', description: 'Simulator battle 10 AI trading di pasar saham IDX LQ45 & Global secara real-time.', description_en: 'Real-time battle simulator for 10 AI traders on IDX LQ45 & Global stock markets.', url: 'https://ztrader.zomet.my.id/', bsIcon: 'bi-graph-up-arrow', tags: ['AI', 'Trading'] },
  { id: 'zone', name: 'ZOne', description: 'Hub terpusat untuk manajemen user dan app di ekosistem Zomet.', description_en: 'Centralized hub for user and app management across Zomet ecosystem.', url: 'https://zone.zomet.my.id/', bsIcon: 'bi-globe2', tags: ['Hub', 'Admin'] },
]

// ── 20 testimoni — dibagi 2 baris marquee, masing-masing diacak ──────────────
const allTestimoni: Testimoni[] = [
  { id: 'tm1',  user: 'Ahmad Rizki',        initial: 'AR', color: 'bg-blue-600',   bisnis: 'Toko Berkah',           kota: 'Surabaya',  app: 'ZPos',      bintang: 5, kutipan: 'ZPos bikin laporan harian cuma 10 menit. Dulu 2 jam manual pakai buku catatan!' },
  { id: 'tm2',  user: 'Dewi Rahayu',        initial: 'DR', color: 'bg-violet-600', bisnis: 'Bengkel Maju Jaya',     kota: 'Bandung',   app: 'ZBengkel',  bintang: 5, kutipan: 'Work order ZBengkel bikin mekanik saya terorganisir. Tidak ada lagi orderan yang terlewat.' },
  { id: 'tm3',  user: 'Siti Nurhaliza',     initial: 'SN', color: 'bg-pink-600',   bisnis: 'FitZone Gym',           kota: 'Jakarta',   app: 'ZGym',      bintang: 5, kutipan: 'Member naik 40% setelah pakai ZGym. Booking kelas online bikin member makin betah.' },
  { id: 'tm4',  user: 'Budi Santoso',       initial: 'BS', color: 'bg-green-600',  bisnis: 'Laundry Express',       kota: 'Yogyakarta',app: 'ZLaundry', bintang: 5, kutipan: 'Mode offline ZLaundry penyelamat! Mati internet, bisnis tetap jalan tanpa gangguan.' },
  { id: 'tm5',  user: 'Hendra Kurniawan',   initial: 'HK', color: 'bg-orange-600', bisnis: 'Warung Bahagia',        kota: 'Malang',    app: 'Z-Resto',   bintang: 5, kutipan: 'Kitchen Display ZResto bikin dapur sat-set. Order tidak pernah ketukar antar meja lagi.' },
  { id: 'tm6',  user: 'Rina Wahyuni',       initial: 'RW', color: 'bg-amber-600',  bisnis: 'Toko Mulia Emas',       kota: 'Semarang',  app: 'ZGold',     bintang: 5, kutipan: 'Laporan stok emas harian di ZGold akurat banget. Tidak ada selisih lagi di akhir bulan.' },
  { id: 'tm7',  user: 'Fajar Nugroho',      initial: 'FN', color: 'bg-teal-600',   bisnis: 'Bengkel Jaya Motor',    kota: 'Medan',     app: 'ZBengkel',  bintang: 5, kutipan: 'Estimasi selesai otomatis ZBengkel bikin pelanggan tidak kabur nunggu. Omzet naik 25%.' },
  { id: 'tm8',  user: 'Mega Lestari',       initial: 'ML', color: 'bg-pink-600',   bisnis: 'Bu Mega Laundry',       kota: 'Bali',      app: 'ZLaundry', bintang: 5, kutipan: 'Notifikasi WA ZLaundry bikin pelanggan senang. Tidak ada lagi yang nanya sudah selesai belum.' },
  { id: 'tm9',  user: 'Yanto Pratama',      initial: 'YP', color: 'bg-cyan-600',   bisnis: 'Barber Boss',           kota: 'Surabaya',  app: 'ZBarber',   bintang: 5, kutipan: 'Appointment online ZBarber habis dipesan dalam 2 jam. Antrian jadi terkontrol rapi.' },
  { id: 'tm10', user: 'Lilis Handayani',    initial: 'LH', color: 'bg-red-600',    bisnis: 'Klinik Sehat Mandiri',  kota: 'Jakarta',   app: 'Z-Medics',  bintang: 5, kutipan: 'Rekam medis digital ZMedics sangat membantu. Riwayat pasien muncul dalam hitungan detik.' },
  { id: 'tm11', user: 'Rudi Hermawan',      initial: 'RH', color: 'bg-indigo-600', bisnis: 'Tour Indah Nusantara',  kota: 'Lombok',    app: 'ZWisata',   bintang: 5, kutipan: 'Laporan revenue per paket ZWisata bikin saya tahu persis paket mana yang paling laku.' },
  { id: 'tm12', user: 'Anita Dewi',         initial: 'AD', color: 'bg-purple-600', bisnis: 'Copy Center Prima',     kota: 'Bekasi',    app: 'ZPrint',    bintang: 5, kutipan: 'Harga per m² di ZPrint otomatis terhitung. Tidak ada lagi salah hitung spanduk meter-meteran.' },
  { id: 'tm13', user: 'Surya Bakti',        initial: 'SB', color: 'bg-blue-600',   bisnis: 'Coffeeshop Asik',       kota: 'Makassar',  app: 'ZPos',      bintang: 5, kutipan: 'ZPos simpel tapi powerful. Staf baru langsung bisa pakai tanpa training panjang.' },
  { id: 'tm14', user: 'Eko Prasetyo',       initial: 'EP', color: 'bg-green-600',  bisnis: 'Biliar Galaxy',         kota: 'Jakarta',   app: 'ZBilliar',  bintang: 5, kutipan: 'Timer ZBilliar per meja akurat banget. Tidak ada lagi dispute tagihan dengan pelanggan.' },
  { id: 'tm15', user: 'Ratna Sari',         initial: 'RS', color: 'bg-violet-600', bisnis: 'GoldKu Jewelry',        kota: 'Bandung',   app: 'ZGold',     bintang: 5, kutipan: 'Multi-logam ZGold bikin toko emas saya bisa jual berbagai jenis perhiasan dalam satu sistem.' },
  { id: 'tm16', user: 'Hasan Basri',        initial: 'HB', color: 'bg-teal-600',   bisnis: 'Travel Berkah',         kota: 'Padang',    app: 'ZWisata',   bintang: 5, kutipan: 'ZWisata bikin saya kelola 20+ paket tour tanpa spreadsheet. Efisiensi naik drastis.' },
  { id: 'tm17', user: 'Titi Wahyuningsih',  initial: 'TW', color: 'bg-orange-600', bisnis: 'RM Padang Murah',       kota: 'Palembang', app: 'Z-Resto',   bintang: 5, kutipan: 'Manajemen meja ZResto bikin pelayan tidak bingung. Semua orderan ter-handle dengan baik.' },
  { id: 'tm18', user: 'Wawan Kurniawan',    initial: 'WK', color: 'bg-red-600',    bisnis: 'Bengkel Sejahtera',     kota: 'Semarang',  app: 'ZBengkel',  bintang: 5, kutipan: 'Laporan servis per mekanik ZBengkel bikin saya bisa ukur kinerja tim dengan adil dan jelas.' },
  { id: 'tm19', user: 'Sari Indah',         initial: 'SI', color: 'bg-pink-600',   bisnis: 'Meeting Hub Coworking', kota: 'Jakarta',   app: 'Z-Rooms',   bintang: 5, kutipan: 'Booking meeting room online Z-Rooms menghemat waktu admin saya 3 jam per hari kerja.' },
  { id: 'tm20', user: 'Doni Fernanda',      initial: 'DF', color: 'bg-amber-600',  bisnis: 'Power House Gym',       kota: 'Surabaya',  app: 'ZGym',      bintang: 5, kutipan: 'Fitur absen member otomatis ZGym bikin saya tahu persis siapa yang aktif dan yang churn.' },
]

// ── Pool 32 thread — 8 dipilih secara acak setiap kunjungan ──────────────────
const allForumThreads: ForumThread[] = [
  // TIPS (10)
  { id: 't1',  user: 'Ahmad Rizki',   initial: 'AR', color: 'bg-blue-600',   waktu: '2 jam lalu',    judul: 'Tips setting laporan harian ZPos supaya kasir lebih efisien dan cepat', kategori: 'tips', balasan: 24, views: 312, app: 'ZPos' },
  { id: 't2',  user: 'Hendra W.',     initial: 'HW', color: 'bg-teal-600',   waktu: '3 hari lalu',   judul: 'Step-by-step setup ZWisata untuk paket tour custom per-customer dengan harga beda', kategori: 'tips', balasan: 17, views: 263, app: 'ZWisata' },
  { id: 't3',  user: 'Dewi Santika',  initial: 'DS', color: 'bg-violet-600', waktu: '4 hari lalu',   judul: 'Cara pakai timer multi-meja ZBilliar di jam sibuk tanpa bikin staf bingung', kategori: 'tips', balasan: 11, views: 189, app: 'ZBilliar' },
  { id: 't4',  user: 'Faisal H.',     initial: 'FH', color: 'bg-orange-600', waktu: '5 hari lalu',   judul: 'Optimasi Kitchen Display ZResto biar dapur lebih sat-set saat jam makan siang', kategori: 'tips', balasan: 14, views: 231, app: 'Z-Resto' },
  { id: 't5',  user: 'Candra G.',     initial: 'CG', color: 'bg-green-600',  waktu: '6 hari lalu',   judul: 'Tips laporan stok emas harian di ZGold supaya akurat dan mudah dipahami owner', kategori: 'tips', balasan: 9,  views: 145, app: 'ZGold' },
  { id: 't6',  user: 'Yusuf R.',      initial: 'YR', color: 'bg-red-600',    waktu: '1 minggu lalu', judul: 'Cara kalibrasi GPS Z-Absen supaya titik lokasi tetap akurat di gedung bertingkat', kategori: 'tips', balasan: 21, views: 298, app: 'Z-Absen' },
  { id: 't7',  user: 'Lina K.',       initial: 'LK', color: 'bg-pink-600',   waktu: '1 minggu lalu', judul: 'Cara setting kategori cucian di ZLaundry biar pricelist makin fleksibel dan rapi', kategori: 'tips', balasan: 13, views: 176, app: 'ZLaundry' },
  { id: 't8',  user: 'Bintang P.',    initial: 'BP', color: 'bg-cyan-600',   waktu: '2 minggu lalu', judul: 'Template work order ZBengkel yang paling sering kami pakai — share gratis!', kategori: 'tips', balasan: 18, views: 247, app: 'ZBengkel' },
  { id: 't9',  user: 'Nina S.',       initial: 'NS', color: 'bg-amber-600',  waktu: '2 minggu lalu', judul: 'Cara hitung harga spanduk per m² di ZPrint dengan margin keuntungan otomatis', kategori: 'tips', balasan: 7,  views: 112, app: 'ZPrint' },
  { id: 't10', user: 'Rani P.',       initial: 'RP', color: 'bg-indigo-600', waktu: '3 minggu lalu', judul: 'Jadwal kelas ZGym supaya slot tidak bentrok dan semua member happy tanpa rebutan', kategori: 'tips', balasan: 15, views: 204, app: 'ZGym' },
  // PERTANYAAN (10)
  { id: 'p1',  user: 'Sari Dewi',     initial: 'SD', color: 'bg-purple-600', waktu: '8 jam lalu',    judul: 'ZGym bisa export data member ke Excel atau PDF ya? Butuh buat laporan akhir bulan', kategori: 'pertanyaan', balasan: 8,  views: 97,  app: 'ZGym' },
  { id: 'p2',  user: 'Rina Kusuma',   initial: 'RK', color: 'bg-orange-600', waktu: '2 hari lalu',   judul: 'Z-Absen GPS sering tidak akurat di dalam gedung 3 lantai, ada yang pernah ngalami?', kategori: 'pertanyaan', balasan: 13, views: 178, app: 'Z-Absen' },
  { id: 'p3',  user: 'Eko Prasetyo',  initial: 'EP', color: 'bg-teal-600',   waktu: '3 hari lalu',   judul: 'ZResto bisa dipakai untuk multi-cabang dengan satu akun admin pusat ya?', kategori: 'pertanyaan', balasan: 19, views: 256, app: 'Z-Resto' },
  { id: 'p4',  user: 'Maya Tanjung',  initial: 'MT', color: 'bg-pink-600',   waktu: '4 hari lalu',   judul: 'ZSnap kompatibel dengan Chromebook atau hanya support PC dan Mac saja?', kategori: 'pertanyaan', balasan: 6,  views: 84,  app: 'ZSnap' },
  { id: 'p5',  user: 'Dodi Anwar',    initial: 'DA', color: 'bg-blue-600',   waktu: '5 hari lalu',   judul: 'Cara setup login QR di ZOne untuk karyawan yang tidak punya smartphone pribadi?', kategori: 'pertanyaan', balasan: 11, views: 143, app: 'ZOne' },
  { id: 'p6',  user: 'Rini Hartati',  initial: 'RH', color: 'bg-violet-600', waktu: '6 hari lalu',   judul: 'ZMedics bisa backup rekam medis otomatis ke Google Drive atau cloud lain nggak?', kategori: 'pertanyaan', balasan: 9,  views: 127, app: 'Z-Medics' },
  { id: 'p7',  user: 'Tomi Bagus',    initial: 'TB', color: 'bg-green-600',  waktu: '1 minggu lalu', judul: 'ZBilliar timer bisa di-reset manual kalau pelanggan komplain tagihannya tidak sesuai?', kategori: 'pertanyaan', balasan: 5,  views: 76,  app: 'ZBilliar' },
  { id: 'p8',  user: 'Ayu Cahyani',   initial: 'AC', color: 'bg-red-600',    waktu: '1 minggu lalu', judul: 'ZTrader ini hanya simulator atau bisa connect ke akun broker saham sungguhan?', kategori: 'pertanyaan', balasan: 22, views: 341, app: 'ZTrader' },
  { id: 'p9',  user: 'Surya Nugraha', initial: 'SN', color: 'bg-amber-600',  waktu: '2 minggu lalu', judul: 'Z-Rooms bisa integrasi dengan Google Calendar untuk notifikasi booking otomatis?', kategori: 'pertanyaan', balasan: 10, views: 158, app: 'Z-Rooms' },
  { id: 'p10', user: 'Wahyu Purnomo', initial: 'WP', color: 'bg-cyan-600',   waktu: '2 minggu lalu', judul: 'ZBarber bisa terima uang muka atau deposit dari pelanggan sebelum jadwal potong?', kategori: 'pertanyaan', balasan: 8,  views: 103, app: 'ZBarber' },
  // UPDATE (6)
  { id: 'u1',  user: 'Tim Zomet',     initial: 'Z',  color: 'bg-indigo-500', waktu: '5 jam lalu',    judul: 'ZResto v2.3 — Kitchen Display System kini support multi-layar & dark mode!', icon: 'bi-rocket-takeoff', kategori: 'update', balasan: 41, views: 589, app: 'Z-Resto' },
  { id: 'u2',  user: 'Tim Zomet',     initial: 'Z',  color: 'bg-indigo-500', waktu: '1 hari lalu',   judul: 'ZOne SSO: login QR & Face ID kini aktif di semua app ekosistem Zomet', icon: 'bi-bell-fill', kategori: 'update', balasan: 35, views: 701, app: 'ZOne' },
  { id: 'u3',  user: 'Tim Zomet',     initial: 'Z',  color: 'bg-indigo-500', waktu: '3 hari lalu',   judul: 'ZPos v1.8 — fitur multi-kasir dan shift report tersedia untuk semua plan!', icon: 'bi-plus-square-fill', kategori: 'update', balasan: 28, views: 445, app: 'ZPos' },
  { id: 'u4',  user: 'Tim Zomet',     initial: 'Z',  color: 'bg-indigo-500', waktu: '5 hari lalu',   judul: 'ZGym kini punya fitur kelas group: booking slot, absen member, laporan instruktur', icon: 'bi-stars', kategori: 'update', balasan: 31, views: 512, app: 'ZGym' },
  { id: 'u5',  user: 'Tim Zomet',     initial: 'Z',  color: 'bg-indigo-500', waktu: '1 minggu lalu', judul: 'ZWisata v2.1 — laporan revenue per destinasi dan per paket tour sudah tersedia', icon: 'bi-map-fill', kategori: 'update', balasan: 19, views: 378, app: 'ZWisata' },
  { id: 'u6',  user: 'Tim Zomet',     initial: 'Z',  color: 'bg-indigo-500', waktu: '2 minggu lalu', judul: 'ZBengkel v1.5 — laporan servis per mekanik dan estimasi waktu selesai ditambahkan', icon: 'bi-wrench-adjustable', kategori: 'update', balasan: 24, views: 423, app: 'ZBengkel' },
  // DISKUSI (6)
  { id: 'd1',  user: 'Budi Santoso',  initial: 'BS', color: 'bg-green-600',  waktu: '1 hari lalu',   judul: 'Cerita sukses: 3 bulan pakai ZBengkel, omzet naik 30% karena laporan makin rapi', kategori: 'diskusi', balasan: 19, views: 445, app: 'ZBengkel' },
  { id: 'd2',  user: 'Mega Lestari',  initial: 'ML', color: 'bg-pink-600',   waktu: '4 hari lalu',   judul: 'ZLaundry mode offline ngebantu banget waktu internet mati seharian — super rekomen!', kategori: 'diskusi', balasan: 22, views: 334, app: 'ZLaundry' },
  { id: 'd3',  user: 'Hasan K.',      initial: 'HK', color: 'bg-amber-600',  waktu: '5 hari lalu',   judul: 'Sudah 2 minggu amati ZTrader: AI mana yang paling konsisten profit di LQ45?', kategori: 'diskusi', balasan: 33, views: 567, app: 'ZTrader' },
  { id: 'd4',  user: 'Ratna Sari',    initial: 'RS', color: 'bg-violet-600', waktu: '6 hari lalu',   judul: 'Review jujur: ZPos vs aplikasi kasir lain yang pernah saya coba selama 2 tahun ini', kategori: 'diskusi', balasan: 27, views: 489, app: 'ZPos' },
  { id: 'd5',  user: 'Joko W.',       initial: 'JW', color: 'bg-teal-600',   waktu: '1 minggu lalu', judul: 'Tips jaga stok perhiasan saat harga emas naik drastis — sharing pengalaman pakai ZGold', kategori: 'diskusi', balasan: 16, views: 274, app: 'ZGold' },
  { id: 'd6',  user: 'Ferry R.',      initial: 'FR', color: 'bg-blue-600',   waktu: '2 minggu lalu', judul: 'Dari catatan manual ke ZMedics: pengalaman klinik kami selama 6 bulan pemakaian', kategori: 'diskusi', balasan: 14, views: 231, app: 'Z-Medics' },
]

// ── Pool 24 item ticker — diacak tiap kunjungan ───────────────────────────────
const allActivitasTicker: TickerItem[] = [
  { icon: 'bi-cart3',            text: 'Ahmad R. dari Surabaya baru bergabung di ZPos' },
  { icon: 'bi-cash-coin',        text: 'Warung Pak Seno memproses 28 transaksi hari ini' },
  { icon: 'bi-heart-pulse',      text: 'ZGym FitZone mendaftarkan 5 member baru pagi ini' },
  { icon: 'bi-cup-hot',          text: 'Rina K. upgrade Z-Resto ke paket Pro' },
  { icon: 'bi-tools',            text: 'Tim ZBengkel Maju berhasil ekspor laporan bulanan' },
  { icon: 'bi-shield-lock',      text: 'ZOne: 12 pengguna login via Face ID pagi ini' },
  { icon: 'bi-graph-up-arrow',   text: 'ZTrader: AI Gemini unggul di sesi trading siang ini' },
  { icon: 'bi-droplet',          text: 'ZLaundry Bu Sari melayani 47 kg cucian hari ini' },
  { icon: 'bi-check-circle-fill',text: 'Z-Absen: 98% karyawan hadir tepat waktu minggu ini' },
  { icon: 'bi-scissors',         text: 'ZBarber Keren memproses 15 appointment hari Sabtu' },
  { icon: 'bi-printer',          text: 'ZPrint Jaya mencetak 200 pcs kartu nama hari ini' },
  { icon: 'bi-compass',          text: 'ZWisata Indah menjual 3 paket tour ke Bali hari ini' },
  { icon: 'bi-gem',              text: 'ZGold Toko Mulia transaksi perhiasan senilai Rp 45 juta' },
  { icon: 'bi-building',         text: 'ZRooms: Meeting room A full booking sampai Jumat' },
  { icon: 'bi-trophy',           text: 'ZBilliar Asik: meja 3 dipakai non-stop selama 4 jam' },
  { icon: 'bi-hospital',         text: 'Z-Medics Klinik Sehat input 12 rekam medis hari ini' },
  { icon: 'bi-robot',            text: 'ZSnap: 340 soal berhasil dijawab AI hari ini' },
  { icon: 'bi-person-badge',     text: 'ZFace: 89 identifikasi wajah sukses pagi ini' },
  { icon: 'bi-bar-chart-fill',   text: 'ZPos Toko Berkah: omzet hari ini tembus Rp 8,7 juta' },
  { icon: 'bi-activity',         text: 'ZGym Power House: 23 member check-in pagi tadi' },
  { icon: 'bi-basket',           text: 'ZLaundry Express: order kilat 15 kg selesai dalam 3 jam' },
  { icon: 'bi-shop',             text: 'Z-Resto Warung Bahagia: 87 orderan meja terlayani' },
  { icon: 'bi-gem',              text: 'ZGold Galeri Prima: stok 2 kg emas 24K masuk hari ini' },
  { icon: 'bi-rocket-takeoff',   text: 'ZOne: 7 bisnis baru aktivasi SSO ekosistem Zomet hari ini' },
]

const KATEGORI_CONFIG = {
  tips:       { label: 'Tips & Trik', icon: 'bi-lightbulb',      cls: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  pertanyaan: { label: 'Pertanyaan',  icon: 'bi-question-circle', cls: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
  update:     { label: 'Update',      icon: 'bi-megaphone',       cls: 'bg-blue-500/15 text-blue-400 border-blue-500/25' },
  diskusi:    { label: 'Diskusi',     icon: 'bi-chat-dots',       cls: 'bg-violet-500/15 text-violet-400 border-violet-500/25' },
}

const WA_LINK = 'https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20bergabung%20komunitas%20Zomet'

function TestimoniCard({ t }: { t: Testimoni }) {
  return (
    <div className="inline-flex w-72 shrink-0 flex-col gap-3 rounded-xl border border-gray-800 bg-gray-900/70 p-5 align-top whitespace-normal">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: t.bintang }).map((_, i) => (
            <i key={i} className="bi bi-star-fill text-amber-400 text-xs" />
          ))}
        </div>
        <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-400">{t.app}</span>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
        &ldquo;{t.kutipan}&rdquo;
      </p>
      <div className="flex items-center gap-2.5 border-t border-gray-800 pt-3 mt-auto">
        <div className={`shrink-0 h-8 w-8 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-white`}>
          {t.initial}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-gray-100 truncate">{t.user}</p>
          <p className="text-xs text-gray-500 truncate">{t.bisnis} &middot; {t.kota}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomeClient({ latestArticles }: Props) {
  const [lang, setLang] = useState<'id' | 'en'>('id')
  const [activeTab, setActiveTab] = useState<'semua' | 'tips' | 'pertanyaan' | 'update' | 'diskusi'>('semua')
  const [countersStarted, setCountersStarted] = useState(false)
  // Inisialisasi deterministik untuk SSR; useEffect mengacak di client
  const [displayedThreads, setDisplayedThreads] = useState<ForumThread[]>(allForumThreads.slice(0, 8))
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([...allActivitasTicker, ...allActivitasTicker])
  // Dua baris marquee testimoni: row1 → kiri, row2 → kanan
  const [tRow1, setTRow1] = useState<Testimoni[]>([...allTestimoni.slice(0, 10), ...allTestimoni.slice(0, 10)])
  const [tRow2, setTRow2] = useState<Testimoni[]>([...allTestimoni.slice(10), ...allTestimoni.slice(10)])
  const forumRef = useRef<HTMLElement>(null)

  const countUsers = useCountUp(2400,  1600, countersStarted)
  const countTrx   = useCountUp(128000, 2000, countersStarted)
  const countSatis = useCountUp(985,   1800, countersStarted)

  // Acak konten forum, ticker, dan testimoni setiap kunjungan (client-side)
  useEffect(() => {
    setDisplayedThreads(shuffle(allForumThreads).slice(0, 8))
    const s = shuffle(allActivitasTicker)
    setTickerItems([...s, ...s])
    const r1 = shuffle(allTestimoni.slice(0, 10))
    const r2 = shuffle(allTestimoni.slice(10))
    setTRow1([...r1, ...r1])
    setTRow2([...r2, ...r2])
  }, [])

  useEffect(() => {
    const el = forumRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setCountersStarted(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const filteredThreads = activeTab === 'semua'
    ? displayedThreads
    : displayedThreads.filter(t => t.kategori === activeTab)

  const title    = lang === 'id' ? 'Ekosistem Aplikasi Zomet' : 'Zomet App Ecosystem'
  const subtitle = lang === 'id' ? 'Platform lengkap untuk kebutuhan bisnis digital Anda' : 'Complete platform for your digital business needs'
  const ctaText  = lang === 'id' ? 'Jelajahi Aplikasi' : 'Explore Apps'

  function formatDate(dateStr: string) {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" /> Zomet
          </div>
          <div className="flex items-center gap-3">
            <Link href="/artikel" className="text-sm text-gray-300 hover:text-white hidden sm:block transition-colors">
              Artikel
            </Link>
            <a href="#forum" className="text-sm text-gray-300 hover:text-white hidden sm:block transition-colors">
              Forum
            </a>
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="rounded-lg bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
            >
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 text-xl text-gray-400">{subtitle}</p>
      </section>

      {/* Apps Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link key={app.id} href={app.url} target="_blank" rel="noopener noreferrer">
              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-600 hover:bg-gray-900 cursor-pointer">
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                </div>
                <div className="relative z-10">
                  <i className={`bi ${app.bsIcon} text-5xl mb-4 block`} />
                  <h3 className="text-xl font-semibold">{app.name}</h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {lang === 'id' ? app.description : app.description_en}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span key={tag} className="inline-block rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400">{lang === 'id' ? 'Aktif' : 'Active'}</span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300">
                    {ctaText}
                    <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TESTIMONI ── */}
      <section className="py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            <i className="bi bi-chat-quote-fill mr-1.5" />Testimoni
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Dipercaya Ribuan Bisnis</h2>
          <p className="mt-2 text-gray-400">Kata mereka yang sudah merasakan manfaat ekosistem Zomet.</p>
        </div>

        {/* Baris 1 — scroll kiri */}
        <div className="mb-4 cursor-default select-none">
          <div className="flex animate-marquee gap-4 whitespace-nowrap">
            {tRow1.map((t, i) => (
              <TestimoniCard key={`r1-${t.id}-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Baris 2 — scroll kanan */}
        <div className="cursor-default select-none">
          <div className="flex animate-marquee-reverse gap-4 whitespace-nowrap">
            {tRow2.map((t, i) => (
              <TestimoniCard key={`r2-${t.id}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FORUM & KOMUNITAS ── */}
      <section id="forum" ref={forumRef} className="mx-auto max-w-7xl px-6 py-20">

        {/* Section header */}
        <div className="mb-12 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              <i className="bi bi-people-fill mr-1.5" />Komunitas
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Forum & Diskusi</h2>
            <p className="mt-2 text-gray-400">Bergabung dengan ribuan pengguna Zomet — berbagi tips, tanya jawab, dan update terbaru.</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            <i className="bi bi-plus-circle" /> Gabung Komunitas
          </a>
        </div>

        {/* Stats counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: 'bi-people',           value: countUsers.toLocaleString('id-ID') + '+', label: 'Pengguna Aktif',    color: 'text-blue-400' },
            { icon: 'bi-grid-3x3-gap',     value: String(apps.length),                      label: 'Aplikasi Zomet',   color: 'text-purple-400' },
            { icon: 'bi-lightning-charge', value: countTrx.toLocaleString('id-ID') + '+',   label: 'Transaksi/Bulan',  color: 'text-emerald-400' },
            { icon: 'bi-star',             value: (countSatis / 10).toFixed(1) + '%',        label: 'Tingkat Kepuasan', color: 'text-amber-400' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 text-center">
              <i className={`bi ${s.icon} text-2xl ${s.color} mb-2 block`} />
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Activity ticker */}
        <div className="mb-10 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40">
          <div className="flex items-center gap-3 border-b border-gray-800 px-4 py-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Live Aktivitas
            </span>
            <span className="text-xs text-gray-500">Pembaruan real-time dari seluruh ekosistem Zomet</span>
          </div>
          <div className="py-3 cursor-default select-none">
            <div className="flex animate-marquee whitespace-nowrap gap-8">
              {tickerItems.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm text-gray-300 shrink-0">
                  <i className={`bi ${item.icon} text-blue-400 shrink-0`} />
                  {item.text}
                  <span className="text-gray-700">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tab filter */}
        <div className="mb-6 flex gap-2 flex-wrap">
          {([
            ['semua',      'bi-grid',           'Semua'],
            ['tips',       'bi-lightbulb',       'Tips & Trik'],
            ['pertanyaan', 'bi-question-circle', 'Pertanyaan'],
            ['update',     'bi-megaphone',       'Update'],
            ['diskusi',    'bi-chat-dots',       'Diskusi'],
          ] as const).map(([val, icon, label]) => (
            <button
              key={val}
              onClick={() => setActiveTab(val)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all border ${
                activeTab === val
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
              }`}
            >
              <i className={`bi ${icon} text-xs`} /> {label}
            </button>
          ))}
        </div>

        {/* Thread cards */}
        {filteredThreads.length === 0 ? (
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-10 text-center text-gray-500 text-sm">
            <i className="bi bi-chat-square text-3xl block mb-3 text-gray-700" />
            Tidak ada thread kategori ini saat ini — muat ulang halaman untuk konten berbeda.
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {filteredThreads.map((thread) => {
              const kat = KATEGORI_CONFIG[thread.kategori]
              return (
                <a
                  key={thread.id}
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:border-gray-600 hover:bg-gray-900 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className={`shrink-0 h-9 w-9 rounded-full ${thread.color} flex items-center justify-center text-xs font-bold text-white`}>
                      {thread.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${kat.cls}`}>
                          <i className={`bi ${kat.icon}`} /> {kat.label}
                        </span>
                        <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-400">{thread.app}</span>
                      </div>
                      <p className="text-sm font-medium leading-snug text-gray-100 group-hover:text-white line-clamp-2 mb-3">
                        {thread.icon && <i className={`bi ${thread.icon} mr-1.5 text-blue-400`} />}
                        {thread.judul}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><i className="bi bi-person" /> {thread.user}</span>
                        <span className="flex items-center gap-1"><i className="bi bi-chat" /> {thread.balasan} balasan</span>
                        <span className="flex items-center gap-1"><i className="bi bi-eye" /> {thread.views.toLocaleString('id-ID')}</span>
                        <span className="ml-auto">{thread.waktu}</span>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        )}

        {/* CTA gabung */}
        <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
          <i className="bi bi-chat-heart text-4xl text-blue-400 mb-4 block" />
          <h3 className="text-xl font-bold mb-2">Bergabung & Mulai Berdiskusi</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Tanyakan pertanyaanmu, bagikan pengalaman pakai aplikasi Zomet, dan dapatkan tips dari sesama pengguna.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            <i className="bi bi-whatsapp" /> Bergabung via WhatsApp
          </a>
        </div>

      </section>

      {/* Artikel Terbaru */}
      {latestArticles.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                <i className="bi bi-journal-text mr-1.5" />Blog
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">Artikel Terbaru</h2>
              <p className="mt-2 text-gray-400">Tips dan panduan digitalisasi bisnis untuk UMKM Indonesia.</p>
            </div>
            <Link href="/artikel" className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:border-gray-500 hover:text-white transition-all">
              Lihat Semua <i className="bi bi-arrow-right" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <Link key={article.slug} href={`/artikel/${article.slug}`} className="group block cursor-pointer">
                <article className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-600 hover:bg-gray-900">
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-indigo-500/8" />
                  </div>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-xs text-blue-300">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold leading-snug mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">{article.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 flex-1">{article.description}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">
                      <time className="flex items-center gap-1.5 text-xs text-gray-500">
                        <i className="bi bi-calendar3" />{formatDate(article.date)}
                      </time>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:text-blue-300 transition-all group-hover:gap-2">
                        Baca <i className="bi bi-arrow-right text-xs transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-400">
          <p>© 2026 PT Zomet Teknologi Indonesia. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6282153533164?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Zomet"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:gap-3 hover:pr-5 hover:shadow-xl active:scale-95"
      >
        <span className="grid h-14 w-14 shrink-0 place-items-center">
          <i className="bi bi-whatsapp text-3xl animate-[pulse_2.5s_ease-in-out_infinite]" />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100">
          Chat via WhatsApp
        </span>
      </a>
    </main>
  )
}
