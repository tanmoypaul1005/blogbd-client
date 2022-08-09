import React, { useEffect } from 'react';
import moment from 'moment';
import Sidebar from './Sidebar';
import { BsPencil, BsArchive, BsImage } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import Loader from './Loader';
import { fetch, postDelete } from '../redux/AsyncAction/PostAction';

const MyProfile = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    console.log("LoginAuth", auth);

    const post = useSelector((state) => state.post.post);
    console.log("Post", post);

    const Deletepost = (id) => {
        console.log("ID", id);
        dispatch(postDelete(id));
        if (id) {
            window.location.reload();
        }
    }

    //reload start
    function reload() {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
    reload()
    //reload end

    return (
        <div>
            <Helmet>
                <title>MyProfile</title>
                <meta name='description' content='MyProfile' />
            </Helmet>

            <div className='container '>
                <div className='row ml-minus-15 mr-minus-15'>
                    <div className='col-3 p-15'>
                        <Sidebar />
                    </div>

                    <div className='col-9 p-15'>
                        {post.length > 0 ? (
                            post.map((item, index) => (
                                <div className='dashboard__posts' >
                                    <div className='dashboard__posts__title'>
                                        <NavLink to={`/details/${item._id}`}>{item.title}</NavLink>
                                        <span>Published {moment(item.updatedAt).fromNow()}</span>
                                    </div>

                                    <div className='dashboard__posts__links'>

                                        <NavLink to={`/post/edit/${item._id}`}>
                                            <BsPencil className='icon' />
                                        </NavLink>
                                        <BsArchive
                                            onClick={() => Deletepost(item._id)}
                                            className='icon'
                                        />
                                    </div>
                                </div>
                            ))
                        ) : ''}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;