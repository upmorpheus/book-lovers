import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Management.scss';

const Management = () => {
    const navigate = useNavigate();
    
    return (
        <div className="management">
            <Card>
                <Card.Body>
                    <div className="right-side">
                        <div className="center-side">
                            <Card.Title>Add the E-Books</Card.Title>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Book's name</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="mt-4">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Please input your password." />
                                </Form.Group>
                            </Form>
                            <div className="btn-line">
                                <Button className="mt-4 me-4" variant="primary">
                                    <i className="bi-lock-fill me-2"/>
                                    Cancel
                                </Button>
                                <Button
                                    className="mt-4 ms-4"
                                    variant="Succss"
                                    onClick={() => navigate("/register")}
                                >
                                    <i className="bi-person-fill-add me-2"/>
                                    Add
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Management;