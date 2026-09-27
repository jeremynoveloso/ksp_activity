import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return(
    <div className="bg-gray-800 border-b border-black text-white grid grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        <div className="p-3 justify-center">
            <h3 className="text-md font-semibold mb-4 uppercase">Quick Links</h3>
            <ul className="text-neutral-300 text-sm hover:text-white">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="#"></Link></li>
            </ul>
        </div>
        <div className="p-3 justify-center">
            <h3 className="text-md font-semibold mb-4 uppercase">Services</h3>
            <ul className="text-neutral-300 text-sm hover:text-white">
                <li><Link to="/about">Service 1</Link></li>
                <li><Link to="/services">Service 2</Link></li>
                <li><Link to="/contact">Service 3</Link></li>
                <li><Link to="#"></Link></li>
            </ul>
        </div>
        <div className="p-3 justify-center">
            <h3 className="text-md font-semibold mb-4 uppercase">Support</h3>
            <ul className="text-neutral-300 text-sm hover:text-white">
                <li><Link to="/about">FAQs</Link></li>
                <li><Link to="/services">Terms and Conditions</Link></li>
                <li><Link to="/contact">Privacy Policy 3</Link></li>
                <li><Link to="#">Help Center</Link></li>
                <li><Link to="#"></Link></li>
            </ul>
        </div>
        <div className="p-3 justify-center ">
            <h3 className="text-md font-semibold mb-4 uppercase">Contact</h3>
            <ul className="text-neutral-300 text-sm hover:text-white">
                <li><Link to="#">#123-456-7890</Link></li>
                <li><Link to="#">mckhulet0318@gmail.com</Link></li>
                <li><Link to="#">Logistics Park, Global City, 2500</Link></li>
                <li><Link to="#">Help Center</Link></li>
            </ul>

        </div>
      
    </div>


  );
}
export default Footer;