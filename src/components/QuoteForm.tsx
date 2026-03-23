'use client'

import { useState } from 'react'
import { brand, projectTypes } from '@/data/content'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="px-6 md:px-10 py-14 md:py-16" style={{ background: 'var(--stone-deep)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Left */}
        <div>
          <div className="section-eyebrow">Free estimate</div>
          <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(24px,4vw,36px)' }}>
            Get your <em style={{ color: 'var(--amber)' }}>free</em><br />estimate today.
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(250,246,239,0.55)' }}>
            No pressure, no obligation. We&apos;ll visit your home, discuss your vision, and provide a detailed written quote within 48 hours.
          </p>
          <div className="font-display text-2xl mb-1" style={{ color: 'var(--amber)' }}>{brand.phone}</div>
          <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.4)' }}>Or call us directly</div>
          <div className="mt-6 pt-6 border-t text-xs" style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(250,246,239,0.35)' }}>
            {brand.license}
          </div>
        </div>

        {/* Right — form */}
        {submitted ? (
          <div className="flex flex-col items-start justify-center gap-4 py-12">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--amber)' }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="font-display text-2xl text-white">Request received!</div>
            <p className="text-sm" style={{ color: 'rgba(250,246,239,0.55)' }}>We&apos;ll be in touch within 48 hours to schedule your free estimate.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.5)' }}>First name</label>
                <input required type="text" placeholder="First" className="px-3 py-2.5 text-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,127,58,0.2)', color: 'var(--warm-white)', fontFamily: 'Inter, sans-serif' }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.5)' }}>Last name</label>
                <input required type="text" placeholder="Last" className="px-3 py-2.5 text-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,127,58,0.2)', color: 'var(--warm-white)', fontFamily: 'Inter, sans-serif' }} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.5)' }}>Email</label>
              <input required type="email" placeholder="you@email.com" className="px-3 py-2.5 text-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,127,58,0.2)', color: 'var(--warm-white)', fontFamily: 'Inter, sans-serif' }} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.5)' }}>Phone</label>
              <input type="tel" placeholder="(734) 555-0000" className="px-3 py-2.5 text-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,127,58,0.2)', color: 'var(--warm-white)', fontFamily: 'Inter, sans-serif' }} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.5)' }}>Project type</label>
              <select required className="px-3 py-2.5 text-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,127,58,0.2)', color: 'var(--warm-white)', fontFamily: 'Inter, sans-serif' }}>
                <option value="">Select a project type</option>
                {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.5)' }}>Tell us about your project</label>
              <textarea placeholder="Describe what you're looking to do..." rows={4} className="px-3 py-2.5 text-sm outline-none resize-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(193,127,58,0.2)', color: 'var(--warm-white)', fontFamily: 'Inter, sans-serif' }} />
            </div>
            <button type="submit" className="w-full py-3 text-sm font-medium text-white mt-1 transition-colors duration-200"
              style={{ background: 'var(--amber)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--amber-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--amber)')}
            >
              Request my free quote
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
