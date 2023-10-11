import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SideBarImg from "../../assets/3.jpeg";
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <Card>
                <Card.Body>
                    <Image className="left-side" src={SideBarImg} rounded/>
                    <div className="right-side">
                        <p><h3>Hello!</h3></p>
                        <p><h2>Good morning</h2></p>
                        <div className="center-side">
                            <Card.Title>Login Your Account</Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Please input your password." />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;