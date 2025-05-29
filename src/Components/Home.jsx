import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees=useLoaderData();
    console.log(coffees);
    return (
        <div>
            <div className='text-center py-5'>
                <p>-- Slip & Savor--</p>
                <h2 className='text-3xl font-bold text-[#382828]'>Our Popular Products</h2>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-20 my-10 max-w-7xl mx-auto'>
            {
                coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
        </div>
        </div>
    );
};

export default Home;