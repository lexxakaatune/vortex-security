import { useState } from "react";
import { FaShieldAlt, FaMicrochip, FaUserTie, FaHeadset, FaComments} from "react-icons/fa";
import { Link } from "react-router-dom";
import {hero2, hero1, aboutBig, cctv} from "../assets/image";
import {ContactForm} from "../components/ContactForm";

const Home = () => {
  const [image, setImage] = useState({
    imageSrc: hero1,
    imageAlt: 'Mr.Robert Davis photo',
    name: 'Mr.Robert Davis',
    work: 'Field Supervisor'
  });
  const images = [
    {
      imageSrc: hero2,
      imageAlt: 'Mr.Robert Davis photo',
      name: 'Mr. another',
      work: 'another Supervisor'
    },
    {
      imageSrc: hero1,
      imageAlt: 'another photo',
      name: 'Mr.Robert Davis',
      work: 'Field Supervisor'
    }
  ]

  const toggleImg = () => {
    if (image.imageSrc === images[0].imageSrc) {
      setImage(images[1])      
    } else if (image.imageSrc === images[1].imageSrc) {
      setImage(images[0])
    }    
  }

  
  return (
    <>
      <section className="hero">
        <div className="hero__div">
          <span className="hero__span nowrap">Trusted Security Solutions</span>
          <h2>VORTEX IS YOUR SAFETY PARTNER</h2>
          <p><strong>VORTEX</strong> Security for unparalleled safety. Our expert team and advanced technology stand as your vigilant partner, ensuring a secure environment. Trust us to safeguard what matters most to you.</p>
          <a className="btn none active yes" href="#contact">Contact Us Now</a>
        </div>

        <figure className="hero__figure">
          <img src={image.imageSrc} alt={image.imageAlt} />
          <figcaption className="hero__figcaption">
            <div>
              <strong>{image.name}</strong><br/>
              <small>{image.work}</small> 
            </div>
            <button className="btn active yes" onClick={toggleImg}>&gt;</button>
          </figcaption>          
        </figure>
      </section>
      <main className="main">
        <section className="about">
          <figure className="about__figure">
            <img src={aboutBig} alt="security guard" />
            <figcaption className="about__figcaption">
              <span className="nowrap"><b>25</b></span>
              <small className="nowrap">years of</small>
              <small className="nowrap">experience</small> 
            </figcaption>
            <img src={cctv} alt="security guard" />
          </figure>
          <aside className="about__aside">
            <h2 className="h2">ABOUT US</h2>
            <p className="about__p big-text">
              Your protection is our top priority.
            </p>
            <p className="about__p">
              At <strong>Vortex Security Concepts</strong>, our core values-integrity, excellence, commitment, innovation-guide everything we do. We are passionate about protecting what matters most to you and are committed to providing customized solutions tailored to your unique security needs.
            </p>
            <ul className="about__ul none">
              <li className="about__li">
                <strong>500+</strong><br />
                <small>Worldwide Clients</small>
              </li>
              <li className="about__li">
                <strong>124+</strong><br />
                <small>Professional Teams</small>
              </li>
              <li className="about__li">
                <strong>155+</strong><br />
                <small>Total Awards</small>
              </li>
            </ul>
            <Link to="/about">View More Details</Link>
          </aside>
        </section>

        <section className="why"> 
          <div className="why__div">
            <h2 className="h2 nowrap">Why Choose Us</h2>
            <p className="big-text">Choose Smart Security with us</p>
          </div>
          <fieldset className="why__fieldset">
            <legend><FaShieldAlt /></legend>
            <h3>Customized Security</h3>
            <p>We cudtomize security solutions to meet your unique needs be it event security, property protection, or ongoing surveillance</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend><FaMicrochip /></legend>
            <h3>Cutting-Edge Technology</h3>
            <p>We integrate edge security technology, from advancedsurveillance systems to communication tools, enhancing the effectiveness of our services.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend><FaUserTie /></legend>
            <h3>Experienced Guards</h3>
            <p>We priortize excellence in training to ensure our securtiy personnel are well-equipped to handle diverse challenges with expertise and experience.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend><FaHeadset /></legend>
            <h3>24/7 Monitoring and Support</h3>
            <p>Security is not confined to a limit schedule, with our around o'clock monitoring and support your property is safeguarded at all times offering you peace of mind.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend><FaComments /></legend>
            <h3>Transparent Communication</h3>
            <p>Open and transparent communication is the foundation of our client relationships. We keep you inform about the status of your security a strong &amp; trust partnership.</p>
          </fieldset>
        </section>

        <section className="service">
          <h2 className="h2">Our Services</h2>
          <div className="service__div">
            <p className="big-text">Guarding Your Safety <br /> At Every Moments</p>
            <p>Discover personalized security solutions, from manned guarding to advanced technology, tailored for diverse environments.</p>
          </div>

          <div className="service__div">
            <figure className="service__figure">
              <img src={aboutBig} alt="personal protection" />
              <figcaption className="service__figcaption">
                <h3>Personal Protection</h3>
                <small>Ensure safety with our discreet personal protection.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={aboutBig} alt="commercial security" />
              <figcaption className="service__figcaption">
                <h3>Commercial Security</h3>
                <small>Enhance business security with our comprehensive services.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={aboutBig} alt="Object protection" />
              <figcaption className="service__figcaption">
                <h3>Object Protection</h3>
                <small>Meticulous protection for your valuable assets.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={aboutBig} alt="security consulting" />
              <figcaption className="service__figcaption">
                <h3>Security Consulting</h3>
                <small>Consult with experts for strategic security guidance.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={aboutBig} alt="transport security" />
              <figcaption className="service__figcaption">
                <h3>Transport Security</h3>
                <small>Secure transportation assets with efficient logistics.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={cctv} alt="cctv monitoring" width="600" height="400"/>
              <figcaption className="service__figcaption">
                <h3>CCTV Monitoring</h3>
                <small>Boost surveillance with <strong>CCTV</strong> for proactive security.</small>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="trust">
          <h2 className="h2 center">Trust by top tier teams worldwide</h2>

          <ul className="trust__ul none">
            <li>Securitas</li>
            <li>GARDAWORLD</li>
            <li>ISRG-TEAM</li>
            <li>GARDAWORLD</li>
            <li>PROSEGUR</li>
            <li>DYNSORP</li>
          </ul>
        </section>

        <section id="contact" className="contact">
          <div className="home contact__div">
            <ContactForm position='true' />
          </div>

          <figure className="contact__figure"></figure>
        </section>

      </main>
    </>
  )
}

export default Home;