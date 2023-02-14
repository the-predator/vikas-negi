import React from 'react'

function Contact() {
  return (
    <section id="contact">
    <div className="container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrapper load-hidden">
        <p className="contact-wrapper__text">negivikas201@gmail.com</p>
        <a
          rel="noreferrer"
          target="_blank"
          className="cta-btn cta-btn--resume"
          href="mailto:negivikas201@gmail.com">Call to Action</a>
      </div>
    </div>
  </section>
  )
}

export default Contact
