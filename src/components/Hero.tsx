import { motion } from 'framer-motion'
import { Play, Plane } from 'lucide-react'
import hero from '../assets/hero.webp'
import { Button } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 hidden h-[90%] w-[48%] rounded-bl-[12rem] bg-cream lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pt-24 pb-16 lg:grid-cols-2 lg:px-10 lg:pt-36 lg:pb-24">
        <div>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-sm font-bold tracking-wide text-brand uppercase">Best destinations around the world</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 font-serif text-5xl leading-[1.1] font-bold text-navy sm:text-6xl lg:text-7xl">
            Travel, <span className="relative inline-block">enjoy
              <motion.span aria-hidden initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="absolute inset-x-0 -bottom-1 h-1.5 origin-left rounded-full bg-brand/80" />
            </span> and live a new and full life
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-md text-base leading-7">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 flex flex-wrap items-center gap-6">
            <Button className="bg-sun text-white">Find out more</Button>
            <button className="group flex items-center gap-3 text-sm font-medium">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg transition-transform group-hover:scale-110"><Play size={18} fill="currentColor" /></span>
              Play Demo
            </button>
          </motion.div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute inset-x-6 top-6 bottom-0 rounded-bl-[8rem] bg-cream lg:hidden" />
          <motion.img src={hero} alt="Traveller with a backpack sitting on a suitcase" width={765} height={764} fetchPriority="high"
            animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} className="relative mx-auto w-full max-w-[520px]" />
          {[{ c: 'left-[8%] top-[6%]', d: 0 }, { c: 'right-[2%] top-[22%]', d: 1.2 }].map((p) => (
            <motion.span key={p.c} aria-hidden animate={{ x: [0, 14, 0], y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, delay: p.d }} className={`absolute ${p.c} text-brand`}>
              <Plane size={34} fill="currentColor" />
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
