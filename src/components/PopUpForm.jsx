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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-2 overflow-y-auto">
      {/* Modal Container */}
      <div className="relative bg-white rounded-lg shadow-lg p-3 w-full max-w-xs sm:max-w-sm md:max-w-md relative">
        {/* Close button - Small on mobile */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-base md:text-lg z-50"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Left side - Admission Info */}
          <div className="bg-gray-100 p-2 rounded-lg shadow-md md:col-span-1">
            <h3 className="text-xs font-semibold mb-2">How We Help You</h3>
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <FaFileAlt className="text-orange-500 text-sm" />
                <span className="text-xs font-medium text-gray-700">Brochure Details</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaMoneyCheckAlt className="text-orange-500 text-sm" />
                <span className="text-xs font-medium text-gray-700">Check Detailed Fees</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaClipboardCheck className="text-orange-500 text-sm" />
                <span className="text-xs font-medium text-gray-700">Shortlist & Apply</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaHandsHelping className="text-orange-500 text-sm" />
                <span className="text-xs font-medium text-gray-700">24/7 Counseling</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaUniversity className="text-orange-500 text-sm" />
                <span className="text-xs font-medium text-gray-700">Scholarships</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className="text-orange-500 text-sm" />
                <span className="text-xs font-medium text-gray-700">Application Deadlines</span>
              </div>
            </div>
          </div>

          {/* Right side - Registration Form */}
          <div className="md:col-span-2">
            <h2 className="text-sm font-semibold mb-2 text-gray-800">Register Now to Apply</h2>
            <form className="space-y-2">
              {/* Full Name */}
              <div className="flex items-center space-x-1">
                <FaUser className="text-gray-400 text-sm" />
                <input
                  type="text"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs"
                  placeholder="Full Name *"
                />
              </div>

              {/* Email */}
              <div className="flex items-center space-x-1">
                <FaEnvelope className="text-gray-400 text-sm" />
                <input
                  type="email"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs"
                  placeholder="Email Address *"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex items-center space-x-1">
                <FaPhone className="text-gray-400 text-sm" />
                <input
                  type="text"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs"
                  placeholder="Mobile Number *"
                />
              </div>

              {/* City */}
              <div className="flex items-center space-x-1">
                <FaCity className="text-gray-400 text-sm" />
                <input
                  type="text"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs"
                  placeholder="City You Live In *"
                />
              </div>

              {/* Course Interested In */}
              <div className="flex items-center space-x-1">
                <FaGraduationCap className="text-gray-400 text-sm" />
                <input
                  type="text"
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xs"
                  placeholder="Course Interested In *"
                />
              </div>

              {/* Terms and Submit */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
                <p className="text-xs text-gray-500 mb-2 sm:mb-0">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-indigo-500 underline">
                    Terms of Use
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition w-full sm:w-auto text-xs"
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
