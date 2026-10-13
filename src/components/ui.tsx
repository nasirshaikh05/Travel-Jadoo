import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function Heading({ eyebrow, title, center = false }: { eyebrow: string; title: ReactNode; center?: boolean }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="text-sm font-medium text-navy/70 sm:text-base">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-[40px] lg:leading-tight">{title}</h2>
    </div>
  )
}

export function Dots({ cols = 5, rows = 5, className = '' }: { cols?: number; rows?: number; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none grid gap-x-3 gap-y-2 text-xs text-brand/40 select-none ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: cols * rows }, (_, i) => <span key={i}>+</span>)}
    </div>
  )
}

export const Button = ({ children, className = '', ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className={`rounded-md px-6 py-3 text-sm font-semibold shadow-md transition-shadow hover:shadow-lg ${className}`} {...(p as object)}>
    {children}
  </motion.button>
)
