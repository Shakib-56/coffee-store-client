import React from 'react';
import navBg from "../../assets/more/15.jpg"
import logo1 from "../../assets/more/logo1.png"
import Banner from '../Banner/Banner';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-repeat flex justify-center bg-base-100 shadow-sm" style={{
                backgroundImage:`url(${navBg})`
            }}>
  <a className=" text-white font-bold flex items-center text-xl"><span><img className='h-20' src={logo1}></img></span>Espresso Emporium</a>
</div>
        </div>
    );
};

export default Navbar;