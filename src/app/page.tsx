import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

const featuredTopics = [
  {
    title: 'Digital Experiences',
    description:
      'Designing solutions that balance user needs, business goals, and technology.',
  },
  {
    title: 'Content and Platforms',
    description:
      'Adobe Experience Manager, content modeling, content delivery, and enterprise web applications.',
  },
  {
    title: 'Software and Architecture',
    description:
      'Application design, integrations, maintainability, and technical decision-making.',
  },
  {
    title: 'Emerging Technology',
    description:
      'AI, automation, and the tools changing how software is designed and built.',
  },
]

const currentInterests = [
  'Content Modeling',
  'Design Systems',
  'User Experience',
  'AI-Assisted Development',
  'Agentic Systems',
  'Digital Experience Architecture'
]

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-slate-500 dark:text-zinc-300 dark:hover:text-slate-400"
      {...props}
    >
      <Icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-slate-500" />
      {children}
    </Link>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 5)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Jason Hall
          </h1>
          <p className="mt-6 text-base font-medium text-zinc-600 dark:text-zinc-400">
            Bridging user needs, business goals, and technology.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m an AEM Developer focused on content platforms and digital experiences. I write about designing solutions, building experiences, and connecting business needs with technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/articles">Read the Articles</Button>
            <Button href="/about" variant="secondary">
              About Jason
            </Button>
          </div>
        </div>
      </Container>

      <Container className="mt-20 sm:mt-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-x-16">
          <section>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                  Recent Writing
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                  Articles and ideas from real-world projects and ongoing exploration.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-16">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </section>

          <aside className="space-y-12">
            <section>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                Featured Topics
              </h2>
              <div className="mt-4 space-y-6">
                {featuredTopics.map((topic) => (
                  <div key={topic.title}>
                    <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                About
              </h2>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                I&apos;m an AEM Developer, husband, father of two boys, and avid runner based in Arizona.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Professionally, I focus on enterprise content platforms and digital experiences. Outside of work, you&apos;ll usually find me spending time with family, training for an ultra marathon, or exploring new ideas in technology.
              </p>    
              <div className="mt-4">
                <Button href="/about" variant="secondary">
                  More About Me
                </Button>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                Current Interests
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentInterests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                Connect
              </h2>
              <div className="mt-4 grid gap-3">
                <SocialLink
                  href="https://www.linkedin.com/in/jsnhall/"
                  icon={LinkedInIcon}
                >
                  LinkedIn
                </SocialLink>
                <SocialLink href="https://github.com/jsnhall" icon={GitHubIcon}>
                  GitHub
                </SocialLink>
                <SocialLink
                  href="https://www.instagram.com/jsnhall"
                  icon={InstagramIcon}
                >
                  Instagram
                </SocialLink>
                <SocialLink href="mailto:azjasonhall@gmail.com" icon={MailIcon}>
                  Email
                </SocialLink>
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </>
  )
}
