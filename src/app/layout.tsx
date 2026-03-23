import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HeartlandBuild — Remodeling & Renovation | Southeast Michigan',
  description: 'Expert remodeling and renovation services across Southeast Michigan. Kitchens, bathrooms, basements, additions and whole-home renovations. Licensed & insured.',
  openGraph: {
    title: 'HeartlandBuild — Remodeling & Renovation',
    description: 'Quality craftsmanship, honest pricing, on-time delivery. Serving Southeast Michigan since 2009.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
