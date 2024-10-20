


import React from 'react';

const collegeData = [
  {
    rank: "#1",
    name: "IIT Madras - Indian Institute of Technology - [IITM]",
    location: "Chennai, Tamil Nadu",
    rating: "5/5",
    rankingInfo: "#1 out of 200 in India 2024",
    cutoff: "JEE-Advanced 2024 - Cut off 419",
    applicationDeadline: "27 Apr - 18 Jun 2024",
    fees: "₹2,42,000",
    icon: "https://cdn.iconscout.com/icon/free/png-256/iit-madras-282155.png",
  },
  {
    rank: "#2",
    name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
    location: "Kharagpur, West Bengal",
    rating: "4.9/5",
    rankingInfo: "#6 out of 200 in India 2024",
    cutoff: "JEE-Advanced 2024 - Cut off 898",
    applicationDeadline: "10 June - 18 Jun 2024",
    fees: "₹2,62,360",
    icon: "https://cdn.iconscout.com/icon/free/png-256/iit-kharagpur-282157.png",
  },
  {
    rank: "#3",
    name: "IIMA - Indian Institute of Management",
    location: "Ahmedabad, Gujarat",
    rating: "4.9/5",
    rankingInfo: "#2 out of 50 in India 2019",
    cutoff: "CAT 2023 - Cut off 99",
    applicationDeadline: "24 June - 31 Mar 2025",
    fees: "₹33,00,000",
    icon: "https://i.pinimg.com/236x/af/ce/3b/afce3b2913b2c584eba7e94751e23e36.jpg",
  },
  {
    rank: "#4",
    name: "IIM Bangalore - Indian Institute of Management",
    location: "Bangalore, Karnataka",
    rating: "4.9/5",
    rankingInfo: "#1 out of 50 in India 2019",
    cutoff: "CAT 2023 - Cut off 99",
    applicationDeadline: "21 June - 07 Aug 2024",
    fees: "₹1,25,000",
    icon: "https://cdn.iconscout.com/icon/free/png-256/iim-bangalore-282158.png",
  },
];

const getBadgeColor = (rank) => {
  switch (rank) {
    case "#1":
      return "bg-green-100 text-green-800";
    case "#2":
      return "bg-blue-100 text-blue-800";
    case "#3":
      return "bg-yellow-100 text-yellow-800";
    case "#4":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const TopColleges = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10 tracking-wide">
        Top 10 Colleges
      </h2>

      {/* Category Filter - Horizontal Scroll **/}
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide mb-8">
        <button className="whitespace-nowrap bg-blue-100 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-200 transition-all shadow-md">
          BE/B.Tech
        </button>
        <button className="whitespace-nowrap bg-blue-100 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-200 transition-all shadow-md">
          MBA/PGDM
        </button>
        <button className="whitespace-nowrap bg-blue-100 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-200 transition-all shadow-md">
          MBBS
        </button>
      </div>

      {/* Table for desktop, Card Layout for mobile */}
      <div className="hidden md:block">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="text-left p-4 text-gray-800 text-sm font-semibold">Rank</th>
                <th className="text-left p-4 text-gray-800 text-sm font-semibold">College</th>
                <th className="text-left p-4 text-gray-800 text-sm font-semibold">Ranking</th>
                <th className="text-left p-4 text-gray-800 text-sm font-semibold">Cutoff</th>
                <th className="text-left p-4 text-gray-800 text-sm font-semibold">Application Deadline</th>
                <th className="text-left p-4 text-gray-800 text-sm font-semibold">Fees</th>
              </tr>
            </thead>
            <tbody>
              {collegeData.map((college, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-all hover:shadow-lg transform hover:scale-105 duration-200">
                  <td className="p-4 font-bold text-blue-500 text-lg">
                    <span className={`px-3 py-1 rounded-full text-sm shadow-md ${getBadgeColor(college.rank)}`}>
                      {college.rank}
                    </span>
                  </td>
                  <td className="p-4 flex items-center">
                    <img src={college.icon} alt={college.name} className="w-12 h-12 rounded-full mr-4 shadow-md" />
                    <div>
                      <p className="font-semibold text-gray-900">{college.name}</p>
                      <p className="text-gray-500 text-sm">{college.location}</p>
                      <p className="text-yellow-500 flex items-center"><span className="mr-1">⭐</span> {college.rating}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700 font-medium">{college.rankingInfo}</td>
                  <td className="p-4 text-gray-600">{college.cutoff}</td>
                  <td className="p-4 text-gray-600">{college.applicationDeadline}</td>
                  <td className="p-4 text-blue-600 font-bold">{college.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Card layout for mobile view **/}
      <div className="block md:hidden space-y-6">
        {collegeData.map((college, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 space-y-2 hover:shadow-lg transition-all">
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${getBadgeColor(college.rank)}`}>
                {college.rank}
              </span>
              <img src={college.icon} alt={college.name} className="w-12 h-12 rounded-full ml-4 shadow-md" />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{college.name}</p>
                <p className="text-gray-500 text-sm">{college.location}</p>
              </div>
            </div>
            <div className="text-gray-700 font-medium">{college.rankingInfo}</div>
            <div className="text-gray-600">Cutoff: {college.cutoff}</div>
            <div className="text-gray-600">Deadline: {college.applicationDeadline}</div>
            <div className="text-blue-600 font-bold">Fees: {college.fees}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopColleges;



{/*import React from 'react';

const collegeData = [
  {
    rank: "#1",
    name: "IIT Madras - Indian Institute of Technology - [IITM]",
    location: "Chennai, Tamil Nadu",
    rating: "5/5",
    rankingInfo: "#1 out of 200 in India 2024",
    cutoff: "JEE-Advanced 2024 - Cut off 419",
    applicationDeadline: "27 Apr - 18 Jun 2024",
    fees: "₹2,42,000",
    icon: "https://cdn.iconscout.com/icon/free/png-256/iit-madras-282155.png", // Sample Icon
  },
  {
    rank: "#2",
    name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
    location: "Kharagpur, West Bengal",
    rating: "4.9/5",
    rankingInfo: "#6 out of 200 in India 2024",
    cutoff: "JEE-Advanced 2024 - Cut off 898",
    applicationDeadline: "10 June - 18 Jun 2024",
    fees: "₹2,62,360",
    icon: "https://cdn.iconscout.com/icon/free/png-256/iit-kharagpur-282157.png", // Sample Icon
  },
  {
    rank: "#3",
    name: "IIMA - Indian Institute of Management",
    location: "Ahmedabad, Gujarat",
    rating: "4.9/5",
    rankingInfo: "#2 out of 50 in India 2019",
    cutoff: "CAT 2023 - Cut off 99",
    applicationDeadline: "24 June - 31 Mar 2025",
    fees: "₹33,00,000",
    icon: "https://i.pinimg.com/236x/af/ce/3b/afce3b2913b2c584eba7e94751e23e36.jpg", // Sample Icon
  },
  {
    rank: "#4",
    name: "IIM Bangalore - Indian Institute of Management",
    location: "Bangalore, Karnataka",
    rating: "4.9/5",
    rankingInfo: "#1 out of 50 in India 2019",
    cutoff: "CAT 2023 - Cut off 99",
    applicationDeadline: "21 June - 07 Aug 2024",
    fees: "₹1,25,000",
    icon: "https://cdn.iconscout.com/icon/free/png-256/iim-bangalore-282158.png", // Sample Icon
  },
];

const TopColleges = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10 tracking-wide">Top 10 Colleges</h2>
      
      {/* Category Filter - Horizontal Scroll 
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide mb-8">
        <button className="whitespace-nowrap bg-blue-100 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-200 transition-all shadow-md">BE/B.Tech</button>
        <button className="whitespace-nowrap bg-blue-100 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-200 transition-all shadow-md">MBA/PGDM</button>
        <button className="whitespace-nowrap bg-blue-100 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-200 transition-all shadow-md">MBBS</button>
        {/* Add more categories 
      </div>

      {/* Table *
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="text-left p-4 text-gray-800 text-sm font-semibold">Rank</th>
              <th className="text-left p-4 text-gray-800 text-sm font-semibold">College</th>
              <th className="text-left p-4 text-gray-800 text-sm font-semibold">Ranking</th>
              <th className="text-left p-4 text-gray-800 text-sm font-semibold">Cutoff</th>
              <th className="text-left p-4 text-gray-800 text-sm font-semibold">Application Deadline</th>
              <th className="text-left p-4 text-gray-800 text-sm font-semibold">Fees</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map((college, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                <td className="p-4 font-bold text-blue-500 text-lg">
                  <span className="bg-blue-50 px-2 py-1 rounded-full text-sm shadow-md">{college.rank}</span>
                </td>
                <td className="p-4 flex items-center">
                  <img src={college.icon} alt={college.name} className="w-12 h-12 rounded-full mr-4 shadow-md" />
                  <div>
                    <p className="font-semibold text-gray-900">{college.name}</p>
                    <p className="text-gray-500 text-sm">{college.location}</p>
                    <p className="text-yellow-500 flex items-center"><span className="mr-1">⭐</span> {college.rating}</p>
                  </div>
                </td>
                <td className="p-4 text-gray-700 font-medium">{college.rankingInfo}</td>
                <td className="p-4 text-gray-600">{college.cutoff}</td>
                <td className="p-4 text-gray-600">{college.applicationDeadline}</td>
                <td className="p-4 text-blue-600 font-bold">{college.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopColleges;*/}