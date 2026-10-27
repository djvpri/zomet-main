import type { Metadata } from 'next'
import Link from 'next/link'
import { liveProducts, soonProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Produk — Ekosistem Aplikasi Zomet',
  description:
    'Aplikasi kasir, manajemen bisnis, dan alat AI dari Zomet. Sebagian jalan di browser, sebagian dipasang sebagai aplikasi native.',
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
      <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
  )
}

function Badge({ live }: { live?: boolean }) {
  return live ? (
    <span className="rounded border border-emerald-800 bg-emerald-950/50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
      Tersedia
    </span>
  ) : (
    <span className="rounded border border-gray-700 bg-gray-800/60 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
      Segera
    </span>
  )
}

export default function ProdukPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="sticky top-0 z-20 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <i className="bi bi-grid-3x3-gap-fill text-blue-400" aria-hidden="true" /> Zomet
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/produk" className="text-white">Produk</Link>
            <Link href="/artikel" className="hidden transition-colors hover:text-white sm:block">Artikel</Link>
            <Link href="/#forum" className="hidden transition-colors hover:text-white sm:block">Forum</Link>
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
          <span className="text-gray-300">Produk</span>
        </nav>

        <div className="flex flex-wrap items-end justify-between gap-6 pt-10 pb-6">
          <div>
            <span className="inline-flex items-center rounded-full border border-sky-900 bg-sky-950/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-sky-300">
              {liveProducts.length + soonProducts.length} aplikasi
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight">Semua produk Zomet</h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400">
              Aplikasi kasir, manajemen bisnis, dan alat AI. Sebagian jalan di browser, sebagian lagi dipasang sebagai aplikasi
              native.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Semua', 'POS', 'SaaS', 'AI', 'Booking'].map((f, i) => (
              <span
                key={f}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                  i === 0 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-800 bg-gray-900 text-gray-400'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* kartu siap pakai */}
        <div className="grid gap-5 pb-4 sm:grid-cols-2 lg:grid-cols-3">
          {liveProducts.map((p) => {
            const inner = (
              <>
                <div className="relative h-36 border-b border-gray-800 bg-gray-950">
                  {p.thumb ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.thumb} alt={p.name} className="h-full w-full object-cover object-top opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                    </>
                  ) : (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_35%_30%,#1e3a5f88,#08101b_70%)]" />
                  )}
                  <div className="absolute bottom-3 left-4 grid h-10 w-10 place-items-center rounded-xl border border-sky-900 bg-gray-900/90 text-sky-400">
                    <i className={`bi ${p.bsIcon} text-lg`} aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
                    <Badge live={p.live} />
                    {p.tags.map((t) => (
                      <span key={t} className="rounded border border-gray-800 bg-gray-900 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-base font-bold tracking-tight">{p.name}</h2>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-gray-400">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-800 pt-3.5">
                    <div className="text-sm font-extrabold tabular-nums">
                      {p.price}
                      {p.priceNote && <span className="mt-0.5 block text-[10.5px] font-medium text-gray-500">{p.priceNote}</span>}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-sky-400">
                      {p.detail ? 'Lihat detail' : 'Buka app'} <Arrow />
                    </span>
                  </div>
                </div>
              </>
            )

            const shell =
              'group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-900/40 transition-all hover:-translate-y-0.5 hover:border-gray-600 cursor-pointer'

            return p.detail ? (
              <Link key={p.id} href={p.url} className={shell}>
                {inner}
              </Link>
            ) : (
              <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className={shell}>
                {inner}
              </a>
            )
          })}
        </div>

        {/* segera hadir */}
        <div className="mt-8 mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-gray-500">
          Segera hadir
          <span className="h-px flex-1 bg-gray-800" />
        </div>
        <div className="grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {soonProducts.map((p) => (
            <article key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 opacity-70">
              <div className="h-28 border-b border-gray-800 bg-gray-950/60 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-800 bg-gray-900 text-gray-500">
                  <i className={`bi ${p.bsIcon} text-lg`} aria-hidden="true" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
                  <Badge />
                  {p.tags.map((t) => (
                    <span key={t} className="rounded border border-gray-800 bg-gray-900 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-base font-bold tracking-tight text-gray-300">{p.name}</h2>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-gray-500">{p.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-3.5 text-xs font-semibold text-gray-500">
                  <span>Belum tersedia</span>
                  <span>Segera</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="flex flex-col gap-2 border-t border-gray-800 py-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 PT Zomet Teknologi Indonesia</span>
          <span>zomet.my.id · Produk</span>
        </footer>
      </div>
    </main>
  )
}
