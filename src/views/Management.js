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
                    <div className="form-page">
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                        
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                    </div>
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
                </Card.Body>
            </Card>
        </div>
    )
}

export default Management;