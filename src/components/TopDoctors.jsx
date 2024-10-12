import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { Collages } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Colleges for Admission</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Explore our handpicked list of top colleges. Choose the right institution and easily book your admission consultation today.
            </p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {Collages.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`);
                            window.scrollTo(0, 0);
                        }}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                        key={index}
                    >
                        {/* Container for the image with fixed height for square shape */}
                        <div className='h-64 w-64 flex justify-center items-center'>
                            <img 
                                className='object-cover h-full w-full' 
                                src={item.image} 
                                alt={item.name} 
                            />
                        </div>
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={() => { navigate('/Collages'); window.scrollTo(0, 0); }} 
                className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'
            >
                more
            </button>
        </div>
    );
}

export default TopDoctors;
