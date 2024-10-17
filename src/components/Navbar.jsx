import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false); // New state for mobile dropdown

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
          className="w-25 h-20 rounded-full mr-3"
          src="/logo2.png"
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="md:flex items-start gap-5 font-medium hidden">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/Collages">
          <li className="py-1">ALL COLLEGES</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        {/* Speciality Dropdown Menu */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => !dropdownActive && setShowDropdown(false)}
          onClick={handleDropdownClick}
        >
          <NavLink to="">
            <li className="py-1">SPECIALITY</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>

          {/* Dropdown Items */}
          {(showDropdown || dropdownActive) && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
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
                <li key={speciality} className="py-2 px-4 hover:bg-gray-200">
                  <NavLink to={`/Collages/${speciality.replace(" ", "_")}`}>
                    {speciality}
                  </NavLink>
                </li>
              ))}
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
        {/* Book a Call Button (Visible in Both Desktop and Mobile) */}
        {token && (
          <button
            onClick={() => navigate("/form")}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
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
          <img
          className="w-14 h-14 rounded-full mr-3"
          src="https://github.com/shadcn.png"
          alt="Logo"
        />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-7"
              alt="Close"
            />
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center gap-5 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                HOME
              </li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/Collages">
              <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                ALL COLLEGES
              </li>
            </NavLink>

            {/* Mobile Dropdown Specialities */}
            <li
              className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              SPECIALITY
              {/* Toggle Dropdown Icon */}
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
                  <NavLink
                    key={speciality}
                    onClick={() => setShowMenu(false)}
                    to={`/Collages/${speciality.replace(" ", "_")}`}
                  >
                    <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      {speciality}
                    </li>
                  </NavLink>
                ))}
              </ul>
            )}

            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                ABOUT
              </li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <li className="px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                CONTACT
              </li>
            </NavLink>

            {/* Book a Call Button (Visible in Mobile Menu) */}
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
    </div>
  );
};

export default Navbar;
