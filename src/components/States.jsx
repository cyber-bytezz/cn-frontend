import React from 'react';

// Sample data for study places and courses
const studyPlaces = [
  { name: 'Delhi NCR', icon: '🏛️' },
  { name: 'Bangalore', icon: '🏙️' },
  { name: 'Hyderabad', icon: '🕌' },
  { name: 'Pune', icon: '🏞️' },
  { name: 'Mumbai', icon: '🌆' },
  { name: 'Chennai', icon: '🌊' },
  { name: 'Kolkata', icon: '📜' },
];

const courses = [
  { type: 'Full Time', name: 'B.Com General', duration: '3 Years', fees: '68.23 K', colleges: '6692' },
  { type: 'Full Time', name: 'B.Com General', duration: '3 Years', fees: '68.23 K', colleges: '6692' },
  { type: 'Full Time', name: 'B.Com General', duration: '3 Years', fees: '68.23 K', colleges: '6692' },
  { type: 'Full Time', name: 'B.Com General', duration: '3 Years', fees: '68.23 K', colleges: '6692' },
  { type: 'Full Time', name: 'B.Ed General', duration: '2 Years', fees: '84.48 K', colleges: '5521' },
  { type: 'Full Time', name: 'BCA General', duration: '3 Years', fees: '1.45 L', colleges: '5126' },
  { type: 'Full Time', name: 'BA General', duration: '3 Years', fees: '47.80 K', colleges: '4086' },
];

const TopStudyPlaces = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Top Study Places</h2>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex space-x-4">
          {studyPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition-all duration-300 min-w-[150px]"
            >
              <div className="text-5xl">{place.icon}</div>
              <p className="mt-4 text-gray-700 font-semibold">{place.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExploreCourses = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Explore Courses</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap space-x-2 mb-8">
        <button className="bg-blue-100 text-blue-600 py-2 px-5 rounded-full font-semibold hover:bg-blue-200 transition-all duration-300">
          Bachelors
        </button>
        <button className="bg-gray-100 text-gray-600 py-2 px-5 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
          Masters
        </button>
        <button className="bg-gray-100 text-gray-600 py-2 px-5 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
          Doctorate
        </button>
        <button className="bg-gray-100 text-gray-600 py-2 px-5 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
          Diploma
        </button>
        <button className="bg-gray-100 text-gray-600 py-2 px-5 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
          Certification
        </button>
      </div>

      {/* Horizontal Scroll for Courses */}
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex space-x-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 min-w-[250px]"
            >
              <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide">
                {course.type}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{course.name}</h3>

              {/* Flexbox to align the text after colon to the right */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Duration:</span> 
                  <span>{course.duration}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 mt-1">
                  <span>Total Avg. Fees:</span> 
                  <span>{course.fees}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 mt-1">
                  <span>Colleges:</span> 
                  <span>{course.colleges}</span>
                </div>
              </div>

              <a
                href="#"
                className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
              >
                Course Overview →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <TopStudyPlaces />
      <ExploreCourses />
    </div>
  );
};

export default HomePage;
