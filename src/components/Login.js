// src/Login.js
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { credentials } from "../data/credentials";
import logo from '../assets/logo.jpg';
import bacground from '../assets/bacground.jpg'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [resetPassword, setResetPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = credentials.find(
            (cred) => cred.email === email && cred.password === password
        );

        if (user) {
            setIsLoggedIn(true);
            setShowAlert(true);

            // Redirect to the Dashboard component upon successful login
            navigate("/layout");
        } else {
            setAlertMessage("Invalid email or password. Please try again.");
            setShowAlert(true);
        }
    };

    const handleForgotPassword = () => {
        // Redirect to the PasswordReset component
        navigate("/password-reset");
    };

    const myStyle = {
        backgroundImage: `url(${bacground})`,
        height: "100vh",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={myStyle}>
            <div className="login-container">
                <Container className="mt-5">
                    <img src={logo} alt='Logo' className="login-logo" />
                    <p className="login-text">Welcome to Digitalflake Admin</p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="link"
                            onClick={handleForgotPassword}
                            className="login-for-pass"
                        >
                            Forgot Password?
                        </Button>

                        <Button variant="primary" type="submit" className="login-btn">
                            {resetPassword ? "Reset Password" : "Log In"}
                        </Button>

                    </Form>

                    {showAlert && (
                        <Alert
                            variant={isLoggedIn ? "success" : "danger"}
                            className="mt-3"
                            onClose={() => setShowAlert(false)}
                            dismissible
                        >
                            {alertMessage}
                        </Alert>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default Login;
