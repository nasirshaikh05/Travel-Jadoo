import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Booking from './components/Booking'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Services /><Destinations /><Booking /><Testimonials /><Partners /><Subscribe />
      </main>
      <Footer />
    </>
  )
}
