import React from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { NavLink } from 'react-router';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const {_id,name,quantity,price,taste,photo,supplier,details}=useLoaderData();
    const handleUpdateCofee=(e)=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const updatedCoffee=Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        // send updated coffee to the db
        fetch(`http://localhost:3000/coffees/${_id}`,{
           method:"PUT",
           headers:{
            'content-type':"application/json"
           },
            body:JSON.stringify(updatedCoffee)
        }).then(res=>res.json()).then(data=>{
            if(data.modifiedCount){
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Coffee has been updated successfully",
                showConfirmButton: false,
                timer: 1500});
            }
        });
    }
    return (
        <div>
            <div className='px-20 py-5 '>
            <NavLink className="text-purple-900 flex items-center text-xl gap-2" to={"/"}> <span><BsArrow90DegLeft></BsArrow90DegLeft></span>Back to home</NavLink>
                
            </div>
             <div className='p-20 my-10 max-w-7xl mx-auto rounded-xl bg-[#F4F3F0] border-zinc-500'>
            
            <div className='p-12 text-center space-y-4'>
            <h2 className='text-6xl'>Update Coffee</h2>
                 <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form className='border px-5 py-6 rounded'  onSubmit={handleUpdateCofee} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <fieldset className="fieldset p-2">
        <label className="label text-xl">Name</label>
        <input type="text" className="input w-full border-none " defaultValue={name} name='name' placeholder="Enter coffee name" />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Quantity</label>
        <input type="text" className="input w-full border-none" name='quantity' defaultValue={quantity} placeholder="Enter coffee chef" />
        </fieldset>
        <fieldset className="fieldset p-2">
        <label className="label text-xl">Supplier</label>
        <input type="text" className="input border-none w-full" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Taste</label>
        <input type="text" defaultValue={taste} className="input w-full border-none" name='taste' placeholder="Enter coffee taste" />
        </fieldset>
        <fieldset className="fieldset   p-1">
        <label className="label text-xl">Price</label>
        <input type="text" className="input w-full border-none" defaultValue={price} name='price' placeholder="Enter coffee price" />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Details</label>
        <input type="text" className="input w-full border-none" defaultValue={details} name='details' placeholder="Enter coffee details" />
        </fieldset>
        </div>
        <div>
            <fieldset className="fieldset  p-2">
        <label className="label text-xl">Photo</label>
        <input type="text" defaultValue={photo} className="input w-full border-none"
         placeholder="Enter photo 
         URL"
         name='photo' />
        </fieldset>
        <input className='btn w-full bg-[#D2B48C] border border-[#D2B48C] mt-4' type="submit" value="Update Coffee" />
        </div>
            </form>
           
        </div>
        </div>
       
    );
};

export default UpdateCoffee;