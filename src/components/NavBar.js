import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { fetch_User_Post } from '../redux/AsyncAction/PostAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authConstants } from '../redux/constants';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './style.css'
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

    const Links = auth.user ?
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-tooth me-2" />
            BlogBD
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/profile" className="nav-item nav-link">
             My TimeLine
            </a>
            <a href="/" className="nav-item nav-link">
            Dashboard
            </a>
            <a href="/create" className="nav-item nav-link">
            Create Post
            </a>
            {/* <a href="/dentalCheckup" className="nav-item nav-link">
              Checkup
            </a> */}
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search" />
          </button>
           <a href="/profile" className="nav-item nav-link">
           {auth.user.name}
            </a>
          <a href="/register" style={{fontSize:"15px",padding:'3rem'}} onClick={logout} className="btn btn-primary py-2 px-4 ms-3">
         logout
          </a>
        </div>
      </nav>
        :
<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
       <a href="/" className="navbar-brand p-0">
         <h1 className="m-0 text-primary">
           <i className="fa fa-tooth me-2" />
           BlogBD
         </h1>
       </a>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarCollapse"
       >
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarCollapse">
         <div className="navbar-nav ms-auto py-0">
           <a href="/" className="nav-item nav-link">
             Home
           </a>
           <a href="/" className="nav-item nav-link">
           Dashboard
           </a>
           {/* <a href="/service" className="nav-item nav-link">
             Service
           </a> */}
           {/* <a href="/dentalCheckup" className="nav-item nav-link">
             Checkup
           </a> */}
           <a href="/contact" className="nav-item nav-link">
             Contact
           </a>
         </div>
         <button
           type="button"
           className="btn text-dark"
           data-bs-toggle="modal"
           data-bs-target="#searchModal"
         >
           <i className="fa fa-search" />
         </button>
         <a href="/login" style={{fontSize:"15px",padding:'3rem'}} className="btn btn-primary py-2 px-4 ms-3">
         Login
         </a>
         <a href="/register" style={{fontSize:"15px",padding:'3rem'}} className="btn btn-primary py-2 px-4 ms-3">
         Register
         </a>
       </div>
     </nav>




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