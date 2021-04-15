import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import MovieCards from '../../components/movieCards'
import CardGroup from 'react-bootstrap/CardGroup'


export default function movieLandingPage({movieData}){
    return (
        <>
            <Navbar/>
            <Layout>
            <CardGroup>
                {movieData.map((movieDetails)=>{
                    return (
                        <MovieCards movieDetails={movieDetails}/>
                    )
                })}    
            </CardGroup>    
            </Layout>
            
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