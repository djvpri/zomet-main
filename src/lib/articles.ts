import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const artikelDir = path.join(process.cwd(), 'content/artikel')

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
        date: data.date ? String(data.date).slice(0, 10) : '',
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
    date: data.date ? String(data.date).slice(0, 10) : '',
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
