import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Certifa</h3>
          <p className="text-gray-200 leading-relaxed">
            Certifa is a rebellious education brand on a mission to fix learning. We equip students with real-world skills and global certifications that employers actually value, helping them build standout careers. Start your learning journey today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#hero" className="hover:text-brandYellow transition-colors">Home</a></li>
            <li><a href="#comparison" className="hover:text-brandYellow transition-colors">Why Certifa</a></li>
            <li><a href="#skills-kickstart" className="hover:text-brandYellow transition-colors">Skills Kickstart</a></li>
            <li><a href="#faq" className="hover:text-brandYellow transition-colors">FAQs</a></li>
            <li><a href="#enroll" className="hover:text-brandYellow transition-colors">Enroll Now</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-200 mb-2">📍 628, 2nd cross, Banshankari 1st stage, Bangalore, India</p>
          {/*<p className="text-gray-200 mb-2">📞 +91 99029 14906</p>  */}
          <p className="text-gray-200">✉️ support@certifa.com</p>
        </div>

        {/*   Socials 
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-200">
            <a href="#" className="hover:text-brandYellow transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-brandYellow transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-brandYellow transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-brandYellow transition-colors"><FaTwitter /></a>
          </div>   
          
         
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-500 pt-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Certifa. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
