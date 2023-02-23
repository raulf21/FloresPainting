import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    selectedDate: selectedDate,
    selectedTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: date,
      selectedTime: '',
    }));
  };

  const handleTimeChange = (time) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedTime: time,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  // Available times for the selected date
  const availableTimes = [
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  return (
    <div className="BookingPage">
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-5">Book a Service</h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <Card className="shadow-lg">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="serviceType">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Control
                      as="select"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service type</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="repair">Repair</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="selectedTime">
                    <Form.Label>Available Times</Form.Label>
                    <Form.Control
                      as="select"
                      name="selectedTime"
                      value={                formData.selectedTime}
                      onChange={(e) => handleTimeChange(e.target.value)}
                      disabled={!formData.selectedDate}
                    >
                      {formData.selectedDate &&
                        availableTimes.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      {!formData.selectedDate && (
                        <option value="">Please select a date first</option>
                      )}
                      {formData.selectedDate &&
                        availableTimes.length === 0 && (
                          <option value="">No available times for this date</option>
                        )}
                    </Form.Control>
                  </Form.Group>
    
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formData.selectedTime}
                  >
                    Book
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
  export default BookingPage;




