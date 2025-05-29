import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';

const CoffeeCard = ({coffee}) => {
    console.log(coffee);
    const {photo,price ,name,
taste}=coffee;
    return (
        <div className="card card-side bg-base-200  border-1">
  <figure className='p-4'>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className='grid grid-cols-2 items-center'>
        <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Taste: {taste}</p>
    <p>Price:{price}</p>
  </div>
        <div className='max-w-xl flex flex-col grid-cols-1 gap-4 items-center justify-center p-4'>
            <div className='text-white btn max-w-20 bg-[#D2B48C]'><FaEye size={20} /></div>
            <div className='btn max-w-20 bg-gray-700 text-white'><CiEdit size={20} /></div>
            <div className='btn max-w-20 bg-red-500 text-white'>
                <MdOutlineDelete size={20} />
            </div>
        </div>
  </div>
  
</div>
    );
};

export default CoffeeCard;