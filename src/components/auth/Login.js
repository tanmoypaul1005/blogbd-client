import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../../redux/AsyncAction/AuthAction';
import BgImage from './BgImage';
import { useNavigate } from 'react-router-dom';
import './auth.css'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { postRegister } from "../../redux/AsyncAction/AuthAction";


const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    console.log("LoginAuth", auth);
    const [state, setstate] = useState({
        email: '',
        password: '',
    });

    const handleInputs = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
    }

    const Navigate = useNavigate();
    if (auth.user) {
        Navigate('/');
    }
    const UserLogin = (e) => {
        dispatch(postLogin(state));
        e.preventDefault();
    }

    const googlesingin = () => {
        const firebaseConfig = {
            apiKey: "AIzaSyB1hIZhqJ8QaeX1lXGu0D78ga-Qim9g9Zo",
            authDomain: "blogsite-1335a.firebaseapp.com",
            projectId: "blogsite-1335a",
            storageBucket: "blogsite-1335a.appspot.com",
            messagingSenderId: "1059879634715",
            appId: "1:1059879634715:web:5973f5c63c2b51a5f3f5be",
            measurementId: "G-QYZ0EJXQFH"
        };
        initializeApp(firebaseConfig);
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email }
                console.log(displayName, email);
                dispatch(postRegister(signedInUser))
            }).catch((error) => {

            });
    }
    return (
        <div>
            <Helmet>
                <title>User Login</title>
                <meta name='description' content='User login form' />
            </Helmet>

            <div>
                <div className="imagelog">
                    <BgImage></BgImage>
                </div>

                <div className='log' >
                    <div style={{ margin: '4rem' }}>
                        <div className="account__section">
                            <form onSubmit={UserLogin}>
                                <div className="group"><h3 className="form-heading ">Login</h3></div>
                                <div className="group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={state.email}
                                        className="group__control"
                                        placeholder="Enter Your Email"
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <input
                                        type="password"
                                        name="password"
                                        value={state.password}
                                        className="group__control"
                                        placeholder="Enter Your Password"
                                        onChange={handleInputs}
                                    />
                                </div>

                                <div className="group">
                                    <input type="submit"
                                        style={{ backgroundColor: '#1a8917', color: 'white', fontSize: '15px' }}
                                        name=""
                                        className="btn btn-default btn-block"
                                        value="Login"
                                    />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;