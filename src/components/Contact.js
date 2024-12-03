import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <form className="contact-form">
        <label className="contact-label">
          Name:
          <input type="text" className="contact-input" required />
        </label>
        <label className="contact-label">
          Email:
          <input type="email" className="contact-input" required />
        </label>
        <label className="contact-label">
          Message:
          <textarea className="contact-textarea" required></textarea>
        </label>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
