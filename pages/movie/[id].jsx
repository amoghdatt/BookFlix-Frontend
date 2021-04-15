import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function displayMovie({movieData}){
    return (
        <>
        <Carousel>
            <Carousel.Item>
        <img
      className="d-block w-100"
      src="https://www.joblo.com/assets/images/oldsite/posters/images/full/hateful_eight_russell.jpg"
      alt="First slide"
      style={{height:500 , width:100}}
        />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.joblo.com/assets/images/oldsite/posters/images/full/hateful_eight_russell.jpg"
      alt="Second slide"
      style={{height:500 , width:100}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.joblo.com/assets/images/oldsite/posters/images/full/hateful_eight_russell.jpg"
      alt="Third slide"
      style={{height:500 , width:100}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Container>
           <p>
           A bounty hunter and his captured fugitive are caught in the middle of a snowstorm. They seek refuge at a small lodge and encounter a twisted turn of events there.
            </p> 
            <Button variant="success" size="sm" block> BOOK NOW</Button>
        </Container>
        </>
    )
}



export async function getServerSideProps({params}){
    let movieId = params.id
    let res = await fetch(`http://127.0.0.1:5000/movie/${movieId}`)
    let movieData = await res.json()
    return {
        props:{
            movieData
        }
    }
}