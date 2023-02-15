import React from 'react'
import { Fade } from 'react-reveal'
import Tilt from 'react-parallax-tilt';
import '../styles.scss'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'

function Projects() {
  return (
    <section id="projects">
    <div className="container">
      <div className="project-wrapper">
        <Fade bottom>
        <h2 className="section-title dark-blue-text">Projects</h2>
        </Fade>
       
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="project-wrapper__text load-hidden">
            <Fade left>
              <h3 className="project-wrapper__text-title">Face Detection Site</h3>
              <div>
                <p className="mb-4">
                  <b>Key Skills</b>: ReactJS and face-api.js <br/>
                  Utilized ReactJS to build a user friendly UI to interact with the website. It takes a URL 
                  corresponding to an image and checks for faces in the image and highlights the faces and 
                  predicts expressions.                           g
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href="#!">
                See Live
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn text-color-main"
                href="https://github.com/the-predator/facerecognition" >
                Source Code
              </a>
              </Fade>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="project-wrapper__image load-hidden">
              <a rel="noreferrer" href="#!" target="_blank">
               <Fade right>
               <Tilt glareEnable={true} tiltMaxAngleX={3} 
                  tiltMaxAngleY={3} perspective={1000} 
                   glareColor={"rgb(255,0,0)"}>
               <div>
                  <img
                    alt='Project1'
                    className="img-fluid"
                    src={project1}
                  />
                </div>
               </Tilt>
                </Fade>
              </a>
            </div>
          </div>
        </div>
        <Fade left>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="project-wrapper__text load-hidden">
              <h3 className="project-wrapper__text-title">Weather Forecast </h3>
              <div>
                <p className="mb-4">
                  <b>Key Skills: </b> ReactJS and openweathermap API
                  Utilized ReactJS in order to create a user friendly UI. The site fetchs current weather 
                  as well as the temperature of next 7 days and shows it to the user.
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href="https://the-predator.github.io/weatherforecast/"
              >
                See Live
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn text-color-main"
                href="https://github.com/the-predator/weatherforecast"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="project-wrapper__image load-hidden">
              <a rel="noreferrer" href="#!" target="_blank">
              <Tilt glareEnable={true} tiltMaxAngleX={3} 
                  tiltMaxAngleY={3} perspective={1000} 
                   glareColor={"rgb(255,0,0)"}>
                  <div>
                  <img
                  alt='Project2'
                    className="img-fluid"
                    src={project2}
                  />
                </div>
                </Tilt>
              </a>
            </div>
          </div>
        </div>
        </Fade>
        <Fade bottom>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="project-wrapper__text load-hidden">
              <h3 className="project-wrapper__text-title">Snake Game</h3>
              <div>
                <p className="mb-4">
                  <b>Key Skills : </b> HTML, CSS, JavaScipt and DOM <br/>
                  Used HTMl and CSS to create a UI. And used the concepts of DOM to make this site.
                  It is a basic chess game purely written of JavaScipt.
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href="https://the-predator.github.io/snake/"
              >
                See Live
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn text-color-main"
                href="https://github.com/the-predator/snake"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="project-wrapper__image load-hidden">
              <a rel="noreferrer" href="#!" target="_blank">
              <Tilt glareEnable={true} tiltMaxAngleX={3} 
                  tiltMaxAngleY={3} perspective={1000} 
                   glareColor={"rgb(255,0,0)"}>
                <div>
                  <img
                    alt='Project3'
                    className="img-fluid"
                    src={project3}
                  />
                </div>
                </Tilt>
              </a>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  </section>
  )
}

export default Projects
