import { Link } from 'react-router-dom';
import { aboutBig, aboutSmall, safetyFirst, participation, radicalCustomer, firstPrinciples, explore, bearBull, mecha, roboHand } from '../assets/image';

const About = () => {
  return (
    <>
      <section className="about about__hero">
        <figure className="about__figure">
          <img src={aboutBig} alt="security" />
          <figcaption className="about__figcaption">
            <span className="nowrap"><b>25</b></span>
            <small className="nowrap">years of</small>
            <small className="nowrap">experience</small> 
          </figcaption>
          <img src={aboutSmall} alt="another" />
        </figure>
        <aside className="about__aside">
          <h2 className="h2">ABOUT US</h2>
          <p className="about__p big-text">
            Empower Your  Learning Journey Everyday
          </p>
          <p className="about__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique aperiam exercitationem rerum sapiente amet mollitia obcaecati eos itaque! Aliquam similique ut veniam hic deleniti porro explicabo laborum molestiae debitis.
          </p>
          <ul className="about__ul none">
            <li className="about__li">
              <strong>5k+</strong>
              <small>Online Classes</small>
            </li>
            <li className="about__li">
              <strong>7k+</strong>
              <small>Students each year</small>
            </li>
            <li className="about__li">
              <strong>24+</strong>
              <small>Award Winning</small>
            </li>
          </ul>
        </aside>
      </section>

      <main className="main">
        <h2 className="about__h2">At Vortex Security Concepts, our values are in service of our clients. We strive to uphold our values everday.</h2>
        <section className="card__section">
          <figure className="about__card">
            <figcaption className="bold">Safety first</figcaption>
            <figcaption>Vortex is a safety first organisation</figcaption>
            <img src={safetyFirst} alt="safety first" width="654" height="628" title="your safety with us is our priority"  loading="lazy"/>
          </figure>
          <figure className="about__card">
            <figcaption className="bold">Participation is power</figcaption>
            <figcaption>At Vortex the rich don't get a better deal</figcaption>
            <img src={participation} alt="Participation is power" width="988" height="1053" title="working together not just to earn but to create"  loading="lazy"/>
          </figure>
          <figure className="about__card">
            <figcaption className="bold">Radial clients focus</figcaption>
            <figcaption>We exist to make our clients happy</figcaption>
                <img src={radicalCustomer} alt="Radical clients" width="988" height="1100" title="if you are happy then we are happy" loading="lazy"/>
          </figure>
          <figure className="about__card">
            <figcaption className="bold">First-principles thinking</figcaption>
            <figcaption>we make bold bets and callenge the status quo</figcaption>
              <img src={firstPrinciples} alt="First-principles thinking" width="988" height="970" title="bold yet best choices behind for the future" loading="lazy"/>
          </figure>
        </section>

        <article className="about__article">
          <h2 className="about__h2">We believe the financial system should be built to work for everyone. That's why we create products that let you start investing at your own pace, on your own terms.</h2>

          <section className="about about__section">
            <figure>
              <img src={explore} alt="explore"/>
            </figure>
            <aside className="about__aside">
              <h3>More for our investors to learn</h3>
              <p>We're redefining what it means to learn about finance and that means education resources that are built for today. <a href="About.js">Learn More</a></p>
            </aside>
          </section>
          <section className="about about__section">
            <aside className="about__aside">
              <h3>More for our investors to learn</h3>
              <p>We're redefining what it means to learn about finance and that means education resources that are built for today. <Link to="/about">Learn More</Link></p> 
            </aside>
            <figure>
                <img src={bearBull} alt="bear and bulls"/>
            </figure>      
          </section>
          <section className="about about__section">
            <figure>
                <img src={mecha} alt="mecha"/>
            </figure>
            <aside className="about__aside">
              <h3>More for our investors to learn</h3>
              <p>We're redefining what it means to learn about finance and that means education resources that are built for today. <Link to="/about">Learn More</Link></p>
            </aside>
          </section>
          <section className="about about__section">
            <aside className="about__aside">
              <h3>More for our investors to learn</h3>
              <p>We're redefining what it means to learn about finance and that means education resources that are built for today. <Link to="/about">Learn More</Link></p>
            </aside>
            <figure>
              <img src={roboHand} alt="robo hand"/>
            </figure>
          </section>
        </article>

        <article className="founders">
          <h2 className="big-text center">Meet Our Founders</h2>
          <section className="about">
            <figure className="about__figure-profile"></figure>
            <aside className="about__aside">
              <h3>Joey Nzeanua Okocha</h3>
              <p>The Managing Director/CEO, is responsibly married with children. He holds a BSc in Accounting, an Advanced Diploma in Security, and a Diploma in Operations Management and Accounting. With 13 years of experience in civil service, 22 years as a Security Manager, and 3 years as an entrepreneur, he has built a robust professional background. His affiliations include memberships in MNPSA, MNIS, MASIS, and MNCPC.</p>
            </aside>
          </section>
          <section className="about">
            <figure className="about__figure-profile"></figure>
            <aside className="about__aside">
              <h3>John Amieghaye Daniel</h3>
              <p>The Director of Training, is responsibly married with children. He holds a Diploma in Health & Physical Education and an Advanced Diploma in Security Operations Management. With 10 years of experience in the Nigerian Police Force (NPF) as a Training Instructor and 15 years as an Industrial Health & Safety Practitioner specializing in Martial Arts & Foot Drills, John has also served as a Security Manager for 9 years. His professional affiliations include memberships in MNPSA and MSIN. </p>
            </aside>
          </section>
          <section className="about">
            <figure className="about__figure-profile"></figure>
            <aside className="about__aside">
              <h3>Capt. Sam Obi Ofili</h3>
              <p>The Director of Operations, is responsibly married with children. He holds multiple academic and professional certifications, and has received numerous national and international awards of honor. A retired Commissioner of Police, he is also an airplane pilot and a physicist.</p>
            </aside>
          </section>
          <section className="about">
            <figure className="about__figure-profile"></figure>
            <aside className="about__aside">
              <h3>Tony Emeka Osomade</h3>
              <p>The Director of Finance, Business Development & Administration, is responsibly married with children. He holds a BBA, MBA, and ACCA. Tony has 8 years of experience as an Accounting Officer in Nigeria and 23 years as a Financial, Cost, and Management Accountant in Europe.</p>
            </aside>
          </section>
        </article>
      </main>
    </>
  )
}

export default About;
