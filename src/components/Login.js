import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Simulate login API call
    try {
      // Replace this with actual API call
      setTimeout(() => {
        if (formData.email === 'admin@ekathva.com' && formData.password === 'password') {
          // Successful login
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', formData.email);
          navigate('/dashboard'); // Redirect to dashboard or home
        } else {
          setError('Invalid email or password');
        }
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={4}>
            <Card className="login-card shadow">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="login-title">Welcome Back</h2>
                  <p className="text-muted">Sign in to your account</p>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="login-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="login-input"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="login-btn w-100"
                    disabled={loading}
                  >
                    {loading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <p className="text-muted">
                    Don't have an account? <a href="/register" className="register-link">Sign up</a>
                  </p>
                  <a href="/forgot-password" className="forgot-link">Forgot password?</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;