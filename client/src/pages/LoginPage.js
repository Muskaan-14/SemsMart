import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HomePage from './HomePage';
 
const LoginPage = () => {
 
    const [loggedin, setLoggedin] = useState(false);
 
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
 
      //const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false);
 
      const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
 
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
 
      const handleLogin = async (e) => {
        e.preventDefault();
 
        if (!username || !password) {
          //setError('Please fill in both fields');
          console.log("Invalid Entry!")
          return;
        }
 
        setIsLoading(true);
        //setError('');
       
        try{
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
              });
 
              console.log("LoginPage --> ",response);
              const data = await response.json();
              console.log("LoginPage -->",data);
 
              if (response.ok && data.success=="True") {
                console.log('Login successful:', data);
                setLoggedin(true);
              } else {
                // If login fails
                //setError(data.message || 'Login failed. Please check your credentials.');
                console.log(data.message || 'Login failed. Please check your credentials.');
              }
            } catch (error) {
              // Handle any fetch errors (e.g., network issues)
              //setError('An error occurred. Please try again later.');
              console.log("An error occurred. Please try again later.", error.message);
            } finally {
              setIsLoading(false);
            }
      };
 
      return(
              <div>
                  { loggedin ? ( <HomePage/> ) : (
 
                    <div style={{ height: '100vh', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', position: 'relative' }}>
                      {/* Company Logo */}
                      <img
                        src="images/Secure_logo.jpg" // Replace with the actual path to your logo
                        alt="Company Logo"
                        style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          height: '60px',
                        }}
                      />
 
                      <Container>
                        <Row>
                          {/* Left Side Content */}
                          <Col md={6} className="d-flex align-items-center justify-content-center flex-column text-center">
                            <h1 style={{ fontWeight: 'bold', color: '#a40060', textAlign: 'left' }}>SEMSMART</h1>
                            <p style={{ color: '#000000', textAlign: 'left' }}>An platform for semsite to buy & sale....</p>
                          </Col>
 
                          {/* Login Form */}
                          <Col md={6}>
                            <div
                              style={{
                                background: '#fff',
                                borderRadius: '8px',
                                padding: '30px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                              }}
                            >
                              <h3 className="text-center mb-4">Welcome</h3>
                              <p className="text-center">Please sign in to your account</p>
                              <Form onSubmit={handleLogin}>
                                <Form.Group controlId="formUsername" className="mb-3">
                                  {/*<Form.Label>Username</Form.Label>
                                  <Form.Control type="text" placeholder="Enter your username" />
                                  */}
                                  <label htmlFor="username">Username:</label>
                                  <input
                                    type="username"
                                    id="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder="Enter your username"
                                    required
                                  />
                                </Form.Group>
                                <Form.Group controlId="formPassword" className="mb-3">
                                  {/*
                                      <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" />
                                   */}
                                   <label htmlFor="password">Password:</label>
                                  <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your password"
                                    required
                                  />
                                </Form.Group>
                                {/*
                                    <Form.Group controlId="formRememberMe" className="mb-3 d-flex justify-content-between align-items-center">
                                  <Form.Check type="checkbox" label="Remember me" />
                                  <a href="#" style={{ color: '#6c63ff', textDecoration: 'none' }}>
                                    Forgot password?
                                  </a>
                                </Form.Group>
                                */}
                                <Button
                                  variant="primary"
                                  type="submit"
                                  disabled={isLoading}
                                  className="w-100"
                                  style={{
                                    backgroundColor: '#a40060',
                                    border: 'none',
                                  }}
 
                                >
                                  Sign In →
                                </Button>
                              </Form>
                              <div className="text-center mt-3">
                                <p>
                                  Don't have an account?{' '}
                                  <a href="#" style={{ color: '#6c63ff', textDecoration: 'none' }}>
                                    Contact administrator
                                  </a>
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                )}
 
            </div>
       );
};
 
export default LoginPage;