import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImFilePdf, ImUserPlus } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ textAlign: "left" }}>
          <p style={{ textAlign: "left" }}>
            Hello, my name is <b className="purple">Miraj Sankdecha</b> and I am
            a dedicated MERN stack developer and freelancer. Currently, I am in
            my 6th semester pursuing a BCA degree at Atmiya University.
          </p>
          <p style={{ textAlign: "left" }}>
            During my academic journey, I have successfully completed several
            projects utilizing the MERN stack and React.js. Furthermore, I
            gained invaluable practical experience through a rigorous 6-month
            internship at Imbuesoft LLP, where I immersed myself in various
            facets of the MERN stack, including proficiency in tools such as
            Postman, Git, and GitHub. My experience extends to working with
            three prominent CSS frameworks, namely Ant Design, Bootstrap, and
            Tailwind CSS.
          </p>
          <p style={{ textAlign: "left" }}>
            I take pride in my ability to craft and design intricate components,
            alongside my proficiency in developing APIs. As a result of my
            experiences and learning, I am now fully prepared and eager to
            contribute my skills and knowledge to a full-time position.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 25 }}
          >
            <Button
              variant="primary"
              style={{ width: 200, marginRight: 15, paddingTop: 10 }}
              href="https://drive.google.com/file/d/1HO9p2HsdqrXpN-08T3BGXHhwezY6YALH/view?usp=sharing"
              target="_blank"
            >
              <ImFilePdf style={{ marginRight: 10 }} />
              Resume
            </Button>
            <Button
              variant="success"
              style={{ width: 200, paddingTop: 10 }}
              href="https://www.linkedin.com/in/mirajsankdecha"
              target="_blank"
            >
              <ImUserPlus style={{ marginRight: 10 }} />
              Hire Me
            </Button>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
