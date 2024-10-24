import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [secondRowDropdown, setSecondRowDropdown] = useState(false);
  const [mobileSecondRowDropdown, setMobileSecondRowDropdown] = useState(false);

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-95 shadow-lg rounded-full px-8 py-4 max-w-screen-lg w-full">
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        {/* Logo aligned to the leftmost edge */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img
            className="w-40 h-auto transition-transform duration-300 transform hover:scale-105"
            src="/logonew.png"
            alt="Logo"
          />
        </div>

        {/* Main Menu for Desktop */}
        <div className="hidden md:flex flex-col items-center gap-2 font-medium">
          {/* First Row (Specialities) */}
          <ul className="flex items-center justify-center gap-2 flex-wrap">
            {[
              "Engineering",
              "Management",
              "Medical",
              "Arts & Humanities",
              "Agriculture",
              "Law",
              "Pharmacy",
            ].map((speciality) => (
              <li
                key={speciality}
                className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary hover:text-white rounded-full font-medium transition-all"
              >
                <NavLink to={`/Collages/${speciality.replace(" ", "_")}`}>
                  {speciality}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Second Row (Buttons with one dropdown) */}
          <ul className="flex items-center justify-center gap-2 mt-2">
            {/* Static buttons */}
            <li className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all cursor-pointer">
              All Courses
            </li>
            <li className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all cursor-pointer">
              Ranking
            </li>
            <li className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all cursor-pointer">
              Promotion
            </li>

            {/* Dropdown button */}
            <li className="relative">
              <button
                className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all cursor-pointer"
                onClick={() => setSecondRowDropdown(!secondRowDropdown)}
              >
                More
              </button>

              {/* Dropdown Menu aligned from the right */}
              {secondRowDropdown && (
                <ul className="absolute top-12 right-0 bg-white shadow-lg rounded-lg mt-2 p-2 w-48 z-10">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Education Fair-2024</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">IRST-LMS</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Jobs</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Book a Call Button aligned to the rightmost edge */}
        <div className="flex items-center gap-4">
          {token && (
            <button
              onClick={() => navigate("/form")}
              className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition-transform transform hover:scale-105"
            >
              Book a Call
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="Menu" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-14 h-14 rounded-full mr-3" src="https://github.com/shadcn.png" alt="Logo" />
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className="w-7" alt="Close" />
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-5 mt-5 px-5 text-lg font-medium">
          {/* Mobile Dropdown Specialities */}
          <li
            className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileDropdown(!mobileDropdown)}
          >
            SPECIALITY
            <span className="ml-2">{mobileDropdown ? "▲" : "▼"}</span>
          </li>
          {mobileDropdown && (
            <ul className="flex flex-col items-center gap-3 text-lg">
              {[
                "Engineering",
                "Management",
                "Medical",
                "Arts & Humanities",
                "Agriculture",
                "Law",
                "Pharmacy",
                "Allied Health Sciences",
              ].map((speciality) => (
                <NavLink key={speciality} onClick={() => setShowMenu(false)} to={`/Collages/${speciality.replace(" ", "_")}`}>
                  <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    {speciality}
                  </li>
                </NavLink>
              ))}
            </ul>
          )}

          {/* Second Row in Mobile View with Dropdown */}
          <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
            All Courses
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
            Ranking
          </li>

          {/* Mobile Dropdown */}
          <li
            className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileSecondRowDropdown(!mobileSecondRowDropdown)}
          >
            Promotion
            <span className="ml-2">{mobileSecondRowDropdown ? "▲" : "▼"}</span>
          </li>
          {mobileSecondRowDropdown && (
            <ul className="flex flex-col items-center gap-3 text-lg">
              <li className="px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer">Option 1</li>
              <li className="px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer">Option 2</li>
              <li className="px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer">Option 3</li>
            </ul>
          )}

          {/* Book a Call Button */}
          {token && (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate("/form");
              }}
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors w-full mt-4"
            >
              Book a Call
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
