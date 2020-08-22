import React from "react";
import { Container, Row, Col, Jumbotron, Card } from 'react-bootstrap';

function Portfolio() {

    return (
        <Container id="portfolio-container">
            <br />
            <Row>
                <Col md={12}><Jumbotron fluid>
                    <Container>
                        <h1>Featured Projects</h1>
                        <p>
                            Below are some of the assignments completed at UPENN Fullstack Development Coding
                            Bootcamp.
    </p>
                    </Container>
                </Jumbotron></Col>

            </Row>
            <Row>
                <Col sm><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="Project1.PNG" />
                    <Card.Body>
                        <Card.Title>Project 1: Movie Me</Card.Title>
                        <Card.Text>
                            Search for your favorite movies! Get movie details and trailers.
    </Card.Text>
                        <Card.Link href="https://ravalash.github.io/MovieMe/"><i class="fa fa-laptop-code"></i></Card.Link>
                        <Card.Link href="https://github.com/ramsaygonzalez/MovieMe"><i class="fa fa-github"
                        ></i></Card.Link>
                    </Card.Body>
                </Card></Col>
                <Col sm><Col sm><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="Project2.PNG" />
                    <Card.Body>
                        <Card.Title>Project 2: Quiz Generator</Card.Title>
                        <Card.Text>
                            Search for your favorite movies! Get movie details and trailers.
    </Card.Text>
                        <Card.Link href="https://project-2-quiz-generator.herokuapp.com/"><i class="fa fa-laptop-code"></i></Card.Link>
                        <Card.Link href="https://github.com/ramsaygonzalez/project-2-quiz-generator"><i class="fa fa-github"
                        ></i></Card.Link>
                    </Card.Body>
                </Card></Col></Col>
                <Col sm><Col sm><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="CodeQuiz.PNG" />
                    <Card.Body>
                        <Card.Title>HW 4: Code Quiz</Card.Title>
                        <Card.Text>
                            Search for your favorite movies! Get movie details and trailers.
    </Card.Text>
                        <Card.Link href="https://ramsaygonzalez.github.io/codequiz/"><i class="fa fa-laptop-code"></i></Card.Link>
                        <Card.Link href="https://github.com/ramsaygonzalez/codequiz"><i class="fa fa-github"
                        ></i></Card.Link>
                    </Card.Body>
                </Card></Col></Col>
            </Row>
            <br />
            <Row>
                <Col sm><Col sm><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="WeatherDashboard.PNG" />
                    <Card.Body>
                        <Card.Title>HW 6: Weather Dashboard</Card.Title>
                        <Card.Text>
                            Weather dashboard that runs in the browser, featuring dynamically
                            updated HTML and CSS from the openweathermap api.
    </Card.Text>
                        <Card.Link href="https://ramsaygonzalez.github.io/WeatherDashboard/"><i class="fa fa-laptop-code"></i></Card.Link>
                        <Card.Link href="https://github.com/ramsaygonzalez/WeatherDashboard"><i class="fa fa-github"
                        ></i></Card.Link>
                    </Card.Body>
                </Card></Col></Col>
                <Col sm><Col sm><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="NoteTaker.PNG" />
                    <Card.Body>
                        <Card.Title>HW 11: Note Taker</Card.Title>
                        <Card.Text>
                            Application uses express backend to save, retrieve and delete note data from
                            a JSON
                            file.
    </Card.Text>
                        <Card.Link href="https://hw11-note-taker.herokuapp.com/"><i class="fa fa-laptop-code"></i></Card.Link>
                        <Card.Link href="https://github.com/ramsaygonzalez/NoteTaker"><i class="fa fa-github"
                        ></i></Card.Link>
                    </Card.Body>
                </Card></Col></Col>
                <Col sm><Col sm><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="BurgerApp.PNG" />
                    <Card.Body>
                        <Card.Title>HW 13: Eat-Da-Burger!</Card.Title>
                        <Card.Text>
                            Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.
    </Card.Text>
                        <Card.Link href="https://morning-sierra-39351.herokuapp.com/"><i class="fa fa-laptop-code"></i></Card.Link>
                        <Card.Link href="https://github.com/ramsaygonzalez/BurgerApp"><i class="fa fa-github"
                        ></i></Card.Link>
                    </Card.Body>
                </Card></Col></Col>
            </Row>
        </Container >

    );
}

export default Portfolio;