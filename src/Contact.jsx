import React, { useState } from "react";
import { FiMapPin, FiMail } from "react-icons/fi";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="left-section">
        <p className="contact-title">CONTACT US</p>
        <h2>
          Let’s talk about <br />
          <span>Love to hear from you!</span>
        </h2>

        <div className="info-block">
          <div className="info-item">
            <FiMapPin className="icon" />
            <div>
              <p><strong>Our Location</strong></p>
              <p>Mumbai - 400018, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-item">
            <FiMail className="icon" />
            <div>
              <p><strong>How Can We Help?</strong></p>
              <p>
                <a href="mailto:contact@prodigyinfotech.dev">
                  contact@prodigyinfotech.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right section - Contact form */}
      <div className="right-section">
        <h3>Send us a Message</h3>

        <form
          action="https://formsubmit.co/hemantbhavsar8718@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="from_name"
            placeholder="Full Name*"
            required
            value={formData.from_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email*"
            required
            value={formData.from_email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone*"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message*"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
