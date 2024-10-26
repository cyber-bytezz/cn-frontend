import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCity,
  FaGraduationCap,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaClipboardCheck,
  FaHandsHelping,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa"; // Import necessary icons

const PopUpForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      {/* Adjust the width dynamically: large on desktop, smaller on mobile */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl lg:max-w-5xl md:max-w-3xl sm:max-w-md relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-sm"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left side - Admission Info */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-sm md:text-base font-semibold mb-3">
              How We Help You in Admission
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaFileAlt className="text-orange-500 text-sm md:text-lg" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Brochure Details
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMoneyCheckAlt className="text-orange-500 text-sm md:text-lg" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Check Detailed Fees
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClipboardCheck className="text-orange-500 text-sm md:text-lg" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Shortlist & Apply
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaHandsHelping className="text-orange-500 text-sm md:text-lg" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  24/7 Counseling
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUniversity className="text-orange-500 text-sm md:text-lg" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Scholarships
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-orange-500 text-sm md:text-lg" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Application Deadlines
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Registration Form */}
          <div className="col-span-2">
            <h2 className="text-lg md:text-2xl font-semibold mb-3 text-gray-800">
              Register Now to Apply
            </h2>
            <form className="space-y-2 md:space-y-3">
              {/* Full Name */}
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-400 text-sm md:text-lg" />
                <input
                  type="text"
                  className="w-full px-2 md:px-3 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs md:text-sm"
                  placeholder="Full Name *"
                />
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400 text-sm md:text-lg" />
                <input
                  type="email"
                  className="w-full px-2 md:px-3 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs md:text-sm"
                  placeholder="Email Address *"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-400 text-sm md:text-lg" />
                <input
                  type="text"
                  className="w-full px-2 md:px-3 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs md:text-sm"
                  placeholder="Mobile Number *"
                />
              </div>

              {/* City */}
              <div className="flex items-center space-x-2">
                <FaCity className="text-gray-400 text-sm md:text-lg" />
                <input
                  type="text"
                  className="w-full px-2 md:px-3 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs md:text-sm"
                  placeholder="City You Live In *"
                />
              </div>

              {/* Course Interested In */}
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="text-gray-400 text-sm md:text-lg" />
                <input
                  type="text"
                  className="w-full px-2 md:px-3 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs md:text-sm"
                  placeholder="Course Interested In *"
                />
              </div>

              {/* Terms and Submit */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-3">
                <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-0">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-indigo-500 underline">
                    Terms of Use
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-md transition w-full md:w-auto text-xs md:text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
