import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CustomCard({name,description,imageUrL}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrL} />
      <Card.Body>
        <Spinner/>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;