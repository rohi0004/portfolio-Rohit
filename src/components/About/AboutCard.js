import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Kumar </span>
            from <span className="purple"> Gopalganj (Bihar), India.</span>
            <br />
             I am currently Pre Final Year Student at IIIT kalyani West Bengal
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Cricket
          </li>
          <li className="about-activity">
            <ImPointRight /> Watching Movies
          </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Code with passion, craft with precision, and innovate with purpose."{" "}
          </p>
          <footer className="blockquote-footer">Rohit Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
