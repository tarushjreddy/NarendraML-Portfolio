import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import imgpro from "./WhatsApp Image 2021-05-31 at 11.39.35 AM.jpeg";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row
          style={{
            color: "white",

            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imgpro}
            style={{ height: "180px", width: "220px", borderRadius: "10%" }}
          />
          <div
            style={{}}
            className="heading"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>
              {" "}
              Narendra<strong className="main-name"> ML</strong>
            </span>
            <p>
              <strong
                className="main-name"
                id="main_one"
                style={{ fontSize: "20px" }}
              >
                {" "}
                Computer Science Student | BMSIT
              </strong>
            </p>
          </div>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR MOBILE APP DEVELOPER [BMSIT]"
              date="September 2019 - October 2019"
              content={[
                "Worked as A junor mobile developer in a workshop conducted by BMSIT.",
              ]}
            />
            <h3 className="resume-title">Courses and Certificates</h3>
            <Resumecontent
              title="Java The Complete Guid."
              content={[
                "Got Certified for Successfully completing the course and developing 2 projects on Java",
              ]}
            />
            <Resumecontent
              title="SQL BASICS"
              content={[
                "Got Certified for Successfully completing the course and developing 1 projects on SQL DATABASE",
              ]}
            />
            <Resumecontent
              title="FUNDAMENTALS OF NETWORK SECURITY"
              content={[
                "Got Certified for Successfully completing the course and developing 1 projects on NETWORK SECURITY",
              ]}
            />
            <Resumecontent
              title="ADVANCED SQL"
              content={[
                "Got Certified for Successfully completing the course and developing 1 projects on ADVANCED SQL",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BMS Institute Of Technology"
              date="2018 - Present"
              content={[`CGPA: 7.0 (Till 5th Sem)`]}
            />
            <Resumecontent
              title="Genius National PU College , Kolar"
              date="2016 - 2018"
              content={["Precentage: 90%"]}
            />
            <Resumecontent
              title="Govt high School , Bethamangala "
              date="2006 - 2016"
              content={["Precentage: 90%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div
            target="_blank"
            style={{
              backgroundColor: "rgb(231, 255, 16)",
              color: "black",
              padding: "10px",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
