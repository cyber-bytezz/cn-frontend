import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [mobileSecondRowDropdown, setMobileSecondRowDropdown] = useState(false);

  return (
    <div className="fixed-navbar flex flex-col items-center shadow-lg rounded-full px-8 py-4 w-full max-w-screen-lg mx-auto">
      {/* Navbar Container */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img
            className="w-40 h-auto transition-transform duration-300 transform hover:scale-105"
            src="/logonew.png"
            alt="Logo"
          />
        </div>

        {/* Main Menu for Desktop */}
        <div className="hidden md:flex flex-col items-center gap-2">
          {/* First Row (Specialities) */}
          <ul className="flex items-center justify-center gap-2 flex-wrap text-black te">
            {["Engineering", "Management", "Medical", "Arts & Humanities", "Agriculture", "Law", "Pharmacy"].map(
              (speciality) => (
                <li
                  key={speciality}
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary hover:text-white rounded-full font-medium transition-all"
                >
                  <NavLink to={`/Colleges/${speciality.replace(" ", "_")}`}>{speciality}</NavLink>
                </li>
              )
            )}
          </ul>

          {/* Second Row (Buttons with one dropdown) */}
          <ul className="flex items-center justify-center gap-2 mt-2">
            <li className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all cursor-pointer">
              All Courses
            </li>
            <li className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all cursor-pointer">
              Ranking
            </li>
            <li className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all cursor-pointer">
              Promotion
            </li>
          </ul>
        </div>

        {/* Book a Call Button */}
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
          <img onClick={() => setShowMenu(!showMenu)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="Menu" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-white z-20 transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-14 h-14 rounded-full mr-3" src="https://github.com/shadcn.png" alt="Logo" />
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className="w-7 cursor-pointer" alt="Close" />
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
              {["Engineering", "Management", "Medical", "Arts & Humanities", "Agriculture", "Law", "Pharmacy", "Allied Health Sciences"].map(
                (speciality) => (
                  <NavLink key={speciality} onClick={() => setShowMenu(false)} to={`/Colleges/${speciality.replace(" ", "_")}`}>
                    <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      {speciality}
                    </li>
                  </NavLink>
                )
              )}
            </ul>
          )}

          {/* Static Buttons in Mobile View */}
          <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
            All Courses
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
            Ranking
          </li>

          {/* Mobile Dropdown for Promotion Options */}
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

          {/* Book a Call Button in Mobile Menu */}
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
