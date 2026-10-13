import { useState } from 'react'
import axon from '../assets/axon.webp'
import jetstar from '../assets/jetstar.webp'
import expedia from '../assets/expedia.webp'
import qantas from '../assets/qantas.webp'
import alitalia from '../assets/alitalia.webp'
import { Reveal } from './ui'

const partners = [
  { name: 'Axon Airlines', src: axon, height: 'h-7 sm:h-8' },
  { name: 'Jetstar', src: jetstar, height: 'h-6 sm:h-7' },
  { name: 'Expedia', src: expedia, height: 'h-9 sm:h-10' },
  { name: 'Qantas', src: qantas, height: 'h-6 sm:h-7' },
  { name: 'Alitalia', src: alitalia, height: 'h-5 sm:h-6' },
]

export default function Partners() {
  const [activePartner, setActivePartner] = useState('Expedia')

  return (
    <section aria-label="Our partners" className="mx-auto max-w-6xl px-5 py-14 lg:px-10 lg:py-20">
      <Reveal>
        <ul
          onMouseLeave={() => setActivePartner('Expedia')}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center gap-6 lg:gap-8"
        >
          {partners.map(({ name, src, height }) => {
            const isActive = activePartner === name
            return (
              <li
                key={name}
                onMouseEnter={() => setActivePartner(name)}
                className="w-full flex items-center justify-center"
              >
                <div
                  className={`flex h-20 w-full max-w-[200px] items-center justify-center rounded-[24px] px-6 transition-all duration-300 ${
                    isActive
                      ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] scale-105'
                      : 'hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:scale-105'
                  }`}
                >
                  <img
                    src={src}
                    alt={name}
                    loading="lazy"
                    className={`w-auto object-contain transition-all duration-300 ${height} ${
                      isActive
                        ? 'grayscale-0 opacity-100'
                        : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                    }`}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}

