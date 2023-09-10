import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setAlertMessage("Password reset instructions sent to your email.");
      setShowAlert(true);
    } catch (error) {
      // Handle any errors (e.g., email not found, server error) here
      setAlertMessage("Password reset failed. Please try again.");
      setShowAlert(true);
    }
  };

  return (
    <div className="f-pass-div">
      <Container className="mt-5">
        <div style={{ textAlign: 'center' }}>
          <p className="f-pass-text">Did you forget your password?</p>
          <p className="f-pass-text2">Enter your email address and we'll send you a link to restore password</p>
        </div>
        <Form onSubmit={handleResetPassword}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="f-pass-btn">
            Reset Password
          </Button>
        </Form>

        {showAlert && (
          <Alert
            variant="success"
            className="mt-3"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {alertMessage}
          </Alert>
        )}

        <Button variant="link" onClick={() => navigate("/")} className="f-pass-back">
          Back to Login
        </Button>
      </Container>
    </div>
  );
};

export default PasswordReset;
