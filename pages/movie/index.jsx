import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import MovieCards from '../../components/movieCards'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


export default function movieLandingPage({movieData}){
    return (
        <>
            <Navbar/>
            <p></p>
            <Container>
                <Row>
                    {movieData.map((movieDetails)=>{
                        return (
                            <MovieCards movieDetails={movieDetails}/>
                        )
                    })}    
                </Row>
            </Container>    
            
        </>
    )
}

export async function getStaticProps(){
    const response = await fetch('http://localhost:5000/movie')
    let movieData = await response.json()
    return {
        props:{
            movieData
        }
    }
}