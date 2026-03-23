'use client'

import { brand, navLinks } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--stone-deep)', borderTop: '1px solid rgba(193,127,58,0.15)' }}>
      <div className="px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-xl font-bold mb-2" style={{ color: 'var(--amber)' }}>
            HeartlandBuild
          </div>
          <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(250,246,239,0.45)' }}>
            Quality remodeling and renovation services across Southeast Michigan since 2009.
          </p>
          <div className="text-xs" style={{ color: 'rgba(250,246,239,0.3)' }}>{brand.license}</div>
        </div>

        <div>
          <div className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--amber)' }}>Pages</div>
          <div className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm transition-colors duration-200"
                style={{ color: 'rgba(250,246,239,0.5)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,246,239,0.5)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--amber)' }}>Contact</div>
          <div className="flex flex-col gap-2 text-sm" style={{ color: 'rgba(250,246,239,0.5)' }}>
            <a href={`tel:${brand.phone}`} style={{ color: 'rgba(250,246,239,0.5)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,246,239,0.5)')}
            >{brand.phone}</a>
            <a href={`mailto:${brand.email}`} style={{ color: 'rgba(250,246,239,0.5)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,246,239,0.5)')}
            >{brand.email}</a>
            <span>{brand.address}</span>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 py-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <span className="text-xs" style={{ color: 'rgba(250,246,239,0.3)' }}>© {year} HeartlandBuild LLC · All rights reserved</span>
        <span className="text-xs" style={{ color: 'rgba(250,246,239,0.2)' }}>Built by BluPix</span>
      </div>
    </footer>
  )
}
