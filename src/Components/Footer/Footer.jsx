import React from 'react';
import logo from "../../assets/more/logo1.png"
import { MdCall, MdLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import footerBG from "../../assets/more/13.jpg"

const Footer = () => {
    return (
        <footer style={{backgroundImage:`url(${footerBG})`}} className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <div>
                
            </div>
  <aside>
    <img className='h-20' src={logo} alt="" />
    <p className='text-[#382828]'>
      Espresso Emporium.
      <br />
      Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
    </p>
    <div>
        <nav>
    <div className="grid grid-flow-col gap-4">
      <a className='text-[#382828]'>
        <FaFacebook />
      </a>
      <a className='text-[#382828]'>
        <FaTwitter />

      </a>
      <a className='text-[#382828]'>
        <FaInstagram />

      </a>
      <a className='text-[#382828]' href="">
        <FaLinkedin />

      </a>
    </div>
  </nav>
    </div>
    <div>
        <h2 className='text-lg text-[#382828]'>Get in Touch</h2>
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
    <form className='space-y-4' >
        <h2 className='text-3xl font-bold text-[#382828]'>Connect with Us</h2>
        <input className='bg-white shadow-sm text-black outline-none' type="text" name="name" placeholder='Name' id="" />
        <br />
        <input className='bg-white text-black outline-none' type="email" name="email" placeholder='Email' id="" />
        <br />
        <input className='text-black bg-white' type="text" name='message' placeholder='Message' />
        <br />
        <input className='btn' type="submit" value="Send Message" />

    </form>
  </div>
  
</footer>
    );
};

export default Footer;