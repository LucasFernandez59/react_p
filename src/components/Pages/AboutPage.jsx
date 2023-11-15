import {Container, Row, Col, Card, Image} from 'react-bootstrap';
import aboutPhoto from "../images/dk1.jpg"

export default function About() {
    return (
      <div id="about" className="container container-color content mb-5">
        <Container className=''>
          <Row>
            <Col xs={12} md={4} className='d-flex justify-content-center align-items-center mb-md-0'>
              <Image src={aboutPhoto} rounded fluid className='about-photo' />
            </Col>
            <Col xs={12} md={8}>
              <Card.Body>
                <Card.Title>
                  About Me
                </Card.Title>
                <Card.Text>
                 I'm a gamer that likes to code
                </Card.Text>
                <Card.Text>
                 I like code! They're comfy and easy to wear!
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
          
      </div>
    );
  }