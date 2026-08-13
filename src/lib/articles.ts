import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const artikelDir = path.join(process.cwd(), 'content/artikel')

// Normalize date: accepts "20260809" or "2026-08-09" -> "2026-08-09"
function normalizeDate(d: unknown): string {
  const s = String(d ?? '').replace(/[^0-9]/g, '')
  if (s.length !== 8) return String(d ?? '').slice(0, 10)
  return `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`
}

export interface Article {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content?: string
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(artikelDir)) return []
  return fs
    .readdirSync(artikelDir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const { data } = matter(fs.readFileSync(path.join(artikelDir, file), 'utf8'))
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? '',
        date: normalizeDate(data.date),
        tags: data.tags ?? [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(artikelDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  const { remark } = await import('remark')
  const { default: remarkHtml } = await import('remark-html')
  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content)

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: normalizeDate(data.date),
    tags: data.tags ?? [],
    content: processed.toString(),
  }
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}
