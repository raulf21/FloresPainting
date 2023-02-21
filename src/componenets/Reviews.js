import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Review(props) {
    const { name, comment, rating } = props;
    
    return (
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{comment}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Rating: {rating}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
  export default Review