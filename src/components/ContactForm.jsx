import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

export function ContactForm({ position }) {
  const [state, setState] = useState('false')  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    message: ""
  });

  useEffect( () => {
    setState(position)
  }, [position])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "2348189178733";
    const text = `Hello my name is ${formData.name}. My email is ${formData.email}. My agency is ${formData.agency} Message: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className={(state === 'true') ? "home contact__form" : "contact__form"}>
      <fieldset className='contact__fieldset'>
        <legend className='active yes bold'>Contact Us</legend>
        <p className="contact__p"> 
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name" 
            placeholder="Brian Clark" 
            onChange={handleChange}
            required
          />
        </p>
        <p className="contact__p">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="example@yourgmail.com" 
            onChange={handleChange}
            required
          />
        </p>
        <p className="contact__p">
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="(123) 456 - 7890" 
            onChange={handleChange}
            required
            />
        </p>
        <p className="contact__p">
          <label htmlFor="company">Company</label>
          <input 
            type="text" 
            id="company" 
            placeholder="BRIX Agency" 
            onChange={handleChange}
            required
          />
        </p>
        <p className='flex-grow'>
          <label htmlFor="msg">Message</label>
          <textarea 
            id="msg" 
            placeholder="Type your message here..." 
            onChange={handleChange}
            required
          />
        </p>
      </fieldset>
      <button className="btn active yes">Send Message</button>
    </form>
  );
}

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "2348189178733";
    const text = `Hello my name is ${formData.name}. My email is ${formData.email}. My agency is ${formData.agency} Message: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <form className='contact__form feedback' onSubmit={handleSubmit}>
      <fieldset className='contact__fieldset'>
        <legend className='active yes bold'>Give Us feedback on anything</legend>
        <p className="contact__p"> 
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name" 
            placeholder="Brian Clark" 
            onChange={handleChange}
            required
          />
        </p>
        <p className="contact__p">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="example@yourgmail.com" 
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="feedbackImg">Image of issue</label>
          <input 
            type="file" 
            id="feedbackImg"     
            onChange={handleChange}
            required
          />
        </p>
        <p className="flex-grow">
          <label htmlFor="desc">Description</label>
          <textarea 
            id="desc" 
            placeholder="Description of your issue" 
            onChange={handleChange}
            required
          />
        </p>
      </fieldset>
      <button className="btn active yes">Send Feedback</button>
    </form>
  );
}

export function Socials() {
  return (
    <ul className="socialUl none">
      <a className='active yes' href="https://facebook.com">
        <li className="socialLi">
          <FaFacebook />
        </li>
      </a>
      <a className='active yes' href="https://instagram.com">
        <li className="socialLi">
          <FaInstagram />
        </li>
      </a>
      <a className='active yes' href="https://tiktok.com">
        <li className="socialLi">
          <FaTiktok />
        </li>
      </a>
      <a className='active yes' href="https://twitter.com">
        <li className="socialLi">
          <FaTwitter />
        </li>
      </a>
    </ul>
  );
}