import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

export default function navbar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BookFlix</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link href='/movie'><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Nav.Link href="#">Movies</Nav.Link>
                    <Nav.Link href="#newReleases">Releasing Soon!</Nav.Link>
                </Nav>
        </Navbar>
    )
}