import { type Metadata, type Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const siteDescription =
  'Jason Hall writes about designing solutions, building digital experiences, and connecting business needs with technology. Topics include content platforms, software architecture, user experience, and emerging technology.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/manifest.webmanifest',
  title: {
    template: '%s - Jason Hall',
    default: 'Jason Hall | Digital Experiences, Content Platforms, and Technology',
  },
  description: siteDescription,
  openGraph: {
    title: 'Jason Hall | Digital Experiences, Content Platforms, and Technology',
    description: siteDescription,
    url: siteUrl,
    siteName: 'jasonhall.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Jason Hall | Digital Experiences, Content Platforms, and Technology',
    description: siteDescription,
  },
  appleWebApp: {
    capable: true,
    title: 'Jason Hall',
    statusBarStyle: 'black-translucent',
  },
  alternates: {
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="flex h-full bg-zinc-50 dark:bg-black"
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
