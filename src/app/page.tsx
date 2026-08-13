import { getAllArticles } from '@/lib/articles'
import HomeClient from './HomeClient'

// Revalidate every hour so new articles surface without a full rebuild
export const revalidate = 3600

export default function Page() {
  const latestArticles = getAllArticles().slice(0, 3)
  return <HomeClient latestArticles={latestArticles} />
}
