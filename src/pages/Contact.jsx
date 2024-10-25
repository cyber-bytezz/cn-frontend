import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img
          src="https://miro.medium.com/v2/resize:fit:1224/0*3rQu3-4MaDINtwW6"
          alt="Consultation"
          className="mx-auto my-4 w-[700px] h-auto rounded-lg"
        />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>TN Chennai <br /> INdia</p>
          <p className=' text-gray-500'>Tel: (91) 9090909090 <br /> Email: innonex@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT CN</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
