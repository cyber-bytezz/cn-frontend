import React, { useState } from 'react';

const collegeData2024 = [
  {
    name: "Jawaharlal Nehru University - [JNU], New Delhi",
    ranking: "1 out of 44",
    streams: "Overall",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "Symbiosis International University - [SIU], Pune",
    ranking: "1 out of 73",
    streams: "Overall",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "Amity University, Noida",
    ranking: "2 out of 73",
    streams: "Overall",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "Delhi University - [DU], New Delhi",
    ranking: "2 out of 44",
    streams: "Overall",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "Aligarh Muslim University - [AMU], Aligarh",
    ranking: "3 out of 44",
    streams: "Overall",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "K L University - [KLU], Guntur",
    ranking: "3 out of 73",
    streams: "Overall",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
];

const collegeData2023 = [
  {
    name: "Anna University - [AU], Chennai",
    ranking: "1 out of 50",
    streams: "Engineering",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "University of Hyderabad - [UoH], Hyderabad",
    ranking: "2 out of 50",
    streams: "Science",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "Banaras Hindu University - [BHU], Varanasi",
    ranking: "3 out of 50",
    streams: "Arts",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    name: "University of Delhi - [DU], New Delhi",
    ranking: "4 out of 50",
    streams: "Overall",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
];

const CollegeRankingTable = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [collegeData, setCollegeData] = useState(collegeData2024);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setCollegeData(year === "2023" ? collegeData2023 : collegeData2024);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
        College Ranking {selectedYear}
      </h2>

      {/* Filter Options */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          {/* Ranking Dropdown */}
          <div className="relative">
            <select
              className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-800 shadow-sm font-medium hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedYear}
              onChange={(e) => handleYearChange(e.target.value)}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all font-semibold">
              India Today
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition-all font-semibold">
              The Week
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition-all font-semibold">
              NIRF
            </button>
          </div>
        </div>

        {/* View All Colleges Link */}
        <a
          href="#"
          className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
        >
          View all Colleges
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="text-left p-3 text-gray-800 text-sm md:text-base font-semibold">College</th>
              <th className="text-left p-3 text-gray-800 text-sm md:text-base font-semibold">Ranking</th>
              <th className="text-left p-3 text-gray-800 text-sm md:text-base font-semibold">Streams</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map((college, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-all hover:shadow-lg"
              >
                <td className="p-4 flex items-center">
                  <img
                    src={college.logo}
                    alt={college.name}
                    className="w-10 h-10 rounded-full mr-4 shadow-md"
                  />
                  <div className="text-gray-800 font-semibold text-sm md:text-base">{college.name}</div>
                </td>
                <td className="p-4 text-gray-700 text-sm md:text-base">{college.ranking}</td>
                <td className="p-4 text-gray-600 text-sm md:text-base">{college.streams}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeRankingTable;
