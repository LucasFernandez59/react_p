import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Resume() {
  const handleDownloadResume = () => {
    const resumeLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    window.open(resumeLink, '_blank');
  };

  return (
    <div className="container content mb-5">
      <Container className='mb-5'>
        <h2 className="text-center">My Resume</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="mb-4">
            <Card className='card-custom'>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h4>Personal Information</h4>
                    <p>
                      <strong>Name:</strong> Lucas Fernandez
                    </p>
                    <p>
                      <strong>Email:</strong> che.fernandez255@gmail.com
                    </p>
                  </Col>
                  <Col md={6}>
                    <h4>Summary</h4>
                    <p>
                     Example text for a resume
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={6}>
                    <h4>Education</h4>
                    <p>
                      <strong>Hillcrest Highschool</strong> - GED
                    </p>
                  </Col>
                  <Col md={6}>
                    <h4>Skills</h4>
                    <ul>
                      <li>JavaScript (React, Node.js)</li>
                      <li>HTML5, CSS3</li>
                      <li>Database Management (SQL, MongoDB)</li>
                      <li>Agile Development</li>
                    </ul>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={6}>
                    <h4>Experience</h4>
                    <p>
                      <strong>Software Engineer</strong> example text
                    </p>
                    <ul>
                      <li>example experience</li>
                      <li>example experience</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h4>Certifications</h4>
                    <p>
                      <strong>Certified Web Developer</strong> | UofU bootcamp | 2023
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <Button className='button-custom' variant="primary" onClick={handleDownloadResume}>
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}