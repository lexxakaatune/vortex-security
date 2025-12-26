import { useState } from 'react';

function ContactForm() {
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
    <form onSubmit={handleSubmit} className="contact__form">
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
      <p className="contact__p flex-grow">
        <label htmlFor="msg">Message</label>
        <textarea 
          id="msg" 
          placeholder="Type your message here..." 
          onChange={handleChange}
          required
        />
      </p>
      <button className="btn">Send Message</button>
    </form>
  );
}

export default ContactForm;
