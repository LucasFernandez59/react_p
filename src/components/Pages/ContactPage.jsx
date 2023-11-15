import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const [validationMessages, setValidationMessages] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationMessages({ ...validationMessages, [name]: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const newValidationMessages = {};

    if (!formData.user_name.trim()) {
      newValidationMessages.user_name = 'This field is required';
    }

    if (!formData.user_email.trim()) {
      newValidationMessages.user_email = 'This field is required';
    } else if (!isValidEmail(formData.user_email)) {
      newValidationMessages.user_email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newValidationMessages.subject = 'This field is required';
    }

    if (!formData.message.trim()) {
      newValidationMessages.message = 'This field is required';
    }

    setValidationMessages(newValidationMessages);

  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container content mb-5">
      <Container>
        <h2 className="text-center">Contact Me</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-4">
            <Card className='card-custom'>
              <Card.Body>
                <form className="form-control card card-custom" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                  />
                  {validationMessages.user_name && (
                    <div className="text-danger">{validationMessages.user_name}</div>
                  )}
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                  />
                  {validationMessages.user_email && (
                    <div className="text-danger">{validationMessages.user_email}</div>
                  )}
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  {validationMessages.subject && (
                    <div className="text-danger">{validationMessages.subject}</div>
                  )}
                  <textarea
                    name="message"
                    cols="30"
                    rows="8"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {validationMessages.message && (
                    <div className="text-danger">{validationMessages.message}</div>
                  )}
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}