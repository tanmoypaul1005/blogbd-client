import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () => {
    return (
        <div className="notFound">
            <Helmet>
                <title>404 - NotFound</title>
                <meta name='description' content='Opps! That page could not Found' />
            </Helmet>

            <div className="notFound__container">
                <h1 className="notFound__container_h1">404</h1>
                <p className="notFound__container__p">Opps! That page could not Found </p>
            </div>

        </div>
    );
};

export default NotFound;