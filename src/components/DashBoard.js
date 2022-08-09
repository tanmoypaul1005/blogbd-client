import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboard } from '../redux/AsyncAction/DashboardAction';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { BsPencil, BsArchive, BsImage } from 'react-icons/bs';
import Sidebar from './Sidebar';
import moment from 'moment';
import Banner from './containers/Banner';
import Loader from './Loader';

const DashBoard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDashboard())
    }, [dispatch])

    const dashboard = useSelector((state) => state.dashboard.dashboard);
    console.log("dashboard", dashboard);


    return (
        <div>
            <Helmet>
                <title>DashBoard</title>
                <meta name='description' content='DashBoardPage' />
            </Helmet>
            <div><Banner /></div>

            <div className='container '>
                <div className='row ml-minus-15 mr-minus-15'>
                    <div className='col-3 p-15'>
                        <Sidebar />
                    </div>
                    <div className='col-9 p-15'>
                        {dashboard.length > 0 ? (
                            dashboard.map((item, index) => (
                                <div className='dashboard__posts' >
                                    <div className='dashboard__posts__title'>
                                        <NavLink to={`/details/${item._id}`}>{item.title}</NavLink>
                                        <span>Published {moment(item.updatedAt).fromNow()}</span>
                                    </div>
                                </div>
                            ))
                        ) : <Loader />}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashBoard;