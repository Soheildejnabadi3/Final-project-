import React, { useState } from "react";
import Navbar from '../Components/Navbar';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";

export default function Login() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

function validateForm() {
    return email.length > 0 && password.length > 0;
}

function handleSubmit(event) {
    event.preventDefault();
}
return (
    
    <div className="signup">
    <Navbar/>
    <Form onSubmit={handleSubmit}>
    <Form.Group size="lg" controlId="email">
    <br></br>
    <Form.Label>Enter your Email</Form.Label>
    
    <Form.Control autoFocus type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    
    </Form.Group>
    <br></br>
    <Form.Group size="lg" controlId="password">

    <Form.Label>Enter your Password</Form.Label>

    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <br></br>
    <Button block size="lg" type="submit" disabled={!validateForm()}>
    SignUp
    </Button>
    </Form>
    </div>
);
}