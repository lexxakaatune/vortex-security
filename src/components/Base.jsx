import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { vortexLogo } from "../assets/image";

export const Header = () => {
  const [toggle, setToggle] = useState('hide');
  const pages = {
    Home: '/', 
    About: '/About'
  };
  const { pathname } = useLocation();

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
      <div>
        <img src={vortexLogo} alt="vortex logo" />
        <h1 className='title nowrap'>Vortex Security</h1>
      </div>
      <nav className="header__nav hide">
        <ul className='header__ul none'>
          {Object.entries(pages).map(([page, to]) => {
            if (page === 'Home') {
              return (
                <Link to='/' key={page} className={pathname === to ? "active yes none" : 'none'}>
                  <li className="header__li" onClick={toggleNav}>{page}</li>
                </Link>
              );
            } else {
              return (
                <Link to={`/${page}`} key={page} className={pathname === to ? "active yes none" : 'none'}>
                  <li className="header__li" onClick={toggleNav}>{page}</li>
                </Link>
              );
            }
          })}
        </ul>
      </nav>
      <button className="header__btn active yes" onClick={toggleNav}>menu</button>
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
      <figure className="footer__figure">
        <img src={vortexLogo} alt="Vortex Logo" width="500" height="200" title="Vortex Security Concepts" />
      </figure>
      <ol className="footer__ul none">
        <li className="flex-grow">
          <h2 className="footer__h2 nowrap">Vortex Security</h2>
          <p className="footer__p">We boost a team of skilled and qualified professionals ready to install a robust security system, safeguarding your premises and ensuring. <br /> Experts install advanced security systems with the latest technology.</p>
        </li>
        <li>
          <ul className="none">
            <li><h3 className="footer__h3 nowrap">Useful Links</h3></li>
            {pages.map((page) => (
              <li key={page} className="footer__li nowrap">{page}</li>
            ))}
          </ul>
        </li>      
        <li>
          <ul className="none">
            <li><h3 className="footer__h3 nowrap">Services</h3></li>
            {services.map((service) => (
              <li key={service} className="footer__li nowrap">{service}</li>
            ))}
          </ul>
        </li>      
        <li>
          <ul className="none">
            <li><h3 className="footer__h3 nowrap">Support</h3></li>
            {supports.map((support) => (
              <li key={support} className="footer__li nowrap">{support}</li>
            ))}
          </ul>
        </li>      
      </ol>
      <p className="footer__P center">Copyrights &copy; {year} Vortex Security. All rights reserved.</p>
    </footer>
  )
}

