import React from 'react';

const UpdateCoffee = () => {
    return (
        <div className='p-24 max-w-7xl mx-auto rounded-xl bg-[#F4F3F0] border-zinc-500'>
            <div className='p-12 text-center space-y-4'>
            <h2 className='text-6xl'>Add New Coffee</h2>
                 <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form className='border px-5 py-6 rounded'  onSubmit={handleAddCofee} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <fieldset className="fieldset p-2">
        <label className="label text-xl">Name</label>
        <input type="text" className="input w-full border-none " name='name' placeholder="Enter coffee name" />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Quantity</label>
        <input type="text" className="input w-full border-none" name='quantity' placeholder="Enter coffee chef" />
        </fieldset>
        <fieldset className="fieldset p-2">
        <label className="label text-xl">Supplier</label>
        <input type="text" className="input border-none w-full" name='supplier' placeholder="Enter coffee supplier" />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Taste</label>
        <input type="text" className="input w-full border-none" name='taste' placeholder="Enter coffee taste" />
        </fieldset>
        <fieldset className="fieldset   p-1">
        <label className="label text-xl">Price</label>
        <input type="text" className="input w-full border-none" name='price' placeholder="Enter coffee price" />
        </fieldset>
        <fieldset className="fieldset  p-2">
        <label className="label text-xl">Details</label>
        <input type="text" className="input w-full border-none" name='details' placeholder="Enter coffee details" />
        </fieldset>
        </div>
        <div>
            <fieldset className="fieldset  p-2">
        <label className="label text-xl">Photo</label>
        <input type="text" className="input w-full border-none"
         placeholder="Enter photo 
         URL"
         name='photo' />
        </fieldset>
        <input className='btn w-full bg-[#D2B48C] border border-[#D2B48C] mt-4' type="submit" value="Add Coffee" />
        </div>
            </form>
           
        </div>
    );
};

export default UpdateCoffee;