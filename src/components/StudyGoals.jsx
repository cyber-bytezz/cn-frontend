import React from "react";

// Sample data for study goals
const studyGoals = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2922/2922647.png", // Sample icon URL
    title: "Engineering",
    colleges: 6233,
    degrees: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png", // Sample icon URL
    title: "Management",
    colleges: 7677,
    degrees: ["MBA/PGDM", "BBA/BMS", "Executive MBA"],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1086/1086236.png", // Sample icon URL
    title: "Commerce",
    colleges: 4934,
    degrees: ["B.Com", "M.Com"],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2922/2922662.png", // Sample icon URL
    title: "Arts",
    colleges: 5554,
    degrees: ["BA", "MA", "BFA", "BSW"],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2913/2913466.png", // Sample icon URL
    title: "Science",
    colleges: 3829,
    degrees: ["B.Sc", "M.Sc", "Ph.D"],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921202.png", // Sample icon URL
    title: "Law",
    colleges: 2894,
    degrees: ["LLB", "LLM", "Diploma in Law"],
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920266.png", // Sample icon URL
    title: "Medicine",
    colleges: 1287,
    degrees: ["MBBS", "BDS", "MD"],
  },
];

const StudyGoals = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Select Your Study Goal</h2>
      
      {/* Horizontal scrollable container with a right scroll button */}
      <div className="relative flex items-center">
        <div className="flex overflow-x-auto space-x-8 py-4 scrollbar-hide transition-transform duration-300">
          {studyGoals.map((goal, index) => (
            <div key={index} className="min-w-[280px] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl p-6 transform transition-all duration-300 hover:scale-105 flex-shrink-0 relative">
              <div className="flex items-center mb-6">
                <img src={goal.icon} alt={goal.title} className="w-14 h-14 mr-6" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">{goal.title}</h3>
                  <p className="text-sm text-gray-500">{goal.colleges} Colleges</p>
                </div>
              </div>
              <ul className="space-y-1 text-gray-600 text-sm">
                {goal.degrees.map((degree, idx) => (
                  <li key={idx} className="border-b last:border-none pb-2">{degree}</li>
                ))}
              </ul>

              {/* Vertical line separator */}
              {index !== studyGoals.length - 1 && (
                <div className="absolute right-[-14px] top-1/4 h-2/4 border-r border-gray-300 hidden lg:block"></div>
              )}
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => {
            document.querySelector(".overflow-x-auto").scrollBy({ left: 300, behavior: "smooth" });
          }}
          className="absolute right-0 w-12 h-12 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StudyGoals;
