'use client'

import { galleryItems } from '@/data/content'

export default function Gallery() {
  return (
    <section id="work" className="px-6 md:px-10 pt-14 md:pt-16 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="section-eyebrow">Our work</div>
      <h2 className="font-display font-bold leading-tight mb-3" style={{ fontSize: 'clamp(24px,4vw,36px)', color: 'var(--stone-deep)' }}>
        Built to last,<br />designed to impress
      </h2>
      <p className="text-sm leading-relaxed mb-10 max-w-lg" style={{ color: 'var(--muted)' }}>
        A sample of recent projects across Southeast Michigan. Photos coming soon — check back shortly.
      </p>

      {/* Desktop grid */}
      <div className="hidden md:grid gap-0.5" style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '200px 200px' }}>
        {galleryItems.map((item, i) => (
          <div key={i} className="relative overflow-hidden flex items-center justify-center"
            style={{
              background: 'var(--stone-light)',
              gridRow: item.size === 'tall' ? '1 / 3' : 'auto',
            }}
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.3)' }}>
              Photo coming soon
            </span>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs" style={{ background: 'rgba(44,36,22,0.75)', color: 'var(--amber-pale)', letterSpacing: '0.04em' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile stack */}
      <div className="md:hidden flex flex-col gap-0.5">
        {galleryItems.map((item, i) => (
          <div key={i} className="relative flex items-center justify-center" style={{ height: '160px', background: 'var(--stone-light)' }}>
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.3)' }}>
              Photo coming soon
            </span>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs" style={{ background: 'rgba(44,36,22,0.75)', color: 'var(--amber-pale)', letterSpacing: '0.04em' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
