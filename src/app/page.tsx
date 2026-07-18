import { getAllArticles } from '@/lib/articles'
import HomeClient from './HomeClient'

export default function Page() {
  const latestArticles = getAllArticles().slice(0, 3)
  return <HomeClient latestArticles={latestArticles} />
}
