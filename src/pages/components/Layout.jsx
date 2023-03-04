import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return (
        <div className={box}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;

const box = 'flex flex-col min-w-screen min-h-screen'