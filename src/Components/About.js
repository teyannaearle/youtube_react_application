import React from "react";
import "./About.css";
import Angelina from "../Assets/Angelina.jpeg";
import Teyanna from "../Assets/Teyanna.jpg";

function About(props) {
  const { invalid } = props;

  return (
    <div className="about-page">
      {invalid ? <h3 className="error">Invalid search. Please try again.</h3> : null }
      <div className="about Project">
        <h3>React App with Youtube API</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="about Angelina">
        <img src={Angelina} alt="Angelina" />
       <div>
         <p>
            {" "}
            I am a highly motivated, responsible, and detail-oriented Full Stack
            Software Developer who is passionate about creating social change
            and making a difference through innovative, powerful technologies. I
            am currently enrolled at Pursuit, an intensive 12 - month software
            engineering fellowship with a 9% acceptance rate. A life-long
            learner, I am excited to master coding which to me is an art of
            combining creativity and logic.
          </p>
          <p>
            Passionate about utilizing programming and technology to
            problem-solve and leave a positive long-lasting impact, I want to
            create thoughtful quality features that will improve productivity,
            bring people together, and encourage growth.
          </p>
          <p>
            I am looking to join a forward-thinking company where I can utilize
            my strong problem solving, communication, and critical thinking
            skills in order to help create thoughtful, intelligent solutions.
          </p>
          <p>
            When I am not learning to code, I enjoy solving logical puzzles,
            reading, and experiencing the diverse languages, cultures, and
            cuisines of the world.
          </p>
          <a href="https://github.com/angelinaebreo"><svg
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
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg></a>
       </div>
          
        
      </div>
      <div className="about Teyanna">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={Teyanna} alt="Teyanna" />
      </div>
    </div>
  );
}

export default About;
