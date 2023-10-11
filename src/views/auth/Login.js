import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SideBarImg from "../../assets/login.png";
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <Card>
                <Card.Body>
                    <Image className="left-side" src={SideBarImg} rounded/>
                    <div className="right-side">
                        <h5>Hello!</h5>
                        <h4 className="mb-4">Good morning</h4>
                        <div className="center-side">
                            <Card.Title>Login Your Account</Card.Title>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="mt-4">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Please input your password." />
                                </Form.Group>
                            </Form>
                            <div className="btn-line">
                                <Button className="mt-4" variant="primary">Go somewhere</Button>
                                <Button className="mt-4" variant="success">Go somewhere</Button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;