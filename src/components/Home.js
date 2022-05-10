import React from 'react';
import Helmet from 'react-helmet';
const Home = () => {
    return (
        <div style={{ marginTop: '1000px' }}>
            <Helmet>
                <title>Web articles</title>
                <meta
                    name='description'
                    content='Learn HTML, CSS, JavaScript, React, Vue, Flutter etc'
                />
            </Helmet>
        </div>
    );
};

export default Home;