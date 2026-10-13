import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { Button, Dots, Reveal } from './ui'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'ok'>('idle')
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setStatus(valid ? 'ok' : 'error')
    if (valid) setEmail('')
  }
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 lg:px-10">
      <Reveal>
        <div className="relative rounded-[2rem] bg-lav px-6 py-16 text-center sm:px-12">
          <span aria-hidden className="absolute -top-5 -right-3 grid h-12 w-12 place-items-center rounded-full bg-indigo-500 text-white shadow-lg sm:right-8"><Send size={20} /></span>
          <Dots cols={4} rows={4} className="absolute -right-6 -bottom-12 hidden sm:grid" />
          <h2 className="mx-auto max-w-2xl text-xl font-semibold text-navy/60 sm:text-2xl lg:text-[28px] lg:leading-10">Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
          <form onSubmit={submit} noValidate className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <label className="flex flex-1 items-center gap-3 rounded-md bg-white px-4 py-3 text-sm">
              <Mail size={16} aria-hidden />
              <span className="sr-only">Your email</span>
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus('idle') }} placeholder="Your email" aria-invalid={status === 'error'}
                className="w-full bg-transparent outline-none placeholder:text-muted/60" />
            </label>
            <Button type="submit" className="bg-orange-400 text-white">Subscribe</Button>
          </form>
          <p role="status" className={`mt-4 min-h-5 text-sm ${status === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>
            {status === 'error' && 'Please enter a valid email address.'}{status === 'ok' && 'Thanks for subscribing!'}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
