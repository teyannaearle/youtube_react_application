import React from "react";
import "./About.css";
import Angelina from "../Assets/Angelina.jpeg";
import Teyanna from "../Assets/Teyanna.jpg";

function About(props) {
  const { invalid } = props;

  return (
    <div className="about-page">
      {invalid ? (
        <h3 className="error">Invalid search. Please try again.</h3>
      ) : null}
      <div className="about Project">
        <h2 className="projectTitle">YouTube?</h2>
        <p>(*Psst! It's not the original.)</p>
        <br></br>
        <p>
          <strong>
            &emsp; Utilizing React, the YouTube API, and Firebase, Angelina
            Ebreo and Teyanna Earle, have brought to life their very own version
            of YouTube. You can use this site to search for and watch your
            favorite music videos, tutorials, funny cat videos and more! Don't
            forget to leave a comment before you go!
          </strong>
        </p>
        <p>
          <strong>Enjoy! </strong>
          <span role="img" aria-label="smiley">
            😁
          </span>
        </p>
        <p>See below for more information about the creators.</p>
      </div>
      <div className="about Angelina">
        <span className="collaborators">
          <p>
            <strong>Angelina Ebreo </strong>{" "}
            <a href="https://github.com/angelinaebreo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </p>
          <img src={Angelina} alt="Angelina" />
        </span>
        <div>
          <p>
            &emsp; I am a highly motivated, responsible, and detail-oriented
            Full Stack Software Developer who is passionate about creating
            social change and making a difference through innovative, powerful
            technologies. I am currently enrolled at Pursuit, an intensive 12 -
            month software engineering fellowship with a 9% acceptance rate. A
            life-long learner, I am excited to master coding which to me is an
            art of combining creativity and logic.
          </p>
          <br></br>
          <p>
            <strong>
              &emsp; Passionate about utilizing programming and technology to
              problem-solve and leave a positive long-lasting impact, I want to
              create thoughtful quality features that will improve productivity,
              bring people together, and encourage growth.
            </strong>
          </p>
          <br></br>
          <p>
            &emsp; I am looking to join a forward-thinking company where I can
            utilize my strong problem solving, communication, and critical
            thinking skills in order to help create thoughtful, intelligent
            solutions.
          </p>
          <p>
            When I am not learning to code, I enjoy solving logical puzzles,
            reading, and experiencing the diverse languages, cultures, and
            cuisines of the world.
          </p>
        </div>
      </div>
      <div className="about Teyanna">
        <p>
          &emsp; A Queens native, Full Stack Web Developer, who studied at an
          intensive 12-month, Google funded, software engineering fellowship
          called Pursuit, with a 9% acceptance rate.
          <br></br>
          <br></br>
          <strong>
            &emsp; I am a free-spirited individual who believes that all people
            are entitled to balance within their lives and the opportunity to
            live a life that makes them happy.
          </strong>
          <br></br>
          <br></br>
          &emsp;As a family-oriented person, it is important for me to create
          tools that will help adults and children alike in a multitude of ways.
          Whether it is assisting young children educationally, with the
          development of their morality and behavior towards others, nurturing
          the enhancement of their imagination; or connecting older kids and
          adults with the resources/tools that can help them de-stress, get
          organized and/or help improve their overall sense of wellness. The aim
          is to help whomever I can, in this way, because I care about my
          wellness, your wellness and everyone else's wellness too!
        </p>
        <span className="collaborators tey">
          <p>
            <strong>Teyanna Earle</strong>
            <a href="https://github.com/teyannaearle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </p>
          <img src={Teyanna} alt="Teyanna" />
        </span>
      </div>
    </div>
  );
}

export default About;
