import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jsnhall/',
    description: 'Professional profile and career history.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jsnhall',
    description: 'Side projects, experiments, and public code.',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jsnhall',
    description: 'Life outside of work.',
  },
  {
    label: 'Email',
    href: 'mailto:azjasonhall@gmail.com',
    description: 'The best way to reach me directly.',
  },
]

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Jason Hall through LinkedIn, GitHub, Instagram, or email.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Connect with me."
      intro="The best way to reach me is by email. You can also connect with me on LinkedIn or explore side projects and experiments on GitHub."
    >
      <div className="grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
        {contactLinks.map((link) => (
          <Card key={link.href}>
            <Card.Title href={link.href}>{link.label}</Card.Title>
            <Card.Description>{link.description}</Card.Description>
            <Card.Cta>Open {link.label}</Card.Cta>
          </Card>
        ))}
      </div>
    </SimpleLayout>
  )
}
