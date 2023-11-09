import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Highly motivated Computer Science student with a specialization in
              web development, actively seeking part-time or full-time
              opportunities in <b className="purple">MERN Stack</b> or{" "}
              <b className="purple">Python</b> to apply and expand my skills
              while building practical experience.
              <br />
              <br />I am proficient in <b className="purple">
                MERN Stack
              </b>, <b className="purple">ReactJs</b>, and{" "}
              <b className="purple">Python</b>, enabling me to develop robust
              applications. With a strong command of these languages, I am
              well-equipped to create efficient and immersive web experiences.
              &nbsp;
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and &nbsp;
              <i>
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like &nbsp;
              <i>
                <b className="purple">Next.js, Vue.js, and Angular.js</b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "20px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mirajsankdecha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mirajsankdecha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/miraj-sankdecha-858445253"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/mirajgajjar731?igshid=MzNlNGNkZWQ4Mg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
