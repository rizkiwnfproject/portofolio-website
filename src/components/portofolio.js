import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PortofolioCard } from "./portofoliocard";
import petcare from "../assets/images/projects/petcare.png";
import firstcrud from "../assets/images/projects/first-crud.png";
import library from "../assets/images/projects/library.png";
import hairm from "../assets/images/projects/hairm.png";
import test from "../assets/images/projects/test.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import html from "../assets/images/skills/html.png";
import css from "../assets/images/skills/css.png";
import js from "../assets/images/skills/js.png";
import php from "../assets/images/skills/php.png";
import boostraps from "../assets/images/skills/bootstrap.png";
import tailwind from "../assets/images/skills/tailwind.png";
import laravel from "../assets/images/skills/laravel.png";
import codeigniner from "../assets/images/skills/CI.png";
import reactjs from "../assets/images/skills/react.png";
import c from "../assets/images/skills/C.png";
import canva from "../assets/images/skills/canva.png";
import figma from "../assets/images/skills/figma.png";
import git from "../assets/images/skills/git.png";
import vscode from "../assets/images/skills/vscode.png";
import postman from "../assets/images/skills/postman.png";
import restapi from "../assets/images/skills/rest-api-icon.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { SkillsCard } from "./skillscard";

export const Portofolio = () => {

    const projects = [
        {
          title: "Petcare Website",
          description: "Build website on first semester using HTML, CSS, JS, Bootstrap",
          imgUrl: petcare,
          gitUrl: "https://github.com/",
        },
        {
          title: "Fisrt CRUD",
          description: "Build website on second semester using HTML, CSS, JS, Bootstrap, PHP",
          imgUrl: firstcrud,
          gitUrl: "https://github.com/rizkiwnf/projekcrudsmt2",
        },
        {
          title: "Library CRUD",
          description: "Build website on second semester using HTML, CSS, JS, Bootstrap, PHP, Docker",
          imgUrl: library,
          gitUrl: "https://github.com/rizkiwnf/library-smt2",
        },
        {
          title: "HairM Website",
          description: "project in a group that displays information about HairM the mobile application",
          imgUrl: hairm,
          gitUrl: "https://gitlab.com/habil0105/hairm",
        },
        {
          title: "Technical Test Qbit",
          description: "Built responsive website using ReactJS and Tailwindcss",
          imgUrl: test,
          gitUrl: "https://rizkiwnf.github.io/test-qbit-fullstack/",
        },
      ];

    const skills = [
      {
        title: "HTML",
        description: "Intermediate",
        imgUrl: html  ,
      },
      {
        title: "CSS",
        description: "Intermediate",
        imgUrl: css  ,
      },
      {
        title: "JavaScript",
        description: "Beginner",
        imgUrl: js  ,
      },
      {
        title: "PHP",
        description: "Beginner",
        imgUrl: php  ,
      },
      {
        title: "Bootstrap",
        description: "Intermediate",
        imgUrl: boostraps  ,
      },
      {
        title: "Tailwind",
        description: "Intermediate",
        imgUrl: tailwind  ,
      },
      {
        title: "Laravel",
        description: "Beginner",
        imgUrl: laravel  ,
      },
      {
        title: "CodeIgniter",
        description: "Beginner",
        imgUrl: codeigniner  ,
      },
      {
        title: "ReactJS",
        description: "Beginner",
        imgUrl: reactjs  ,
      },
      {
        title: "C",
        description: "Beginner",
        imgUrl: c  ,
      },
      {
        title: "Canva",
        description: "Intermediate",
        imgUrl: canva  ,
      },
      {
        title: "Figma",
        description: "Beginner",
        imgUrl: figma  ,
      },
      {
        title: "Git",
        description: "Intermediate",
        imgUrl: git  ,
      },
      {
        title: "VSCode",
        description: "Intermediate",
        imgUrl: vscode  ,
      },
      {
        title: "Postman",
        description: "Intermediate",
        imgUrl: postman  ,
      },
      {
        title: "Rest API",
        description: "Intermediate",
        imgUrl: restapi  ,
      },
    ]

  return (
    <section className="portofolio" id="portofolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The following below are some of the skills that I have mastered and also some of the projects that have been made during lectures</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Skills</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>The following below are some of the projects that have been made during lectures</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <PortofolioCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>The following below are some of the skills that I have mastered, learned, and are currently learning</p>
                      <Row>
                        {
                          skills.map((skill, index) => {
                            return (
                              <SkillsCard
                                key={index}
                                {...skill}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}