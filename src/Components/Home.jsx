import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import coffeeBgImage from "../assets/more/1.png"
import InstaCard from './InstaCard/InstaCard';
import Banner from './Banner/Banner';
import { useState } from 'react';

const Home = () => {
    const initialCoffees=useLoaderData();
        const [coffees,setCoffees]=useState(initialCoffees)

    console.log(coffees);
    return (
        <div >
            
             <Banner></Banner>
            <div className='text-center py-5'>
                <p>-- Slip & Savor--</p>
                <h2 className='text-3xl font-bold text-[#382828]'>Our Popular Products</h2>
            </div>
             <div className='grid grid-cols-1  md:grid-cols-2 gap-6 px-20  my-10 max-w-7xl mx-auto bg-no-repeat bg-cover' style={{
                backgroundImage:`url(${coffeeBgImage})`,
             }}>
            {
                coffees.map(coffee=><CoffeeCard 
                    key={coffee._id}
                    coffees={coffees}
                    setCoffees={setCoffees}
                     coffee={coffee}
                     ></CoffeeCard>)
            }
        </div>
        <div className='max-w-7xl mx-auto px-20'>
            <div className='text-center my-6'>
                <p>Follow Us Now</p>
                <h2 className=' font-bold text-4xl text-[#382828]'>Follow on Instagram</h2>
            </div>
            <div >
                <InstaCard></InstaCard>
            </div>
        </div>
        </div>
    );
};

export default Home;