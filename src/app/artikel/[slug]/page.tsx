import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllArticles, getArticle, formatDate } from '@/lib/articles'
import ShareButtons from './ShareButtons'

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | Zomet`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      siteName: 'Zomet',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  }
}

export default async function ArtikelDetailPage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)
  if (!article) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'Zomet' },
    publisher: {
      '@type': 'Organization',
      name: 'Zomet',
      url: 'https://www.zomet.my.id',
      logo: { '@type': 'ImageObject', url: 'https://www.zomet.my.id/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.zomet.my.id/artikel/${article.slug}` },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" /> Zomet
          </Link>
          <Link href="/artikel" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
            <i className="bi bi-arrow-left" /> Semua Artikel
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Meta */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{article.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">{article.description}</p>
          <div className="flex items-center gap-3 text-sm text-gray-500 border-t border-gray-800 pt-4">
            <i className="bi bi-calendar3" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="text-gray-700">·</span>
            <i className="bi bi-building" />
            <span>Tim Zomet</span>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:my-1
            prose-table:text-sm prose-thead:border-gray-700 prose-tr:border-gray-800
            prose-th:text-gray-300 prose-td:text-gray-400
            prose-hr:border-gray-800
            prose-code:text-blue-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
            prose-blockquote:border-blue-500 prose-blockquote:text-gray-400"
          dangerouslySetInnerHTML={{ __html: article.content ?? '' }}
        />

        {/* Share buttons */}
        <ShareButtons
          url={`https://www.zomet.my.id/artikel/${article.slug}`}
          title={article.title}
          description={article.description}
        />

        {/* Footer artikel */}
        <div className="mt-8">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
          >
            <i className="bi bi-arrow-left" /> Lihat semua artikel
          </Link>
        </div>
      </article>

      <footer className="border-t border-gray-800 bg-gray-950 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-500 text-sm">
          © 2026 PT Zomet Teknologi Indonesia. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
