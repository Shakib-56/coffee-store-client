import React from 'react';
import logo from "../../assets/more/logo1.png"
import { MdCall, MdLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import footerBG from "../../assets/more/13.jpg"

const Footer = () => {
    return (
        <footer style={{backgroundImage:`url(${footerBG})`}} className="footer sm:footer-horizontal max-w-full px-20 bg-neutral text-neutral-content p-10">
  <aside className='flex flex-col gap-4'>
    <img className='h-20' src={logo} alt="" />
    <p className='text-[#382828] max-w-xl'>
      <span className='text-3xl'>Espresso Emporium.</span>
      <br />
      <span >Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</span>
    </p>
    <div>
        <nav>
    <div className="grid grid-flow-col gap-4">
      <a className='text-[#251717]'>
        <FaFacebook  size={25}/>
      </a>
      <a className='text-[#382828]'>
        <FaTwitter size={25} />

      </a>
      <a className='text-[#382828]'>
        <FaInstagram size={25} />

      </a>
      <a className='text-[#382828]' href="">
        <FaLinkedin size={25} />

      </a>
    </div>
  </nav>
    </div>
    <div>
        <h2 className='text-xl font-bold text-[#382828]'>Get in Touch</h2>
        <p className='flex items-center gap-1 text-lg text-[#382828]'><span className='text-[#382828]'><MdCall size={25} />
        </span><a href="tel:+88 01533 333 333">+88 01533 333 333</a>
</p>
        <p className='flex items-center gap-1 text-lg text-[#382828]'><span className='text-[#382828]'><HiOutlineMail size={25} />
        </span><a href="mailto:info@gamil.com">info@gmail.com</a></p>
        <p className='flex items-center text-[#382828] gap-1 text-lg'><span className='text-[#382828]'><MdLocationOn size={25}/>
        </span>72, Wall street, King Road, Dhaka</p>
        
    </div>
  </aside>
  <div>
    <form className='space-y-4 max-w-full' >
        <h2 className='text-3xl font-bold text-[#251717]'>Connect with Us</h2>
        <input className='bg-white shadow-sm text-black outline-none w-full p-2' type="text" name="name" placeholder='Name' id="" />
        <br />
        <input className='bg-white text-black shadow-sm  outline-none w-full p-2' type="email" name="email" placeholder='Email' id="" />
        <br />
        <input className='text-black bg-white outline-none  shadow-sm  w-full p-2 '  type="text" name='message' placeholder='Message' />
        <br />
        <input className='btn rounded-3xl text-[#251717] shadow-sm' type="submit" value="Send Message" />

    </form>
  </div>
  
</footer>
    );
};

export default Footer;