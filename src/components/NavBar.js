import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { fetch_User_Post } from '../redux/AsyncAction/PostAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authConstants } from '../redux/constants';
import { Container, Nav, Navbar } from 'react-bootstrap';
const NavBar = () => {
    const auth = useSelector((state) => state.auth)
    // const auth = localStorage.getItem('user');
    const token = window.localStorage.getItem('token');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/register');
        dispatch({ type: authConstants.LOGOUT_SUCCESS })
    }
    // const Links = auth.user ?
    //     <div className="navbar__right">
    //         <li ><NavLink to="/">Dashboard</NavLink></li>
    //         <li><NavLink to="/create">Create Post</NavLink></li>
    //         <li><NavLink to="/profile" style={{ color: "black" }}>{auth.user.name}</NavLink></li>
    //         <li><span onClick={logout}>Logout</span></li>
    //     </div>
    //     : <div className="navbar__right">
    //         <li><NavLink to="/login">Login</NavLink></li>
    //         <li><NavLink to="/register">Register</NavLink></li>
    //     </div>

    const Links = auth.user ?

        <Navbar Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="/">BlogBD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse style={{ backgroundColor: 'black', padding: '2rem' }} id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/create">Create Post</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile">{auth.user.name}</Nav.Link>
                        <Nav.Link eventKey={2} >
                            <span onClick={logout}>Logout</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar > :


        <Navbar Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse style={{ backgroundColor: 'black', padding: '2rem' }} id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >





    return (

        <nav className="navbar">
            {/* <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <NavLink to="/"><img src={logo} style={{ marginLeft: "10px" }} /></NavLink>
                    </div> */}
            {Links}


            {/* </div>
            </div> */}
        </nav>
    );
};

export default NavBar;