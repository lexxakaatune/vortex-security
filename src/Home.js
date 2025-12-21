import { useState } from "react";

const Home = () => {
  const [image, setImage] = useState({
      imageSrc: 'img/vortexhomepagebg.100x750.jpg',
      imageAlt: 'Mr.Robert Davis photo',
      name: 'Mr.Robert Davis',
      work: 'Field Supervisor'
    });
  const images = [
    {
      imageSrc: 'img/vortexhomepagebg.100x750.jpg',
      imageAlt: 'Mr.Robert Davis photo',
      name: 'Mr.Robert Davis',
      work: 'Field Supervisor'
    },
    {
      imageSrc: 'img/servicesherobg.100x750.jpg',
      imageAlt: 'another photo',
      name: 'Mr. another',
      work: 'another Supervisor'
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
          <button className="btn">More About Us</button>
        </div>

        <figure className="hero__figure">
          <img src={image.imageSrc} alt={image.imageAlt} />
          <figcaption className="hero__figcaption">
            <div>
              <strong>{image.name}</strong><br/>
              <small>{image.work}</small> 
            </div>
            <button className="btn" onClick={toggleImg}>&gt;</button>
          </figcaption>          
        </figure>
      </section>
      <main className="main">
        <section className="about">
          <figure className="about__figure">
            <img src="img/servicesherobg.100x750.jpg" alt="picture" />
            <figcaption className="about__figcaption">
              <span className="nowrap"><b>25</b></span>
              <small className="nowrap">years of</small>
              <small className="nowrap">experience</small> 
            </figcaption>
            <img src="img/servicesherobg.100x750.jpg" alt="picture" />
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
            <a href="#">View More Details</a>
          </aside>
        </section>

        <section className="why"> 
          <div className="why__div">
            <h2 className="h2 nowrap">Why Choose Us</h2>
            <p className="big-text">Choose Smart Security with us</p>
          </div>
          <fieldset className="why__fieldset">
            <legend>icon</legend>
            <h3>Customized Security</h3>
            <p>We cudtomize security solutions to meet your unique needs be it event security, property protection, or ongoing surveillance</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend>icon</legend>
            <h3>Cutting-Edge Technology</h3>
            <p>We integrate edge security technology, from advancedsurveillance systems to communication tools, enhancing the effectiveness of our services.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend>icon</legend>
            <h3>Experienced Guards</h3>
            <p>We priortize excellence in training to ensure our securtiy personnel are well-equipped to handle diverse challenges with expertise and experience.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend>icon</legend>
            <h3>24/7 Monitoring and Support</h3>
            <p>Security is not confined to a limit schedule, with our around o'clock monitoring and support your property is safeguarded at all times offering you peace of mind.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend>icon</legend>
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
              <img src="img/about.jpg" alt="image alt" />
              <figcaption className="service__figcaption">
                <h3>Personal Protection</h3>
                <small>Ensure safety with our discreet personal protection, delivered by experts.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src="img/about.jpg" alt="image alt" />
              <figcaption className="service__figcaption">
                <h3>Commercial Security</h3>
                <small>Enhance business security with our comprehensive services.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src="img/about.jpg" alt="image alt" />
              <figcaption className="service__figcaption">
                <h3>Object Protection</h3>
                <small>Meticulous protection for your valuable assets.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src="img/about.jpg" alt="image alt" />
              <figcaption className="service__figcaption">
                <h3>Security Consulting</h3>
                <small>Consult with experts for strategic security guidance.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src="img/about.jpg" alt="image alt" />
              <figcaption className="service__figcaption">
                <h3>Transport Security</h3>
                <small>Secure transportation assets with efficient logistics.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src="img/about.jpg" alt="image alt" />
              <figcaption className="service__figcaption">
                <h3>CCTV Monitoring</h3>
                <small>Boost surveillance with <bold>CCTV</bold> for proactive security.</small>
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

        <section className="contact">
          <div className="contact__div">
            <form action="" className="contact__form">
              <p className="contact__p">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Brian Clark" required/>
              </p>
              <p className="contact__p">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="example@yourgmail.com" required/>
              </p>
              <p className="contact__p">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="(123) 456 - 7890" required/>
              </p>
              <p className="contact__p">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="BRIX Agency" required/>
              </p>
              <p className="contact__p flex-grow">
                <label htmlFor="msg">Message</label>
                <textarea id="msg" placeholder="Type your message here..." required/>
              </p>
              <button className="btn">Send Message</button>
            </form>
          </div>

          <figure className="contact__figure"></figure>
        </section>

      </main>
    </>
  )
}

export default Home;
