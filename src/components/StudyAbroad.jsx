// Filename: StudyAbroad.jsx

import React from 'react';
import { FaArrowRight, FaUniversity, FaDollarSign } from 'react-icons/fa';

// Sample data for study abroad countries
const abroadStudies = [
  {
    country: 'USA',
    colleges: '1010',
    cost: '33.39 K USD/Year',
    guides: ['Why Study in the USA?', 'SOP for USA', 'Exams for Studying in USA', 'Post Study Opportunities in USA'],
    icon: <FaUniversity size={28} />,
  },
  {
    country: 'UK',
    colleges: '170',
    cost: '21.74K USD/Year',
    guides: ['Why Study in UK?', 'SOP for UK', 'UK Student VISA', 'Cost to Study in UK'],
    icon: <FaUniversity size={28} />,
  },
  {
    country: 'Canada',
    colleges: '212',
    cost: '21.5 K USD/Year',
    guides: ['Why Study in Canada?', 'Top Universities to study', 'SOP for Canada', 'Work Study in Canada'],
    icon: <FaUniversity size={28} />,
  },
  {
    country: 'Australia',
    colleges: '150',
    cost: '25.12 K USD/Year',
    guides: ['Why Study in Australia?', 'Top Universities to study', 'SOP for Australia', 'Work Study in Australia'],
    icon: <FaUniversity size={28} />,
  },
  {
    country: 'Germany',
    colleges: '125',
    cost: '12.9 K USD/Year',
    guides: ['Why Study in Germany?', 'SOP for Germany', 'Exams for Studying in Germany', 'Post Study Opportunities'],
    icon: <FaUniversity size={28} />,
  },
];

const StudyAbroad = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Study Abroad</h2>
      {/* Horizontal scrolling wrapper */}
      <div className="overflow-x-auto">
        <div className="flex space-x-6">
          {abroadStudies.map((study, index) => (
            <div
              key={index}
              className="min-w-[280px] lg:min-w-[300px] bg-white p-6 lg:p-7 rounded-lg shadow-md hover:shadow-lg transition-all flex-shrink-0"
            >
              {/* Top Section: Country Icon and Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-full text-blue-600">
                  {study.icon}
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Study in {study.country}</h3>
                  <p className="text-xs lg:text-sm text-gray-500">Check {study.colleges} Colleges</p>
                </div>
              </div>

              {/* Statistics Section: No. of Colleges and Avg. Cost */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <FaUniversity className="text-gray-600" />
                    <div>
                      <p className="text-gray-700 font-semibold text-sm">{study.colleges}</p>
                      <p className="text-xs text-gray-500">No. of Colleges</p>
                    </div>
                  </div>

                  {/* Align cost info and dollar icon to the right edge */}
                  <div className="flex justify-end items-center space-x-2">
                    <FaDollarSign className="text-gray-600" />
                    <div>
                      <p className="text-gray-700 font-semibold text-sm text-right">{study.cost}</p>
                      <p className="text-xs text-gray-500 text-right">Avg. Study Cost</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guides Section */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Guides</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  {study.guides.map((guide, i) => (
                    <li
                      key={i}
                      className="hover:text-blue-600 transition-colors flex justify-between items-center"
                    >
                      {guide}
                      <FaArrowRight className="ml-2 text-gray-400" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
