import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { postRegister } from '../../redux/AsyncAction/AuthAction';
import BgImage from './BgImage';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const auth = useSelector((state) => state.auth);
    console.log("Auth", auth);
    const dispatch = useDispatch();

    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const userRegister = (e) => {
        e.preventDefault();
        dispatch(postRegister(state));
    }

    useEffect(() => {
        console.log("userRegister", auth);
        // if (auth.token) {
        //     // navigate('/register');
        //     navigate('/dashboard');
        // }

    }, [auth]);

    return (
        <div>
            <Helmet>
                <title>User Register</title>
                <meta name='description' content='User register form' />
            </Helmet>
            <div className="row">
                <div className="col-8">
                    <BgImage></BgImage>
                    <Toaster
                        position='top-right'
                        reverseOrder={false}
                        toastOptions={{ style: { border: '1px solid #713200', padding: '16px', color: '#713200' } }}
                    />
                </div>
                <div className="col-4">
                    <div className="account">
                        <div className="account__section">
                            <form onSubmit={userRegister}>
                                <div className="group"><h3 className="form-heading ">Register</h3></div>

                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="group__control"
                                        placeholder='Enter Your Name'
                                        value={state.name}
                                        onChange={handleInputs}
                                    />
                                </div>

                                <div className="group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="group__control"
                                        placeholder="Enter Your Email"
                                        value={state.email}
                                        onChange={handleInputs}
                                    />
                                </div>

                                <div className="group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="group__control"
                                        placeholder="Enter Your Password"
                                        value={state.password}
                                        onChange={handleInputs}
                                    />
                                </div>

                                <div className="group">
                                    <input
                                        type="submit"
                                        name=""
                                        className="btn btn-default btn-block"
                                        value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;