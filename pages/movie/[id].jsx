import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'


export default function displayMovie({movieData}){
    return (
        <>
        <Navbar/>
        <p></p>
        <Container>
        <Row>
            <Col xs={6} md={4}>
                <Image src={movieData.image}  style= {{height:400, width:332}} rounded />
            </Col>
            <Col xs={6} md={4}>
                <Image src={movieData.image}  style= {{height:400, width:332}} rounded />
            </Col> 
            <Col xs={6} md={4}>
                <Image src={movieData.image} style= {{height:400, width:332}} rounded />
            </Col>    
        </Row>
        </Container>
        <hr/>
        <Layout>
        <Container>
           <p>{movieData.synopsis}</p>
           <p>Duration: {movieData.duration} mins</p> 
            <Button variant="success" size="sm" block> BOOK NOW</Button>
        </Container>
        </Layout>
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