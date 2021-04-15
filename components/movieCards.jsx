import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function MovieCards({movieDetails}){
    return(
        <Card style= {{width: '18rem'}}>
            <Card.Img variant="top" src={movieDetails.image} />
            <Card.Body>
                <Card.Title>{movieDetails.name}</Card.Title>
                <Card.Text>
                    {movieDetails.director}
                </Card.Text>
            <Link href = {`/movie/${movieDetails._id}`}>
                <a><Button variant="primary" onClick>Book</Button></a>
            </Link>
            </Card.Body>  
        </Card>
    )
}