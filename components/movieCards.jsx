import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Col from 'react-bootstrap/Col'

export default function MovieCards({movieDetails}){
    return(
        <Col key={movieDetails._id} xs={6} md={4}>
        <Card style= {{width: '18rem'}}>
            <Card.Img variant="top" src={movieDetails.image} />
            <Card.Body>
                <Card.Title>{movieDetails.name}</Card.Title>
                <Card.Text>
                    {movieDetails.director}
                </Card.Text>
            <Link href = {`/movie/${movieDetails._id}`}>
                <a><Button variant="primary">Book</Button></a>
            </Link>
            </Card.Body>  
        </Card>
        </Col>
    )
}