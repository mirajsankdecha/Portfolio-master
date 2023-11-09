import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Caresure from "../../Assets/Projects/Caresure.png";
import Chatroom from "../../Assets/Projects/Chatroom.png";
import Certificate from "../../Assets/Projects/Certificate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatroom}
              isBlog={false}
              title="Chatroom"
              description="Chatroom is an innovative project developed in ReactJS, utilizing the Bootstrap CSS framework to create an intuitive and responsive chat application. This platform integrates Socket.IO for real-time communication, enabling users to join specific chat rooms using unique room IDs and exchange messages seamlessly."
              ghLink="https://github.com/mirajsankdecha/Chatroom-react"
              demoLink="https://chatroom-react-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Caresure}
              isBlog={false}
              title="Caresure Health Insurance"
              description="Caresure Health Insurance is a cutting-edge project developed by Miraj Sankdecha during his academic tenure at Atmiya University-Rajkot. This project showcases the power of the MERN stack, encompassing MongoDB, Express, React, and Node.js, to create an innovative health insurance platform. This comprehensive solution caters to both clients seeking health insurance coverage and administrators responsible for policy management and claims processing."
              ghLink="https://github.com/mirajsankdecha/Caresure-Health-Insurance"
              demoLink="https://caresure-health-insurance.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Certificate}
              isBlog={false}
              title="Certificate Generator"
              description="Certificate Generator is a user-friendly ReactJS application integrated with Bootstrap, facilitating the seamless creation of customized certificates. Users can upload their certificate templates, add names, and modify font styles, colors, sizes, and text formatting, ultimately downloading the personalized certificates with ease."
              ghLink="https://github.com/mirajsankdecha/Certificate-generator-react"
              demoLink="https://certificate-generator-react-six.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
