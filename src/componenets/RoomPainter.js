import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function RoomPainter() {
  const [imageUrl, setImageUrl] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [imageLoaded, setImageLoaded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageLoaded) {
      return;
    }
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
    };
  }, [imageUrl, imageLoaded]);

  const handleImageUpload = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setImageUrl(url);
    setImageLoaded(false);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleColorApply = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imageLoaded) {
      return;
    }
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      const alpha = data[i + 3];
      if (alpha > 0) {
        data[i] = parseInt(color.substr(1, 2), 16);
        data[i + 1] = parseInt(color.substr(3, 2), 16);
        data[i + 2] = parseInt(color.substr(5, 2), 16);
      }
    }
    context.putImageData(imageData, 0, 0);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Upload a photo of your room</h2>
          <Form.Group>
            <Form.Label>Choose file</Form.Label>
            <Form.Control type="file" onChange={handleImageUpload} />
          </Form.Group>
          {imageUrl && (
            <img src={imageUrl} alt="Room" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          )}
        </Col>
        <Col md={6}>
          <h2>Experiment with colors</h2>
          <Form.Group>
            <Form.Label>Choose a color:</Form.Label>
            <Form.Control type="color" value={color} onChange={handleColorChange} />
          </Form.Group>
          {imageUrl && (
            <div>
              <canvas ref={canvasRef} style={{ width: '100%', height: '400px' }} />
              <Button variant="primary" className="mt-3" block onClick={handleColorApply}>
                Apply color
              </Button>
            </div>
          )}
          {imageUrl && canvasRef.current && (
            <div>
              <img
                src={canvasRef.current.toDataURL()}
                alt="Colored Room"
                style={{ maxWidth: '100%', maxHeight: '400px' }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default RoomPainter;

