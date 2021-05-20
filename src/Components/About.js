import React from "react";
import "./About.css";
import Angelina from "../Assets/Angelina.jpeg";
import Teyanna from "../Assets/Teyanna.jpg";
import { useLocation } from "react-router-dom";
import GrabLocation from "./GrabLocation";

function About(props) {
  const point = useLocation();
  const { getLocation } = props;

  GrabLocation(getLocation, point);

  return (
    <div className="about-page">
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
        <p>
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
        </p>
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
