export default function ServiceIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
  const icons: Record<string, JSX.Element> = {
    kitchen: (
      <svg viewBox="0 0 24 24" className={cls}>
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    bath: (
      <svg viewBox="0 0 24 24" className={cls}>
        <path d="M4 4h16v16H4z"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3"/>
      </svg>
    ),
    basement: (
      <svg viewBox="0 0 24 24" className={cls}>
        <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9"/>
      </svg>
    ),
    addition: (
      <svg viewBox="0 0 24 24" className={cls}>
        <rect x="2" y="7" width="20" height="14" rx="1"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
    ),
    flooring: (
      <svg viewBox="0 0 24 24" className={cls}>
        <path d="M4 21V8a2 2 0 012-2h12a2 2 0 012 2v13"/>
        <path d="M9 21v-6h6v6"/>
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" className={cls}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  }
  return icons[name] ?? icons.home
}
