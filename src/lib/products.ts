export interface Product {
  id: string
  name: string
  description: string
  description_en: string
  url: string
  bsIcon: string
  tags: string[]
  /** halaman detail di /produk/<detail>; kosong = belum ada */
  detail?: string
  /** path screenshot publik untuk kartu index */
  thumb?: string
  price?: string
  priceNote?: string
  /** aplikasi sudah bisa dipakai (domain hidup) */
  live?: boolean
}

export const products: Product[] = [
  {
    id: 'z1pos',
    name: 'Z1 Pos',
    description: 'Z1 Kasir di desktop Windows + Z1 Label di Android. Transaksi, stok, laporan, dan cetak label harga.',
    description_en: 'Z1 Kasir for Windows desktop + Z1 Label for Android. Sales, stock, reports, and price labels.',
    url: '/produk/z1-pos',
    bsIcon: 'bi-cart3',
    tags: ['POS', 'Commerce'],
    detail: 'z1-pos',
    thumb: '/images/z1pos/kasir.webp',
    price: 'Rp 100.000',
    priceNote: 'per bulan · atau 1 juta/tahun',
    live: true,
  },
  {
    id: 'zone',
    name: 'ZOne',
    description: 'Hub terpusat: manajemen user, SSO, dan akses semua aplikasi ekosistem Zomet dari satu tempat.',
    description_en: 'Central hub: user management, SSO, and access to every Zomet app from one place.',
    url: 'https://zone.zomet.my.id/',
    bsIcon: 'bi-globe2',
    tags: ['Hub', 'Admin'],
    price: 'Termasuk akun',
    priceNote: 'semua paket Zomet',
    live: true,
  },
  {
    id: 'zgym',
    name: 'ZGym',
    description: 'Manajemen membership gym: kelas, jadwal instruktur, absensi member, dan laporan keuangan.',
    description_en: 'Gym membership management: classes, instructor schedules, attendance, and finance reports.',
    url: 'https://zxgym.zomet.my.id/',
    bsIcon: 'bi-heart-pulse',
    tags: ['Fitness', 'SaaS'],
    price: 'Langganan',
    priceNote: 'per outlet',
    live: true,
  },
  {
    id: 'zsnap',
    name: 'ZSnap',
    description: 'AI Screenshot Solver berbasis Gemini. Menjawab soal dari screenshot secara instan, tersembunyi di layar.',
    description_en: 'Gemini-powered AI screenshot solver. Answers questions from screenshots instantly.',
    url: 'https://zsnap.zomet.my.id/',
    bsIcon: 'bi-robot',
    tags: ['AI', 'Productivity'],
  },
  {
    id: 'zgold',
    name: 'ZGold',
    description: 'POS toko perhiasan dengan multi-logam: emas, perak, platinum, palladium.',
    description_en: 'Jewelry store POS with multi-metal support: gold, silver, platinum, palladium.',
    url: 'https://zgold.zomet.my.id/',
    bsIcon: 'bi-gem',
    tags: ['POS', 'Jewelry'],
  },
  {
    id: 'zbengkel',
    name: 'ZBengkel',
    description: 'Workshop POS untuk bengkel motor, mobil, dan alat berat.',
    description_en: 'Workshop POS for motorcycle, car, and heavy equipment workshops.',
    url: 'https://zbengkel.zomet.my.id/',
    bsIcon: 'bi-tools',
    tags: ['POS', 'Workshop'],
  },
  {
    id: 'zlaundry',
    name: 'ZLaundry',
    description: 'POS laundry offline-first dengan PWA untuk mobilitas.',
    description_en: 'Laundry POS, offline-first with PWA for mobility.',
    url: 'https://zlaundry.zomet.my.id/',
    bsIcon: 'bi-droplet',
    tags: ['POS', 'Laundry'],
  },
  {
    id: 'zresto',
    name: 'Z-Resto',
    description: 'POS restoran dengan manajemen meja, delivery, dan kitchen display system.',
    description_en: 'Restaurant POS with table management, delivery, and kitchen display system.',
    url: 'https://zresto.zomet.my.id/',
    bsIcon: 'bi-cup-hot',
    tags: ['POS', 'Restaurant'],
  },
  {
    id: 'zbilliar',
    name: 'ZBilliar',
    description: 'Manajemen rental biliar dengan timer real-time per meja dan kasir otomatis.',
    description_en: 'Billiard rental management with real-time per-table timer and automated cashier.',
    url: 'https://zbilliar.zomet.my.id/',
    bsIcon: 'bi-trophy',
    tags: ['POS', 'Billiard'],
  },
  {
    id: 'zpos',
    name: 'ZPos',
    description: 'Kasir digital simpel, mobile-friendly untuk warung, kafe, toko, dan UMKM.',
    description_en: 'Simple digital cashier, mobile-friendly for shops, cafes, and SMEs.',
    url: 'https://zpos.zomet.my.id/',
    bsIcon: 'bi-cart-check',
    tags: ['POS', 'Commerce'],
  },
  {
    id: 'zface',
    name: 'ZFace',
    description: 'Identifikasi wajah berbasis AI dengan akurasi real-time untuk kontrol akses.',
    description_en: 'AI face identification with real-time accuracy for access control.',
    url: 'https://zface.zomet.my.id/',
    bsIcon: 'bi-person-badge',
    tags: ['AI', 'Security'],
  },
  {
    id: 'zabsen',
    name: 'Z-Absen',
    description: 'Absensi dengan face recognition dan validasi GPS geofencing.',
    description_en: 'Attendance with face recognition and GPS geofencing validation.',
    url: 'https://zabsen.zomet.my.id/',
    bsIcon: 'bi-clipboard-check',
    tags: ['HR', 'Attendance'],
  },
  {
    id: 'zrooms',
    name: 'Z-Rooms',
    description: 'Booking ruangan untuk meeting room dan co-working space.',
    description_en: 'Room booking for meeting rooms and co-working spaces.',
    url: 'https://z-rooms.zomet.my.id/',
    bsIcon: 'bi-house-door',
    tags: ['Booking', 'Workspace'],
  },
  {
    id: 'zmedics',
    name: 'Z-Medics',
    description: 'Platform kesehatan dengan rekam medis digital dan konsultasi.',
    description_en: 'Healthcare platform with digital medical records and consultations.',
    url: 'https://zmedics.zomet.my.id/',
    bsIcon: 'bi-hospital',
    tags: ['Health', 'SaaS'],
  },
  {
    id: 'zwisata',
    name: 'ZWisata',
    description: 'Manajemen paket wisata & tour dengan laporan pendapatan dan booking online.',
    description_en: 'Tour package management with revenue reports and online booking.',
    url: 'https://zwisata.zomet.my.id/',
    bsIcon: 'bi-compass',
    tags: ['Wisata', 'Booking'],
  },
  {
    id: 'zprint',
    name: 'ZPrint',
    description: 'POS percetakan dengan harga fleksibel per pcs, per meter, maupun per m².',
    description_en: 'Printing shop POS with flexible pricing per piece, per meter, or per m².',
    url: 'https://zprint.zomet.my.id/',
    bsIcon: 'bi-printer',
    tags: ['POS', 'Printing'],
  },
  {
    id: 'zbarber',
    name: 'ZBarber',
    description: 'Manajemen barbershop: appointment, jadwal barber, layanan, dan laporan.',
    description_en: 'Barbershop management: appointments, barber schedules, services, and reports.',
    url: 'https://zbarber.zomet.my.id/',
    bsIcon: 'bi-scissors',
    tags: ['Beauty', 'Service'],
  },
  {
    id: 'ztrader',
    name: 'ZTrader',
    description: 'Simulator battle 10 AI trading di pasar saham IDX LQ45 & Global secara real-time.',
    description_en: 'Real-time battle simulator for 10 AI traders on IDX LQ45 & Global markets.',
    url: 'https://ztrader.zomet.my.id/',
    bsIcon: 'bi-graph-up-arrow',
    tags: ['AI', 'Trading'],
  },
]

export const liveProducts = products.filter((p) => p.live)
export const soonProducts = products.filter((p) => !p.live)
