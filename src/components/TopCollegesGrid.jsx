// Filename: TopCollegesGrid.jsx

import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';

// Sample data for the top colleges
const collegesData = [
  {
    name: "IIT Madras - Indian Institute of Technology - [IITM]",
    location: "Chennai, Tamil Nadu",
    course: "BE/B.Tech",
    fees: "2.42 Lacs",
    rating: 4.3,
    reviews: 376,
    rank: 227,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIMA - Indian Institute of Management",
    location: "Ahmedabad, Gujarat",
    course: "MBA/PGDM",
    fees: "25.00 Lacs",
    rating: 4.5,
    reviews: 51,
    rank: 421,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "Chandigarh University - [CU]",
    location: "Chandigarh, Chandigarh",
    course: "BE/B.Tech",
    fees: "2.10 Lacs",
    rating: 4.4,
    reviews: 3383,
    rank: 691,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "SP Jain [SPJIMR]",
    location: "Mumbai, Maharashtra",
    course: "MBA/PGDM",
    fees: "22.50 Lacs",
    rating: 4.2,
    reviews: 43,
    rank: 16,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
    location: "Kharagpur, West Bengal",
    course: "ME/M.Tech",
    fees: "27.65 K",
    rating: 4.3,
    reviews: 717,
    rank: 222,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIML - Indian Institute of Management",
    location: "Lucknow, Uttar Pradesh",
    course: "MBA/PGDM",
    fees: "14.30 Lacs",
    rating: 4.2,
    reviews: 85,
    rank: 4,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIML - Indian Institute of Management",
    location: "Lucknow, Uttar Pradesh",
    course: "MBA/PGDM",
    fees: "14.30 Lacs",
    rating: 4.2,
    reviews: 85,
    rank: 4,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIML - Indian Institute of Management",
    location: "Lucknow, Uttar Pradesh",
    course: "MBA/PGDM",
    fees: "14.30 Lacs",
    rating: 4.2,
    reviews: 85,
    rank: 4,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIML - Indian Institute of Management",
    location: "Lucknow, Uttar Pradesh",
    course: "MBA/PGDM",
    fees: "14.30 Lacs",
    rating: 4.2,
    reviews: 85,
    rank: 4,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIML - Indian Institute of Management",
    location: "Lucknow, Uttar Pradesh",
    course: "MBA/PGDM",
    fees: "14.30 Lacs",
    rating: 4.2,
    reviews: 85,
    rank: 4,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
  {
    name: "IIML - Indian Institute of Management",
    location: "Lucknow, Uttar Pradesh",
    course: "MBA/PGDM",
    fees: "14.30 Lacs",
    rating: 4.2,
    reviews: 85,
    rank: 4,
    imageUrl: "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  },
];

const TopCollegesGrid = () => {
  // Split data into two rows
  const firstRowColleges = collegesData.slice(0,5);
  const secondRowColleges = collegesData.slice(0,5);

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-wide text-center">Top Universities</h2>

      {/* First Row - Horizontal Scroll */}
      <div className="mb-8">
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-6">
            {firstRowColleges.map((college, index) => (
              <div
                key={index}
                className="min-w-[350px] max-w-[350px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all flex-shrink-0 transform hover:scale-105"
              >
                <div className="relative">
                  <img src={college.imageUrl} alt={college.name} className="w-full h-40 object-cover rounded-t-lg" />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs">cd 10/10</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{college.name}</h3>
                  <p className="text-sm text-gray-500">{college.location}</p>

                  {/* Divider Line */}
                  <hr className="my-3" />

                  <p className="text-sm text-gray-600">{college.course}</p>
                  <p className="text-blue-600 font-bold">{college.fees} Total Fees</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm font-semibold">{college.rating}/5</span>
                    <span className="text-xs text-gray-500">({college.reviews} reviews)</span>
                  </div>

                  {/* Divider Line */}
                  <hr className="my-3" />

                  <p className="text-sm text-gray-500 mt-2">Ranked {college.rank}</p>

                  {/* Divider Line */}
                  <hr className="my-3" />

                  <div className="mt-3 space-y-1">
                    <a href="#" className="block text-blue-500 font-semibold hover:underline">View All Courses and Fees</a>
                    <a href="#" className="block text-blue-500 font-semibold hover:underline">Download Brochure</a>
                    <a href="#" className="block text-blue-500 font-semibold hover:underline">Compare</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Horizontal Scroll */}
      <div>
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-6">
            {secondRowColleges.map((college, index) => (
              <div
                key={index}
                className="min-w-[350px] max-w-[350px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all flex-shrink-0 transform hover:scale-105"
              >
                <div className="relative">
                  <img src={college.imageUrl} alt={college.name} className="w-full h-40 object-cover rounded-t-lg" />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs">cd 10/10</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{college.name}</h3>
                  <p className="text-sm text-gray-500">{college.location}</p>

                  {/* Divider Line */}
                  <hr className="my-3" />

                  <p className="text-sm text-gray-600">{college.course}</p>
                  <p className="text-blue-600 font-bold">{college.fees} Total Fees</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm font-semibold">{college.rating}/5</span>
                    <span className="text-xs text-gray-500">({college.reviews} reviews)</span>
                  </div>

                  {/* Divider Line */}
                  <hr className="my-3" />

                  <p className="text-sm text-gray-500 mt-2">Ranked {college.rank}</p>

                  {/* Divider Line */}
                  <hr className="my-3" />

                  <div className="mt-3 space-y-1">
                    <a href="#" className="block text-blue-500 font-semibold hover:underline">View All Courses and Fees</a>
                    <a href="#" className="block text-blue-500 font-semibold hover:underline">Download Brochure</a>
                    <a href="#" className="block text-blue-500 font-semibold hover:underline">Compare</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollegesGrid;
