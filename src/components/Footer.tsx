import React from "react";
import { FaAddressCard, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                
                     <MdMarkEmailUnread/>
                <a href="mailto:info@example.com">
                 <h1>biplobguru123@gmail.com</h1></a>
              </li>
              <li className="flex items-center gap-2">
                
                    <FaPhoneAlt/>
                <a href="+8801951432363">
                     +880 01951432363</a>
              </li>
              <li className="flex items-center gap-2">
                <FaAddressCard/>
               <h1> arobpur, Jashore, Bangladesh</h1>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
               <FaFacebook/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaTwitter/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
               <FaLinkedin/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
               <FaInstagram/>
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-xl font-bold mb-2  bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Additional Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Roomy</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
