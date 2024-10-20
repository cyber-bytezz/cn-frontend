import React, { useState, useEffect } from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import search icon

const SpecialityMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Search for specialties...");

  // Placeholder cycle logic
  useEffect(() => {
    const specialtiesExamples = specialityData.map((item) => item.speciality);
    let index = 0;
    const intervalId = setInterval(() => {
      setPlaceholder(`Try "${specialtiesExamples[index]}"`);
      index = (index + 1) % specialtiesExamples.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const filteredSpecialities = specialityData.filter((item) =>
    item.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-8 py-16 text-gray-800 bg-gray-50">
      <h1 className="text-4xl font-semibold text-gray-900">
        Find by Specialization
      </h1>
      <p className="sm:w-1/3 text-center text-lg text-gray-500">
        Easily browse through our list of specialized consultants. 
      </p>

      {/* Search bar */}
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-12 py-4 border-2 border-gray-300 rounded-full w-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        />
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Results */}
      {searchTerm && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-8 w-full px-6">
          {filteredSpecialities.length > 0 ? (
            filteredSpecialities.map((item, index) => (
              <Link
                to={`/Colleges/${item.speciality}`}
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <img className="w-16 sm:w-24 mb-4" src={item.image} alt={item.speciality} />
                <p className="text-md font-medium text-gray-800">{item.speciality}</p>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No specialties found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SpecialityMenu;
