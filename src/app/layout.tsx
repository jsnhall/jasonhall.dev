import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const siteDescription =
  'Practical writing on content architecture, user experience, software architecture, AEM, and AI-assisted development.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Jason Hall',
    default: 'Jason Hall - Building better digital experiences',
  },
  description: siteDescription,
  openGraph: {
    title: 'Jason Hall - Building better digital experiences',
    description: siteDescription,
    url: siteUrl,
    siteName: 'jasonhall.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Jason Hall - Building better digital experiences',
    description: siteDescription,
  },
  alternates: {
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
