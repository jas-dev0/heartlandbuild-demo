'use client'

import { services } from '@/data/content'
import ServiceIcon from './ServiceIcon'

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-14 md:py-16 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="section-eyebrow">What we do</div>
      <h2 className="font-display font-bold leading-tight mb-3" style={{ fontSize: 'clamp(24px,4vw,36px)', color: 'var(--stone-deep)' }}>
        Full-service remodeling,<br />start to finish
      </h2>
      <p className="text-sm leading-relaxed mb-10 max-w-lg" style={{ color: 'var(--muted)' }}>
        From a single room refresh to a whole-home renovation, we handle every detail so you don&apos;t have to.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
        {services.map((s) => (
          <div key={s.title} className="p-6 md:p-7 transition-colors duration-200 cursor-pointer"
            style={{ background: 'var(--warm-white)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--amber-pale)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--warm-white)')}
          >
            <div className="w-9 h-9 flex items-center justify-center mb-4 flex-shrink-0"
              style={{ background: 'var(--amber-pale)', color: 'var(--amber)' }}
            >
              <ServiceIcon name={s.icon} />
            </div>
            <h3 className="font-display text-lg font-medium mb-2" style={{ color: 'var(--stone-deep)' }}>
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
