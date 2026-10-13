import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'
import rome from '../assets/rome.webp'
import london from '../assets/london.webp'
import europe from '../assets/europe.webp'
import { Heading, Reveal } from './ui'

const places = [
  { img: rome, name: 'Rome, Italy', price: '$5.42k', trip: '10 Days Trip' },
  { img: london, name: 'London, UK', price: '$4.2k', trip: '12 Days Trip' },
  { img: europe, name: 'Full Europe', price: '$15k', trip: '28 Days Trip' },
]

export default function Destinations() {
  return (
    <section id="destinations" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 lg:px-10">
      <Reveal><Heading center eyebrow="Top Selling" title="Top Destinations" /></Reveal>
      <ul className="mt-14 grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((p, i) => (
          <li key={p.name} className="mx-auto w-full max-w-xs">
            <Reveal delay={i * 0.12}>
              <motion.article whileHover={{ y: -10 }} className="group overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy/10">
                <div className="aspect-[4/4.4] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="space-y-3 p-5 text-sm">
                  <div className="flex justify-between font-medium text-navy"><h3>{p.name}</h3><span>{p.price}</span></div>
                  <p className="flex items-center gap-2"><Navigation size={14} className="text-navy" />{p.trip}</p>
                </div>
              </motion.article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
