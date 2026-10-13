import { motion } from 'framer-motion'
import { CloudSun, Mic, Plane, Settings } from 'lucide-react'
import { Dots, Heading, Reveal } from './ui'

const items = [
  { icon: CloudSun, tint: 'bg-cream', name: 'Calculated Weather', text: 'Built Wicket longer admire do barton vanity itself do in it.' },
  { icon: Plane, tint: 'bg-sky-100', name: 'Best Flights', text: 'Engrossed listening. Park gate sell they west hard for the.' },
  { icon: Mic, tint: 'bg-orange-100', name: 'Local Events', text: 'Barton vanity itself do in it. Preferd to men it engrossed listening.' },
  { icon: Settings, tint: 'bg-cream', name: 'Customization', text: 'We deliver outsourced aviation services for military customers' },
]

export default function Services() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <Dots className="absolute top-12 right-5 hidden lg:grid" cols={5} rows={5} />
      <Reveal><Heading center eyebrow="CATEGORY" title="We Offer Best Services" /></Reveal>
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, tint, name, text }, i) => (
          <li key={name}>
            <Reveal delay={i * 0.1} className="h-full">
              <motion.article whileHover={{ y: -8 }} className={`h-full rounded-3xl p-8 text-center transition-shadow hover:shadow-2xl ${i === 1 ? 'bg-white shadow-2xl' : 'hover:bg-white'}`}>
                <div className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl ${tint}`}><Icon className="text-navy" size={30} /></div>
                <h3 className="mt-6 text-lg font-semibold text-navy">{name}</h3>
                <p className="mt-3 text-sm leading-6">{text}</p>
              </motion.article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
