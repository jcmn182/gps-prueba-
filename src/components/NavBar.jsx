// react router dependencies import { Link} from "react-router-dom";

// components
import { Login } from "./buttons/Login";
import { Signup } from "./buttons/Signup";
// bootstrap
import { Navbar,Container } from 'react-bootstrap'
export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className="m-0 w-100 none-style-a">
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="position-relative">
                        <div className="responsive-buttons r-1">
                            <Login/>
                            <Signup/>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


