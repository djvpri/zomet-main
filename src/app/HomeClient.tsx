'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Article } from '@/lib/articles'

interface App {
  id: string
  name: string
  description: string
  description_en: string
  url: string
  bsIcon: string
  tags: string[]
}

interface Props {
  latestArticles: Article[]
}

export default function HomeClient({ latestArticles }: Props) {
  const [lang, setLang] = useState<'id' | 'en'>('id')

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

  const title = lang === 'id' ? 'Ekosistem Aplikasi Zomet' : 'Zomet App Ecosystem'
  const subtitle = lang === 'id' ? 'Platform lengkap untuk kebutuhan bisnis digital Anda' : 'Complete platform for your digital business needs'
  const ctaText = lang === 'id' ? 'Jelajahi Aplikasi' : 'Explore Apps'

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
            <Link href="/artikel" className="text-sm text-gray-300 hover:text-white hidden sm:block">
              Artikel
            </Link>
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
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Artikel Terbaru */}
      {latestArticles.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          {/* Divider */}
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                <i className="bi bi-journal-text mr-1.5" />
                Blog
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">Artikel Terbaru</h2>
              <p className="mt-2 text-gray-400">Tips dan panduan digitalisasi bisnis untuk UMKM Indonesia.</p>
            </div>
            <Link
              href="/artikel"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:border-gray-500 hover:text-white transition-all"
            >
              Lihat Semua <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <Link key={article.slug} href={`/artikel/${article.slug}`} className="group block cursor-pointer">
                <article className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-600 hover:bg-gray-900">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-indigo-500/8" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-xs text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold leading-snug mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 flex-1">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">
                      <time className="flex items-center gap-1.5 text-xs text-gray-500">
                        <i className="bi bi-calendar3" />
                        {formatDate(article.date)}
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
