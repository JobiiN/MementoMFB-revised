import { useState, useEffect } from 'react'
import logo from './assets/logoR2.png'

function NavHead({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = ['home', 'AboutUs', 'Services', 'contact']

    const handleScroll = () => {
  const sections = ['home', 'AboutUs', 'Services', 'contact']
  
  let closest = sections[0]
  let closestDistance = Infinity

  for (let id of sections) {
    const el = document.getElementById(id)
    if (!el) continue
    const distance = Math.abs(el.getBoundingClientRect().top - 100)
    if (distance < closestDistance) {
      closestDistance = distance
      closest = id
    }
  }

  setActiveId(closest)
}
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (id) => activeId === id ? 'nav-active' : ''

  return (
    <>
    <div id='home'/>
      <div className={`NavHead${scrolled ? ' scrolled' : ''}`}>
        <div className='NaRow'>
          <a className='logoArea'>
            <img className="logo" src={logo} />
            <span className='logotext'><b>Memento</b> <small>Microfinance Bank</small></span>
          </a>

          <div className='navBarLinks'>
            <a href='#home'     className={linkClass('home')}>Home</a>
            <a href='#AboutUs'  className={linkClass('AboutUs')}>About Us</a>
            <a href='#Services' className={linkClass('Services')}>Services & Loans</a>
            <a href='#contact'  className={linkClass('contact')}>Contact Us</a>
          </div>



          <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        {menuOpen && (
          <div className='mobileMenu'>
            <a href='#home'     onClick={() => setMenuOpen(false)}>Home</a>
            <a href='#AboutUs'  onClick={() => setMenuOpen(false)}>About Us</a>
            <a href='#Services' onClick={() => setMenuOpen(false)}>Services & Loans</a>
            <a href='#contact'  onClick={() => setMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </div>
    </>
  )
}

export default NavHead
