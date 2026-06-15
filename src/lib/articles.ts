import glob from 'fast-glob'

export type ArticleCategory = 'Content' | 'Experience' | 'Architecture' | 'AI'
export type ArticleStatus = 'draft' | 'published'

export interface Article {
  title: string
  description: string
  author: string
  date: string
  category: ArticleCategory
  tags: Array<string>
  status: ArticleStatus
  featured: boolean
}

export interface ArticleWithSlug extends Article {
  slug: string
}

const articleCategories = new Set<ArticleCategory>([
  'Content',
  'Experience',
  'Architecture',
  'AI',
])

const articleStatuses = new Set<ArticleStatus>(['draft', 'published'])

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Partial<Article>
  }

  assertArticle(article, articleFilename)

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

function assertArticle(
  article: Partial<Article>,
  articleFilename: string,
): asserts article is Article {
  let requiredStrings = ['title', 'description', 'author', 'date'] as const
  for (let field of requiredStrings) {
    if (typeof article[field] !== 'string' || article[field].length === 0) {
      throw new Error(`${articleFilename} is missing article.${field}`)
    }
  }

  if (!articleCategories.has(article.category as ArticleCategory)) {
    throw new Error(`${articleFilename} has an invalid article.category`)
  }

  if (!Array.isArray(article.tags)) {
    throw new Error(`${articleFilename} is missing article.tags`)
  }

  if (!articleStatuses.has(article.status as ArticleStatus)) {
    throw new Error(`${articleFilename} has an invalid article.status`)
  }

  if (typeof article.featured !== 'boolean') {
    throw new Error(`${articleFilename} is missing article.featured`)
  }
}
