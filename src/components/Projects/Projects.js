import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ height: "95vh" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <div
            style={{
              width: "100%",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <h5 style={{ fontWeight: "bold", color: "white" }}>
              <strong className="purple">Projects </strong> Section is under{" "}
              <strong className="purple">Development</strong>.
            </h5>
          </div>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <h5 style={{ fontWeight: "bold", color: "white" }}>
              <strong className="purple">Blogs </strong> Section is under{" "}
              <strong className="purple">Development</strong>.
            </h5>
          </div>
          {/* <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
