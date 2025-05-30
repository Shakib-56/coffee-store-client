import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-auto '>
           <Outlet></Outlet> 

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;