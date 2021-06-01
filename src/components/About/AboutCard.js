import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Narendra ML </span>
            from <span className="purple"> Bangalore Karnataka, India.</span>
            <br />I am pursuing my Computer Science Engineering Course in{" "}
            <span className="purple">BMS Institute Of Technology</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#e7ff10" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer style={{ color: "#e7ff10" }}>-Narendra Ml</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
