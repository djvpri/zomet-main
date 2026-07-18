import { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles, formatDate } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Artikel & Tips Bisnis Digital | Zomet',
  description: 'Tips, panduan, dan wawasan seputar digitalisasi bisnis untuk UMKM Indonesia.',
  openGraph: {
    title: 'Artikel & Tips Bisnis Digital | Zomet',
    description: 'Tips, panduan, dan wawasan seputar digitalisasi bisnis untuk UMKM Indonesia.',
    type: 'website',
  },
}

export default function ArtikelPage() {
  const articles = getAllArticles()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" /> Zomet
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/artikel" className="text-sm text-blue-400 font-medium">Artikel</Link>
            <Link href="/" className="text-sm text-gray-400 hover:text-white">← Kembali</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Artikel & Tips Bisnis Digital</h1>
          <p className="text-gray-400 text-lg">Panduan praktis digitalisasi bisnis untuk UMKM Indonesia.</p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <i className="bi bi-journal-text text-5xl block mb-4" />
            <p>Belum ada artikel.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/artikel/${article.slug}`} className="block group">
                <article className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-600 hover:bg-gray-900">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-gray-500">{formatDate(article.date)}</time>
                    <span className="text-sm text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Baca selengkapnya <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-gray-800 bg-gray-950 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-500 text-sm">
          © 2026 PT Zomet Teknologi Indonesia. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
