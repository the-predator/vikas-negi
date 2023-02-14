import React from 'react'
import profile from './assets/profile.jpg'
import { Fade } from 'react-reveal'

function About() {
  return (
      <section id="about">
      <div className="container">
        <Fade left>
        <h2 className="section-title load-hidden">About me</h2>
        </Fade>
        <Fade left>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                alt="Profile"
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={profile}
                style={{borderRadius: "50%"}}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
               I am a Full Stack Web Developer specialized in MERN stack. Also have good 
               command in C++, DSA and problem solving.
              </p>
              <p className="about-wrapper__info-text">
                Critical thinking, working under pressure and problem solving are some of
                my key skills. In the free time I like to learn new things and imporve my skills.
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="assets/resume.pdf"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  )
}

export default About;
