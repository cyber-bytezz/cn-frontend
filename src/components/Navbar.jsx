import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false); // Track active state

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo and Company Name */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          className="w-14 h-14 rounded-full mr-3" // Updated size and shape
          src="https://github.com/shadcn.png"
          alt="Logo"
        />
        <span className="text-xl font-semibold text-gray-800">CN</span>
      </div>

      {/* Desktop Menu */}
      <ul className="md:flex items-start gap-5 font-medium hidden">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/Collages">
          <li className="py-1">ALL COLLAGES</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        {/* Speciality Dropdown Menu */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => !dropdownActive && setShowDropdown(false)} // Close on mouse leave if not active
          onClick={handleDropdownClick} // Handle clicks to keep the dropdown stable
        >
          <NavLink to="">
            <li className="py-1">SPECIALITY</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          {/* Dropdown Items */}
          {(showDropdown || dropdownActive) && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Engineering">Engineering</NavLink>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Management">Management</NavLink>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Medical">Medical</NavLink>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Arts & Humanities">
                  Arts & Humanities
                </NavLink>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Agriculture">Agriculture</NavLink>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Law">Law</NavLink>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Pharmacy">Pharmacy</NavLink>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <NavLink to="/Collages/Allied Health Sciences">
                  Allied Health Sciences
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {/* Book a Call Button (Always Visible) */}
        {token && (
          <button
            onClick={() => navigate("/book-call")}
            className="bg-primary text-white px-6 py-3 rounded-full font-medium text-sm md:block" // Increased padding and font size
          >
            Book a Call
          </button>
        )}

        {/* Hamburger Menu Icon for Mobile View */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu"
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img src={assets.logo} className="w-36" alt="Logo" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-7"
              alt="Close"
            />
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded-full inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/Collages">
              <p className="px-4 py-2 rounded-full inline-block">
                ALL Collages
              </p>
            </NavLink>

            {/* Dropdown Specialities in Mobile */}
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/Collages/Engineering"
            >
              <p className="px-4 py-2 rounded-full inline-block">Engineering</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/Collages/Management"
            >
              <p className="px-4 py-2 rounded-full inline-block">Management</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/Collages/Medical"
            >
              <p className="px-4 py-2 rounded-full inline-block">Medical</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/Collages/Arts & Humanities"
            >
              <p className="px-4 py-2 rounded-full inline-block">
                Arts & Humanities
              </p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/Collages/Agriculture"
            >
              <p className="px-4 py-2 rounded-full inline-block">Agriculture</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/Collages/Law">
              <p className="px-4 py-2 rounded-full inline-block">Law</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/Collages/Pharmacy"
            >
              <p className="px-4 py-2 rounded-full inline-block">Pharmacy</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/Collages/Allied Health Sciences"
            >
              <p className="px-4 py-2 rounded-full inline-block">
                Allied Health Sciences
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded-full inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded-full inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
