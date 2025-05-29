import React from 'react';
import bannerImage from "../../assets/more/6.jpeg"

const Banner = () => {
    return (
        <div
  className="hero min-h-screen  scale-x-[-1] bg-bottom-left bg-linear-to-bl from-gray-200 to-black bg-no-repeat "
  style={{
    backgroundImage:`url(${bannerImage})`
  }}
>
  <div className="hero-content text-white text-start pb-20 ">
    <div className="max-w-4xl pr-90 mb-20 flex flex-col space-y-4 items-end ">
        <h2 className='scale-x-[-1] text-4xl'>Would you like a Cup of Delicious Coffee?</h2>
        <p className='scale-x-[-1]'>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
        </p>
     
      <button className="px-5 py-2 bg-amber-800 scale-x-[-1]">Learn More</button>
    </div>
  </div>
</div>
    );
};

export default Banner;