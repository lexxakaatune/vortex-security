import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [toggle, setToggle] = useState('hide');

  const pages = ['Home', 'About'];

  const toggleNav = () => {
    const nav = document.querySelector('.header__nav');
    const btn = document.querySelector('.header__btn');
    if (toggle === 'hide') {
      nav.classList.remove('hide')
      nav.classList.add('show')
      btn.innerText = '❌'
      setToggle('show')
    } else {
      nav.classList.remove('show')
      nav.classList.add('hide')
      btn.innerText = 'MENU'
      setToggle('hide')
    }
  }

  return (
    <header className='header'>
      <h1 className='title nowrap'>Vortex Security</h1>
      <nav className="header__nav hide">
        <ul className='header__ul none'>
          {pages.map((page) => {
            if (page === 'Home') {
              const link = <Link to='/' className="none">
                <li className="header__li">{page}</li>
              </Link>
              return link;
            } else {
              const link = <Link to={page} className="none">
                <li className="header__li">{page}</li>
              </Link>
              return link;
            }
          })}
        </ul>
      </nav>
      <button className="header__btn" onClick={toggleNav}>menu</button>
    </header>
  )
}

export const Footer = () => {
  const pages = ['Home', 'About', 'Contact', 'Services']
  const services = ['Business & Residential', 'CCTV Security Services', 'Finger Print Access', 'Closed Circuit Cameras', 'Alarm Systems']
  const supports = ['Support Center', 'Terms of Use', 'Privacy Policy', 'Product Returns', 'Choose the Right System']

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <figure class="footer__figure">
        <img src="logo/vortexlogo.500x200.gif" alt="Vortex Logo" width="500" height="200" title="Vortex Security Concepts" />
      </figure>
      <ol className="footer__ul none">
        <li className="flex-grow">
          <h2 className="footer__h2 nowrap">Vortex Security</h2>
          <p className="footer__p">We boost a team of skilled and qualified professionals ready to install a robust security system, safeguarding your premises and ensuring. <br /> Experts install advanced security systems with the latest technology.</p>
        </li>
        <li>
          <ul className="none">
            <li><h3 className="footer__h3 nowrap">Useful Links</h3></li>
            {pages.map((page) => {
              const link = <li className="footer__li nowrap">{page}</li>
              return link;
            })}
          </ul>
        </li>      
        <li>
          <ul className="none">
            <li><h3 className="footer__h3 nowrap">Services</h3></li>
            {services.map((service) => {
              const link = <li className="footer__li nowrap">{service}</li>
              return link;
            })}
          </ul>
        </li>      
        <li>
          <ul className="none">
            <li><h3 className="footer__h3 nowrap">Support</h3></li>
            {supports.map((support) => {
              const link = <li className="footer__li nowrap">{support}</li>
              return link;
            })}
          </ul>
        </li>      
      </ol>
      <p className="footer__P center">Copyrights &copy; {year} Vortex Security. All rights reserved.</p>
    </footer>
  )
}

