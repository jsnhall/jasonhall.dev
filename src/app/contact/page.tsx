import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jsnhall/',
    description: 'The best place to connect professionally.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jsnhall',
    description: 'Code, experiments, and public project work.',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jsnhall',
    description: 'A lighter look at life outside the work.',
  },
  {
    label: 'Email',
    href: 'mailto:azjasonhall@gmail.com',
    description: 'For direct notes, project conversations, or follow-up.',
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
      title="Contact"
      intro="The best way to reach me is through LinkedIn or email. You can also find public project work on GitHub."
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
