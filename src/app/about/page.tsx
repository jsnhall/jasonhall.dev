import { type Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

const focusAreas = [
  'AEM and enterprise content platforms',
  'Content architecture and governance',
  'User experience and discoverability',
  'Design systems and component contracts',
  'AI-assisted development workflows',
]

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

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

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Jason Hall, an AEM developer focused on content architecture, user experience, design systems, and AI-assisted development.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src="/images/jason-hall-woods.png"
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <div className="mt-10 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Focus areas
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Jason Hall. I build digital experiences through content,
            architecture, and user experience.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I work with enterprise content platforms, especially AEM, where
              small decisions about content models, authoring workflows, and
              component contracts can shape the quality of an experience for
              years.
            </p>
            <p>
              My work sits at the intersection of content architecture, user
              experience, design systems, and software architecture. I care
              about making systems that are clear enough for teams to maintain
              and useful enough for people to actually rely on.
            </p>
            <p>
              I am also exploring how AI-assisted development changes the way
              teams plan, build, review, and document digital products. The
              useful parts are rarely the flashy demos. The useful parts are the
              places where friction disappears and better decisions get easier
              to make.
            </p>
            <p>
              Outside of work, I am a husband, father of two boys, and runner.
              This site is where I collect practical lessons from the projects,
              tools, and ideas I keep coming back to.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.linkedin.com/in/jsnhall/" icon={LinkedInIcon}>
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/jsnhall"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/jsnhall"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:azjasonhall@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              azjasonhall@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
