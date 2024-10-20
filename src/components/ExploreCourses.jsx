import React from 'react';

const coursesData = [
  { name: 'B.Com General', duration: '3 Years', fees: '68.23 K', colleges: '6692' },
  { name: 'B.Ed General', duration: '2 Years', fees: '84.48 K', colleges: '5521' },
  { name: 'BCA General', duration: '3 Years', fees: '1.45 L', colleges: '5126' },
  { name: 'BA General', duration: '3 Years', fees: '47.25 K', colleges: '4038' },
];

const ExploreCourses = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Explore Courses</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Bachelors</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">Masters</button>
        {/* Add more buttons as needed */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {coursesData.map((course, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-500">Duration: {course.duration}</p>
            <p className="text-gray-500">Avg. Fees: {course.fees}</p>
            <p className="text-gray-500">Colleges: {course.colleges}</p>
            <a href="#" className="text-blue-600 mt-2 inline-block">Course Overview</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourses;
