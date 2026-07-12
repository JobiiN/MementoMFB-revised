import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


/*import 'geist/font/sans';*/

import NavHead from "./navbar"
import Hero from "./hero"
import AboutUss from "./AboutUs"
import Services from "./Services"
import Jsun from "./jsun"
import Footee from "./Footer"
import Loans from './Loans'
import FAQ from './FAQ'

function App() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })

    AOS.init({
      duration: 800,
      once: true
    })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <NavHead scrolled={scrolled} />
      <Hero />
      <AboutUss />
      <Services />
      <FAQ/>
      <Jsun />
      <Footee />
    </>
  )
}

export default App
