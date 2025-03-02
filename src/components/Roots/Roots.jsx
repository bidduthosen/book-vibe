import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Roots = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-5 md:px-10'>
            <div className='sticky top-0 mb-9'>
                <Nav></Nav>
            </div>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Roots;