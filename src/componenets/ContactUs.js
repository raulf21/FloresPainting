import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios'

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', {
        name,
        email,
        message,
      });
      const data = response.data;
      if (data.success) {
        // Show a success message
        alert('Your message has been sent!');
      } else {
        // Show an error message
        alert('Sorry, there was an error. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      // Show an error message
      alert('Sorry, there was an error. Please try again later.');
    }
  };

  return (
      <Container>
        <div>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={handleMessageChange}
                    required
                />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
      </Container>
  );
}

export default ContactPage;
