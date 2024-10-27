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
      {/* Modal Container - smaller on mobile */}
      <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-sm sm:max-w-lg md:max-w-2xl relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl md:text-2xl z-50"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left side - Admission Info */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md md:col-span-1">
            <h3 className="text-sm font-semibold mb-3">How We Help You</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaFileAlt className="text-orange-500 text-lg" />
                <span className="text-xs font-medium text-gray-700">
                  Brochure Details
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMoneyCheckAlt className="text-orange-500 text-lg" />
                <span className="text-xs font-medium text-gray-700">
                  Check Detailed Fees
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClipboardCheck className="text-orange-500 text-lg" />
                <span className="text-xs font-medium text-gray-700">
                  Shortlist & Apply
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaHandsHelping className="text-orange-500 text-lg" />
                <span className="text-xs font-medium text-gray-700">
                  24/7 Counseling
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUniversity className="text-orange-500 text-lg" />
                <span className="text-xs font-medium text-gray-700">
                  Scholarships
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-orange-500 text-lg" />
                <span className="text-xs font-medium text-gray-700">
                  Application Deadlines
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Registration Form */}
          <div className="md:col-span-2">
            <h2 className="text-base md:text-xl font-semibold mb-3 text-gray-800">
              Register Now to Apply
            </h2>
            <form className="space-y-3">
              {/* Full Name */}
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-400 text-lg" />
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-sm"
                  placeholder="Full Name *"
                />
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400 text-lg" />
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-sm"
                  placeholder="Email Address *"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-400 text-lg" />
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-sm"
                  placeholder="Mobile Number *"
                />
              </div>

              {/* City */}
              <div className="flex items-center space-x-2">
                <FaCity className="text-gray-400 text-lg" />
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-sm"
                  placeholder="City You Live In *"
                />
              </div>

              {/* Course Interested In */}
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="text-gray-400 text-lg" />
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-sm"
                  placeholder="Course Interested In *"
                />
              </div>

              {/* Terms and Submit */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-0">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-indigo-500 underline">
                    Terms of Use
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:py-3 rounded-lg font-semibold shadow-md transition w-full md:w-auto text-sm"
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
