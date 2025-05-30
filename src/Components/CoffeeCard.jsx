import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const {_id,photo,price ,name,
taste}=coffee;
const handleDelete=(id)=>{
    console.log(id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed);
  if (result.isConfirmed) {
        // start deleting the coffe
        fetch(`http://localhost:3000/coffees/${_id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{
            if(data.deletedCount){
                Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
                });
                // remove coffee from the state
                const remainingCoffees=coffees.filter(coffee=>coffee._id!==_id);
                setCoffees(remainingCoffees);
            }
        })


    
  }
});

}
    return (
        <div className="card card-side bg-base-200  border-1">
  <figure className='p-4'>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className=' w-full grid grid-cols-2 items-center'>
        <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Taste: {taste}</p>
    <p>Price:{price}</p>
  </div>
        <div className='max-w-xl flex flex-col grid-cols-1 gap-4 items-center justify-center p-4'>
            <Link to={`/coffee/${_id}`}>
            <button className='text-white btn max-w-20 bg-[#D2B48C]'><FaEye size={20} /></button>

            </Link>
            <Link to={`/updateCoffee/${_id}`}>
            <button className='btn max-w-20 bg-gray-700 text-white'><CiEdit size={20} /></button>

            </Link>
            <button onClick={()=>{
                handleDelete(_id);
            }} className='btn max-w-20 bg-red-500 text-white'>
                <MdOutlineDelete size={20} />
            </button>
        </div>
  </div>
</div>
    );
};

export default CoffeeCard;