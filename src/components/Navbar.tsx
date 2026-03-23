'use client'

import { useState } from 'react'
import { brand, navLinks } from '@/data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ background: 'var(--warm-white)', borderColor: 'var(--border)' }}>
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <div className="font-display text-xl font-bold" style={{ color: 'var(--stone-deep)' }}>
          Heartland<span style={{ color: 'var(--amber)' }}>Build</span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm transition-colors duration-200 cursor-pointer"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {l.label}
            </a>
          ))}
          <a href="#quote">
            <button className="px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200"
              style={{ background: 'var(--amber)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--amber-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--amber)')}
            >
              Get a free quote
            </button>
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block w-5 transition-all duration-200" style={{ height: '1px', background: 'var(--stone-deep)', transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
          <span className="block w-5 transition-all duration-200" style={{ height: '1px', background: 'var(--stone-deep)', opacity: open ? 0 : 1 }} />
          <span className="block w-5 transition-all duration-200" style={{ height: '1px', background: 'var(--stone-deep)', transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-5 gap-4 border-t" style={{ borderColor: 'var(--border)' }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm pt-3 cursor-pointer" style={{ color: 'var(--muted)' }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#quote" onClick={() => setOpen(false)}>
            <button className="w-full py-2.5 text-sm font-medium text-white mt-1" style={{ background: 'var(--amber)' }}>
              Get a free quote
            </button>
          </a>
        </div>
      )}
    </nav>
  )
}
