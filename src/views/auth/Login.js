import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
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
                        <Card.Title>Login Your Account</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;