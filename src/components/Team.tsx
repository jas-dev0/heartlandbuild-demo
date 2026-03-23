'use client'

import { team } from '@/data/content'

export default function Team() {
  return (
    <section id="about" className="px-6 md:px-10 py-14 md:py-16 border-b" style={{ borderColor: 'var(--border)', background: 'var(--cream)' }}>
      <div className="section-eyebrow">The team</div>
      <h2 className="font-display font-bold leading-tight mb-3" style={{ fontSize: 'clamp(24px,4vw,36px)', color: 'var(--stone-deep)' }}>
        People who take pride<br />in their work
      </h2>
      <p className="text-sm leading-relaxed mb-10 max-w-lg" style={{ color: 'var(--muted)' }}>
        Family-owned and operated since 2009. Every project is personal to us.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {team.map((member) => (
          <div key={member.name} className="p-6" style={{ background: 'var(--warm-white)', border: '1px solid var(--border)' }}>
            <div className="w-13 h-13 w-12 h-12 rounded-full flex items-center justify-center font-display text-lg mb-4 flex-shrink-0"
              style={{ background: 'var(--stone-light)', color: 'var(--amber)' }}
            >
              {member.initials}
            </div>
            <div className="font-display text-lg font-medium mb-1" style={{ color: 'var(--stone-deep)' }}>
              {member.name}
            </div>
            <div className="text-xs tracking-wide uppercase mb-3" style={{ color: 'var(--amber)', letterSpacing: '0.06em' }}>
              {member.role}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
