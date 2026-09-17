import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Navbar from '../components/Navbar'
import Menu from '../assets/Menu.svg'
import Footer from '../components/footer/Footer'

function RouteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="py-5 md:py-3">
        <div className="flex items-center c-container">

          <Link className="md:mr-15 mr-5" to="/" onClick={closeMenu}>
            <img src={Logo} alt="logo" />
          </Link>

          <Navbar />

          <div className="ml-auto gap-3 hidden md:flex">
            <button className="white-btn"> Claim profile</button>
            <button className="blue-btn">Write a review</button>
          </div>

          <button className="ml-auto sm:hidden flex" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={Menu} alt="Menu" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden c-container">
            <div className="flex flex-col gap-6 py-6">

              <Navbar mobile onLinkClick={closeMenu}/>

              <div className="flex flex-col gap-3">
                <button className="white-btn w-full"> Claim profile</button>
                <button className="blue-btn w-full"> Write a review</button>
              </div>
            </div>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RouteLayout
