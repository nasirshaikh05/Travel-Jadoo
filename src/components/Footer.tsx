import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Logo } from './Navbar'

const cols = [
  ['Company', ['About', 'Careers', 'Mobile']],
  ['Contact', ['Help/FAQ', 'Press', 'Affilates']],
  ['More', ['Airlinefees', 'Airline', 'Low fare tips']],
] as const

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pt-10 pb-8 lg:px-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div><Logo className="text-3xl" /><p className="mt-3 max-w-[220px] text-xs leading-5">Book your trip in minute, get full Control for much longer.</p></div>
        {cols.map(([h, ls]) => (
          <nav key={h} aria-label={h}>
            <h3 className="font-semibold text-navy">{h}</h3>
            <ul className="mt-4 space-y-3 text-sm">{ls.map((l) => <li key={l}><a href="#top" className="transition-colors hover:text-brand">{l}</a></li>)}</ul>
          </nav>
        ))}
        <div>
          <div className="flex gap-3">
            {[[Facebook, 'Facebook'], [Instagram, 'Instagram'], [Twitter, 'Twitter']].map(([I, n]) => {
              const Icon = I as typeof Facebook
              return <a key={n as string} href="#top" aria-label={n as string} className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-md transition-transform hover:-translate-y-1 hover:text-brand"><Icon size={16} /></a>
            })}
          </div>
          <p className="mt-6 text-sm font-medium text-navy">Discover our app</p>
          <div className="mt-3 flex gap-3 text-xs font-medium text-white">
            {['App Store', 'Google Play'].map((s) => <a key={s} href="#top" className="rounded-md bg-black px-3 py-2 transition-transform hover:scale-105">{s}</a>)}
          </div>
        </div>
      </div>
      <p className="mt-14 text-center text-xs">All rights reserved@jadoo.co</p>
    </footer>
  )
}
