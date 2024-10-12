import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>We specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!</p>
          <p>We specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders.</p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Schedule Your Appointment</h1>
        <p className="mt-4 text-gray-700">
          Contact us today to book your consultation with our specialists.
        </p>
        <img
          src="https://miro.medium.com/v2/resize:fit:1224/0*3rQu3-4MaDINtwW6"
          alt="Consultation"
          className="mx-auto my-4 w-[700px] h-auto rounded-lg"
        />
        <button className="mt-4 py-3 px-6 bg-indigo-600 text-white rounded-full transition-all hover:bg-indigo-700">
          Book a Call
        </button>
      </div>

    </div>
  )
}

export default About
