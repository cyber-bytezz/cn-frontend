import React, { useEffect } from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  useEffect(() => {
    // Inject the Collect chat widget script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://collectcdn.com/launcher.js';
    
    // Assign the Collect Bot ID
    window.CollectId = '65b68a1d56c8a5b9944dc123';

    document.head.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
        {/* Company Logo and Description */}
        <div>
          <div className="flex items-center mb-5">
            <img className='w-14 h-14 rounded-full mr-3' src="https://github.com/shadcn.png" alt="Company Logo" />
            <span className="text-2xl font-semibold">CN</span> {/* Company Name */}
          </div>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            We specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>9090909090</li>
            <li>innonex@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ InnovNex - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
