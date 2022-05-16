import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { fetch_User_Post } from '../redux/AsyncAction/PostAction';
import { authConstants } from '../redux/constants';
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
    const Links = token ?
        <div className="navbar__right">
            <li ><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/create">Create Post</NavLink></li>
            <li><NavLink to="/profile" style={{ color: "black" }}>{auth.user.name}</NavLink></li>
            <li><span onClick={logout}>Logout</span></li>
        </div>
        : <div className="navbar__right">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </div>





    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <NavLink to="/"><img src={logo} style={{ marginLeft: "10px" }} /></NavLink>
                    </div>

                    {/* <div className="navbar__right">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </div> */}
                    {Links}

                </div>
            </div>
        </nav>
    );
};

export default NavBar;