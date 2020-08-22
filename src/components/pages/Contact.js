import React from "react";
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';

function Contact() {

    return (

        <Container fluid id="contact-form">
            <br />
            <Row>
                <Col><Card>
                    <Card.Body><Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control placeholder="How can I help you?" />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form></Card.Body>
                </Card></Col>
            </Row>
        </Container>

    );
}

export default Contact;