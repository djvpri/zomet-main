'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface App {
  id: string
  name: string
  description: string
  description_en: string
  url: string
  icon: string
  tags: string[]
  status: string
}

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id')

  const apps: App[] = [
    {
      id: 'zsnap',
      name: 'ZSnap',
      description: 'AI Screenshot Solver berbasis Gemini. Menjawab soal dari screenshot secara instan, tersembunyi di layar.',
      description_en: 'AI Screenshot Solver powered by Gemini. Answers questions from screenshots instantly, hidden on screen.',
      url: 'https://zsnap.zomet.my.id/',
      icon: '🤖',
      tags: ['AI', 'Productivity'],
      status: 'active',
    },
    {
      id: 'zgold',
      name: 'ZGold',
      description: 'Sistem POS untuk toko perhiasan dengan multi-logam (emas, perak, platinum, palladium).',
      description_en: 'Jewelry Store POS System with multi-metal support (gold, silver, platinum, palladium).',
      url: 'https://zgold.zomet.my.id/',
      icon: '💎',
      tags: ['POS', 'Jewelry'],
      status: 'active',
    },
    {
      id: 'zbengkel',
      name: 'ZBengkel',
      description: 'SaaS Workshop POS untuk bengkel motor, mobil, dan alat berat.',
      description_en: 'Workshop POS SaaS for motorcycle, car, and heavy equipment workshops.',
      url: 'https://zbengkel.zomet.my.id/',
      icon: '🔧',
      tags: ['POS', 'Workshop'],
      status: 'active',
    },
    {
      id: 'zlaundry',
      name: 'ZLaundry',
      description: 'POS Laundry dengan fitur offline-first dan PWA untuk kemudahan mobilitas.',
      description_en: 'Laundry POS with offline-first and PWA features for mobile convenience.',
      url: 'https://zlaundry.zomet.my.id/',
      icon: '🧺',
      tags: ['POS', 'Laundry'],
      status: 'active',
    },
    {
      id: 'zpos',
      name: 'ZPos',
      description: 'Aplikasi kasir digital simpel, mobile-friendly untuk warung, kafe, toko, dan UMKM.',
      description_en: 'Simple digital cashier app, mobile-friendly for shops, cafes, and SMEs.',
      url: 'https://zpos.zomet.my.id/',
      icon: '🛒',
      tags: ['POS', 'Commerce'],
      status: 'active',
    },
    {
      id: 'zface',
      name: 'ZFace',
      description: 'Sistem identifikasi wajah berbasis AI dengan real-time accuracy untuk kontrol akses.',
      description_en: 'AI-powered face identification system with real-time accuracy for access control.',
      url: 'https://zface.zomet.my.id/',
      icon: '👤',
      tags: ['AI', 'Security'],
      status: 'active',
    },
    {
      id: 'zgym',
      name: 'ZGym',
      description: 'Manajemen membership gym dengan fitur kelas, jadwal, dan laporan keuangan.',
      description_en: 'Gym membership management with classes, schedules, and financial reports.',
      url: 'https://zgym.zomet.my.id/',
      icon: '💪',
      tags: ['Fitness', 'SaaS'],
      status: 'active',
    },
    {
      id: 'zone',
      name: 'ZOne',
      description: 'Hub terpusat untuk manajemen user dan app di ekosistem Zomet.',
      description_en: 'Centralized hub for user and app management across Zomet ecosystem.',
      url: 'https://zone.zomet.my.id/',
      icon: '🌐',
      tags: ['Hub', 'Admin'],
      status: 'active',
    },
  ]

  const title = lang === 'id' ? 'Ekosistem Aplikasi Zomet' : 'Zomet App Ecosystem'
  const subtitle = lang === 'id' ? 'Platform lengkap untuk kebutuhan bisnis digital Anda' : 'Complete platform for your digital business needs'
  const ctaText = lang === 'id' ? 'Jelajahi Aplikasi' : 'Explore Apps'

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold">🚀 Zomet</div>
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="rounded-lg bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700"
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-gray-400">
          {subtitle}
        </p>
      </section>

      {/* Apps Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-600 hover:bg-gray-900">
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-semibold">{app.name}</h3>
                  <p className="mt-3 text-sm text-gray-400">
                    {lang === 'id' ? app.description : app.description_en}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400">
                      {lang === 'id' ? 'Aktif' : 'Active'}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300">
                    {ctaText}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-400">
          <p>© 2026 PT Zomet Teknologi Indonesia. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Powered by Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </footer>
    </main>
  )
}
