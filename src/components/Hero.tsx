'use client'

import { brand, stats } from '@/data/content'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-20 pb-14 md:pb-16 border-b"
      style={{ background: 'var(--stone-deep)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,0.01) 0px,rgba(255,255,255,0.01) 1px,transparent 1px,transparent 8px)'
      }} />

      <div className="animate-fade-up section-eyebrow" style={{ animationDelay: '0.1s' }}>
        {brand.badge}
      </div>

      <h1 className="animate-fade-up font-display font-bold text-white leading-tight mb-4"
        style={{ fontSize: 'clamp(36px,7vw,60px)', animationDelay: '0.2s' }}
      >
        Your home,<br />
        <em style={{ color: 'var(--amber)' }}>reimagined.</em>
      </h1>

      <p className="animate-fade-up text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl"
        style={{ color: 'rgba(250,246,239,0.65)', animationDelay: '0.3s' }}
      >
        {brand.subTagline}
      </p>

      <div className="animate-fade-up flex flex-col sm:flex-row gap-3 mb-14" style={{ animationDelay: '0.4s' }}>
        <a href="#quote">
          <button className="w-full sm:w-auto px-7 py-3 text-sm font-medium text-white transition-colors duration-200"
            style={{ background: 'var(--amber)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--amber-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--amber)')}
          >
            Get a free quote
          </button>
        </a>
        <a href="#work">
          <button className="w-full sm:w-auto px-7 py-3 text-sm font-medium transition-colors duration-200"
            style={{ background: 'transparent', color: 'var(--amber-pale)', border: '1px solid rgba(193,127,58,0.4)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--amber)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(193,127,58,0.4)')}
          >
            See our work
          </button>
        </a>
      </div>

      <div className="animate-fade-up flex flex-wrap gap-8 pt-8 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)', animationDelay: '0.5s' }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display font-bold leading-none" style={{ fontSize: 'clamp(24px,5vw,30px)', color: 'var(--amber)' }}>
              {s.number}
            </div>
            <div className="text-xs tracking-widest uppercase mt-1" style={{ color: 'rgba(250,246,239,0.5)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
