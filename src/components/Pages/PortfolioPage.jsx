import React from "react";
import WorkDayScheduler from "../images/Work-Day-Scheduler.png";
import CodingQuiz from "../images/Coding-Quiz.png";
import NoteTaker from "../images/Note-Taker.png";
import PasswordGen from "../images/Password-Generator.png";
import ReadMeGen from "../images/readmegen.png";
import SVGGen from "../images/svggen.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Work Day Scheduler',
    imgSrc: WorkDayScheduler,
    deployedLink: 'https://lucasfernandez59.github.io/Day_Scheduler/',
    githubRepo: 'https://github.com/LucasFernandez59/Day_Scheduler',
  },
  {
    title: 'Coding Quiz',
    imgSrc: CodingQuiz,
    deployedLink: 'https://lucasfernandez59.github.io/code_quiz/',
    githubRepo: 'https://github.com/LucasFernandez59/code_quiz',
  },
  {
    title: 'Note Taker',
    imgSrc: NoteTaker,
    deployedLink: 'https://notetaker-production-867e.up.railway.app/',
    githubRepo: 'https://github.com/LucasFernandez59/NoteTaker',
  },
  {
    title: 'Password Generator',
    imgSrc: PasswordGen,
    deployedLink: 'https://lucasfernandez59.github.io/password_generator/',
    githubRepo: 'https://github.com/LucasFernandez59/password_generator',
  },
  {
    title: 'ReadMe Generator',
    imgSrc: ReadMeGen,
    deployedLink: 'https://drive.google.com/file/d/1ShziNmkkoqXhI7PCHUmm7KHVRByO4yZk/view',
    githubRepo: 'https://github.com/LucasFernandez59/ReadMeGenerator',
  },
  {
    title: 'SVG Generator',
    imgSrc: SVGGen,
    deployedLink: 'https://drive.google.com/file/d/14AwkxLe8wC6q0R2g93I7Kjh77_l7qUUo/view',
    githubRepo: 'https://github.com/LucasFernandez59/SVGgen',
  },
];

const Portfolio = () => {
  return (
    <div className="container content mt-5">
      <Container>
        <h2 className="text-center">My Portfolio</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <Card className="card-custom">
                <Card.Img variant="top" src={project.imgSrc} alt={`Project ${index + 1}`} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button className="button-custom" variant="primary" href={project.deployedLink} target="_blank" rel="noreferrer">
                    View app
                  </Button>
                  <Button className="button-custom" variant="secondary" href={project.githubRepo} target="_blank" rel="noreferrer">
                    Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;