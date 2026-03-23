'use client'

import { serviceAreas, brand } from '@/data/content'

export default function ServiceArea() {
  return (
    <section id="area" className="px-6 md:px-10 py-14 md:py-16 border-b" style={{ borderColor: 'var(--border)', background: 'var(--cream)' }}>
      <div className="section-eyebrow">Service area</div>
      <h2 className="font-display font-bold leading-tight mb-10" style={{ fontSize: 'clamp(24px,4vw,36px)', color: 'var(--stone-deep)' }}>
        Serving Southeast Michigan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Map placeholder — swap for Google Maps iframe */}
        <div className="flex items-center justify-center" style={{ height: '280px', background: 'var(--stone-light)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(250,246,239,0.35)' }}>
            Map embed — replace with Google Maps iframe
          </span>
        </div>

        <div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
            We serve homeowners throughout the greater Detroit metro area and surrounding communities.
            Not sure if we cover your area?{' '}
            <a href={`tel:${brand.phone}`} style={{ color: 'var(--amber)' }}>Give us a call.</a>
          </p>
          <div className="flex flex-col">
            {serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 py-3 border-b text-sm" style={{ borderColor: 'var(--border)', color: 'var(--stone-deep)' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--amber)' }} />
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
