import {ContactForm, FeedbackForm, Socials} from "../components/ContactForm"

const Contact = () => {
  return (
    <>
      <section classsName="contactHeroSection">
        <h2 className="center">Reach out to Us</h2>
      </section>
      <main className="main">
        <div className="flex">
          <ContactForm /> 
          <FeedbackForm /> 
        </div>
        <Socials />

        <section className="location">
          <address>
            <h3>Our address</h3>
            145 railway tour, <br />
            brightwood kukunu,<br />
            London,USA.
          </address>
        </section>

        
      </main>
    </>
  )
}

export default Contact
