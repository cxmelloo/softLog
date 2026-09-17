import {Link, Outlet} from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import Navbar from '../components/Navbar';
import Menu from '../assets/Menu.svg'
import Footer from '../components/footer/Footer';

function RouteLayout() {
  return (
    <>
    <header className='py-5 md:py-3'>
      <div className='flex items-center  c-container'>
        <Link className='md:mr-15 mr-5' to='/'><img src={Logo} alt="logo"/></Link>
        <Navbar/>
        <div className='ml-auto gap-3 hidden md:flex'>
          <button className='white-btn'>Claim profile</button>
          <button className='blue-btn'>Write a review</button>
        </div>
        <button className='ml-auto sm:hidden flex'>
          <img src={Menu} alt="Menu" />
        </button>
      </div>
    </header>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RouteLayout