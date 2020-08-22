import React from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function About() {
    return (
        <Container id="about-me-container">
            <Row>
                <Col><Card id="about-me" style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="/ramsayg.jpg" />
                    <Card.Body>
                        <Card.Title>About Me</Card.Title>
                        <Card.Text>
                            USAF veteran with 15 years of experience in operations/program management. Aspiring full-stack developer
                            and entrepreneur. Excellent team member able to develop positive
                            relationships in the workplace. Proven team leader capable of maximizing productivity and meeting
                            deadlines. Ability to learn quickly and work independently. Active DoD Secret security clearance.
    </Card.Text>

                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Contact Information</Card.Title>
                        <br />
                        <Card.Subtitle className="mb-2 text-muted">Location</Card.Subtitle>
                        <Card.Text>Mount Laurel, New Jersey</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
                        <Card.Text>(856) 203-2107</Card.Text>

                        <Card.Subtitle className="mb-2 text-muted">Email Address</Card.Subtitle>
                        <Card.Text>ramsaygonzalez@outlook.com</Card.Text>
                        <br />
                        <Card.Link href="https://github.com/ramsaygonzalez"><i class="fa fa-github"
                        ></i></Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/ramsay-gonzalez-35a31ba9/?originalSubdomain=af"><i class="fa fa-linkedin-square"
                        ></i></Card.Link>
                        <Card.Link href="https://github.com/ramsaygonzalez/ReactPortfolio/blob/master/src/components/assets/Gonzalez%2C%20Ramsay%20Resume.pdf"><i class="fa fa-file"
                        ></i></Card.Link>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container >
    );
}

export default About;