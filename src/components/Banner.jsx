import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa'; // Import call icon

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Your Appointment</p>
                    <p className='mt-4'>100+ College Consultants</p>
                </div>
                <button
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                    className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 flex items-center justify-center gap-2 hover:scale-105 transition-all'>
                    <FaPhoneAlt /> {/* Call icon */}
                    Book a Call
                </button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='w-full md:w-1/2 lg:w-[500px] relative mt-6 md:mt-0'> {/* Increased size to lg:w-[500px] */}
                <img className='w-full max-w-sm md:max-w-lg mx-auto md:absolute bottom-0 right-0' src={assets.appointment_img} alt="Appointment" /> {/* Adjusted image size */}
            </div>
        </div>
    );
}

export default Banner;
