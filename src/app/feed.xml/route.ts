import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin
  let author = {
    name: 'Jason Hall',
    email: 'azjasonhall@gmail.com',
  }

  let feed = new Feed({
    title: 'jasonhall.dev',
    description:
      'Practical writing on content architecture, user experience, software architecture, AEM, and AI-assisted development.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articles = await getAllArticles()

  for (let article of articles) {
    if (article.status !== 'published') {
      continue
    }

    let publicUrl = `${siteUrl}/articles/${article.slug}`
    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      description: article.description,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 's-maxage=31556952',
    },
  })
}
