import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing a right arrow icon for each button

const admissionData = [
  { name: 'B Ed Admission 2024' },
  { name: 'MBA Admission 2024' },
  { name: 'MBBS Admission 2024' },
  { name: 'BA Admission 2024' },
  { name: 'M Tech Admission 2024' },
  { name: 'PhD Admission 2024' },
  { name: 'LLB Admission 2024' },
  { name: 'D El Ed Admission 2024' },
  { name: 'BSc Admission 2024' },
  { name: 'B Pharmacy Admission 2024' },
];

const Admission2024 = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Admission 2024</h2>
      
      {/* Wrapper for the buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {admissionData.map((admission, index) => (
          <button 
            key={index}
            className="bg-white text-gray-800 font-semibold py-2 px-4 md:py-2 md:px-6 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200 ease-in-out flex items-center text-base md:text-lg gap-2 w-full sm:w-auto justify-between sm:justify-center"
          >
            <span>{admission.name}</span> 
            <FaArrowRight size={16} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Admission2024;
