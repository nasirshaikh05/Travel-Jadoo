import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Heading, Reveal } from './ui'

const data = [
  { name: 'Mike Taylor', role: 'Lahore, Pakistan', text: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.' },
  { name: 'Chris Thomas', role: 'CEO of Red Button', text: 'Barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.' },
  { name: 'Sara Ahmed', role: 'Bengaluru, India', text: 'Built Wicket longer admire do barton vanity itself do in it. Engrossed listening and a wonderful trip from start to finish.' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const go = (n: number) => setI((n + data.length) % data.length)
  const t = data[i]
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-10">
      <div>
        <Reveal><Heading eyebrow="Testimonials" title={<>What People Say <br className="hidden sm:block" />About Us.</>} /></Reveal>
        <div className="mt-16 flex gap-2" role="tablist" aria-label="Choose testimonial">
          {data.map((d, n) => (
            <button key={d.name} role="tab" aria-selected={n === i} aria-label={`Show testimonial from ${d.name}`} onClick={() => setI(n)}
              className={`h-2.5 rounded-full transition-all ${n === i ? 'w-6 bg-navy' : 'w-2.5 bg-navy/25'}`} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative min-h-52 flex-1" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure key={t.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.35 }}
              className="relative rounded-2xl bg-white p-8 pt-10 shadow-2xl shadow-navy/10">
              <span aria-hidden className="absolute -top-5 -left-3 grid h-11 w-11 place-items-center rounded-full bg-brand text-lg font-semibold text-white ring-4 ring-white">{t.name[0]}</span>
              <blockquote className="text-sm leading-7 italic">“{t.text}”</blockquote>
              <figcaption className="mt-5"><p className="font-semibold text-navy">{t.name}</p><p className="text-xs">{t.role}</p></figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-3">
          <button aria-label="Previous testimonial" onClick={() => go(i - 1)} className="rounded-full p-1 transition-colors hover:bg-lav"><ChevronUp size={20} /></button>
          <button aria-label="Next testimonial" onClick={() => go(i + 1)} className="rounded-full p-1 transition-colors hover:bg-lav"><ChevronDown size={20} /></button>
        </div>
      </div>
    </section>
  )
}
