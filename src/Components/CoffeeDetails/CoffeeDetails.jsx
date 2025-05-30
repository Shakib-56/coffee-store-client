import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import coffeeDetailsBg from "../../assets/more/11.png"
import { BiArrowToLeft } from 'react-icons/bi';
import { BsArrow90DegLeft } from 'react-icons/bs';

const CoffeeDetails = () => {
    const singleCoffee=useLoaderData();
    const {price,name,taste,photo,quantity,supplier,details}=singleCoffee;
    return (
        <div className='max-w-full px-20 py-5 mx-10 bg-cover' style={{backgroundImage:`url(${coffeeDetailsBg})`}}>
            <NavLink className="text-purple-900 flex items-center text-xl gap-2" to={"/"}> <span><BsArrow90DegLeft></BsArrow90DegLeft></span>Back to home</NavLink>
                  <div className="card card-side bg-base-200 shadow-sm max-w-7xl px-20 mx-auto my-10" >
  <figure>
    <img
      src={photo}
      alt="coffee" />
  </figure>
  <div className="flex flex-col p-10 space-y-3 items-start justify-center">
    <h2 className='text-2xl font-bold text-[#392929]'>Niceties</h2>
    <h2 className="card-title">Name: {name}</h2>
    <p><strong>Taste</strong>: {taste}</p>
    <p><strong>Price</strong>: {price}</p>
    <p> <strong>Quantity</strong>: {quantity}</p>
    <p> <strong>Details</strong>: {details}</p>
  </div>
</div>
        </div>
 
    );
};

export default CoffeeDetails;