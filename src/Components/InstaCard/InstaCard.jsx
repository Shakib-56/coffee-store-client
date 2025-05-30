import React from 'react';
import cofeeImage1 from "../../assets/cups/Rectangle 9.png"
import cofeeImage2 from "../../assets/cups/Rectangle 10.png"
import cofeeImage3 from "../../assets/cups/Rectangle 11.png"
import cofeeImage4 from "../../assets/cups/Rectangle 12.png"
import cofeeImage5 from "../../assets/cups/Rectangle 13.png"
import cofeeImage6 from "../../assets/cups/Rectangle 14.png"
import cofeeImage7 from "../../assets/cups/Rectangle 15.png"
import cofeeImage8 from "../../assets/cups/Rectangle 16.png"
const InstaCard = () => {
    const cofeeCardsImages=[cofeeImage1,cofeeImage2,cofeeImage3,cofeeImage4,cofeeImage5,cofeeImage6,cofeeImage7,cofeeImage8]
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
            {
                cofeeCardsImages.map((singleImage,index)=><div key={index}><img src={singleImage} alt="" /></div>)
            }
        </div>
    );
};

export default InstaCard;