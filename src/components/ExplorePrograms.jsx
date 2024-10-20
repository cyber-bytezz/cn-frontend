import React from "react";

// Category and Program Data
const categories = [
  "All", "BE/B.Tech", "MBA/PGDM", "MBBS", "ME/M.Tech", "B.Sc", "BA", "B.Com", "BCA", "BBA/BMS", "B.Sc (Nursing)"
];

const programs = [
  {
    title: "Ranking",
    description: "College ranked based on real data",
    details: ["Indiatoday - 1747", "IIRF - 1455", "Outlook - 1286", "NIRF - 1302"],
    actionText: "Top Ranked Colleges in India",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    title: "Find Colleges",
    description: "Discover 19000+ colleges via preferences",
    details: ["Best MBA colleges in India", "Best BTech colleges in India"],
    actionText: "Discover Top Colleges in India",
    icon: "https://cdn-icons-png.flaticon.com/512/2919/2919702.png",
  },
  {
    title: "Compare Colleges",
    description: "Compare on the basis of rank, fees, etc.",
    details: ["IIT Madras vs IIT Delhi", "IIT Bombay vs IIT Madras"],
    actionText: "Compare Colleges",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920032.png",
  },
  {
    title: "Exams",
    description: "Know more about your exams",
    details: ["B.Com", "B.Sc", "BA", "BE/B.Tech", "MBA"],
    actionText: "Check All Entrance Exams in India",
    icon: "https://cdn-icons-png.flaticon.com/512/2944/2944696.png",
  },
  {
    title: "College Predictor",
    description: "Know your college admission chances",
    details: ["NEET", "JEE Advanced", "CAT", "GATE", "MAT"],
    actionText: "Find Where You may get Admission",
    icon: "https://cdn-icons-png.flaticon.com/512/2965/2965277.png",
  },
  {
    title: "Course Finder",
    description: "Discover top Indian Colleges 2024",
    details: ["BE/B.Tech", "MBA/PGDM", "ME/M.Tech", "B.Sc", "BA"],
    actionText: "Get Top Courses in Indian Colleges",
    icon: "https://cdn-icons-png.flaticon.com/512/2912/2912712.png",
  },
];

const ExplorePrograms = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Explore Programs</h2>

      {/* Scrollable Category Tabs */}
      <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            className="whitespace-nowrap bg-gray-100 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-300 transition-all shadow-sm"
          >
            {category}
          </button>
        ))}
        <button
          className="w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          onClick={() => {
            document.querySelector(".overflow-x-auto").scrollBy({ left: 300, behavior: "smooth" });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-hidden">
            
            {/* Header with Icon */}
            <div className="bg-blue-50 p-6 flex justify-between items-start rounded-t-lg">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
              <img src={program.icon} alt={program.title} className="w-12 h-12 rounded-full shadow-md" />
            </div>

            {/* Details and Action */}
            <div className="p-6">
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                {program.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">
                {program.actionText} &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePrograms;
