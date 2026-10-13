import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Heart, Leaf, Map, MapPin, Plane, Send, Wallet } from 'lucide-react'
import greece from '../assets/greece.webp'
import ongoingRome from '../assets/ongoing-rome.png'
import { Heading, Reveal } from './ui'

const steps = [
  { icon: MapPin, bg: 'bg-sun', title: 'Choose Destination' },
  { icon: Wallet, bg: 'bg-brand', title: 'Make Payment' },
  { icon: Plane, bg: 'bg-teal-700', title: 'Reach Airport on Selected Date' },
]

export default function Booking() {
  const [liked, setLiked] = useState(false)

  return (
    <section id="bookings" className="mx-auto grid max-w-7xl scroll-mt-20 items-center gap-14 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
      <div>
        <Reveal><Heading eyebrow="Easy and Fast" title={<>Book Your Next Trip <br className="hidden sm:block" />In 3 Easy Steps</>} /></Reveal>
        <ol className="mt-10 space-y-8">
          {steps.map(({ icon: Icon, bg, title }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.12} className="flex gap-5">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white ${bg}`}><Icon size={22} /></span>
                <div>
                  <h3 className="font-semibold text-navy">{title}</h3>
                  <p className="mt-1 max-w-sm text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal className="relative mx-auto w-full max-w-sm pb-16 lg:ml-auto">
        <div aria-hidden className="absolute -top-12 -right-8 -z-10 h-72 w-72 rounded-full bg-[#59B1E6]/25 blur-3xl pointer-events-none" />

        {/* Main Trip To Greece Card */}
        <article className="rounded-3xl bg-white p-5 shadow-[0_25px_60px_rgba(0,0,0,0.06)] border border-slate-100/60">
          <img
            src={greece}
            alt="Santorini, Greece"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl object-cover shadow-sm"
          />
          <h3 className="mt-5 text-[18px] font-bold text-[#080809] tracking-tight">Trip To Greece</h3>
          <p className="mt-1 text-sm font-medium text-[#84829A]">14-29 June | by Robbin joseph</p>

          {/* Action Icons: Leaf, Map, Send */}
          <div className="mt-4 flex items-center gap-3.5">
            <button
              type="button"
              aria-label="Activities"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#F5F5F7] text-[#84829A] transition-colors hover:bg-brand/10 hover:text-brand"
            >
              <Leaf size={16} />
            </button>
            <button
              type="button"
              aria-label="Map location"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#F5F5F7] text-[#84829A] transition-colors hover:bg-brand/10 hover:text-brand"
            >
              <Map size={16} />
            </button>
            <button
              type="button"
              aria-label="Share or navigation"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#F5F5F7] text-[#84829A] transition-colors hover:bg-brand/10 hover:text-brand"
            >
              <Send size={15} />
            </button>
          </div>

          {/* Card Footer: Building icon + 24 people going, and Heart */}
          <div className="mt-6 flex items-center justify-between text-sm text-[#84829A]">
            <span className="flex items-center gap-2.5 font-medium">
              <Building2 size={16} className="text-[#84829A]" />
              24 people going
            </span>
            <button
              type="button"
              onClick={() => setLiked(!liked)}
              aria-label="Save trip"
              className="text-[#4152CA] transition-transform hover:scale-110 active:scale-95"
            >
              <Heart size={18} className={`stroke-[1.8] ${liked ? 'fill-[#4152CA]' : ''}`} />
            </button>
          </div>
        </article>

        {/* Floating Ongoing Trip to rome Card */}
        <motion.aside
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="absolute -right-4 bottom-2 w-56 rounded-[18px] bg-white p-4 shadow-[0_20px_45px_rgba(0,0,0,0.1)] border border-slate-100 sm:-right-8"
        >
          <div className="flex items-start gap-3">
            <img
              src={ongoingRome}
              alt="Trip to rome"
              className="h-12 w-12 rounded-full object-cover shrink-0 shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#84829A]">Ongoing</p>
              <h4 className="text-[15px] font-bold text-[#080809] leading-snug mt-0.5">Trip to rome</h4>
              <p className="mt-2 text-xs font-medium text-[#84829A]">
                <span className="text-[#8A79DF] font-semibold">40%</span> completed
              </p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#F5F5F7]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="h-full rounded-full bg-[#8A79DF]"
                />
              </div>
            </div>
          </div>
        </motion.aside>
      </Reveal>
    </section>
  )
}

