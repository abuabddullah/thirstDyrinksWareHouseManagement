import './UserLoader.css'

import React from 'react';

const UserLoader = () => {
    return (
        <section className='w100vw h100vh d-flex justify-content-center align-items-center'>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default UserLoader;