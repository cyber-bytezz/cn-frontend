import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleDropdownClick = () => {
    setMobileDropdown(!mobileDropdown);
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-b-gray-300">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img className="w-25 h-20 rounded-full mr-3" src="/logo2.png" alt="Logo" />
      </div>

      {/* Main Menu */}
      <div className="hidden md:flex flex-col items-center gap-2 font-medium">
        {/* First Row */}
        <ul className="flex items-center justify-center gap-10">
          <NavLink to="/" className="px-3 py-2 hover:text-primary hover:underline">
            HOME
          </NavLink>
          <NavLink to="/Collages" className="px-3 py-2 hover:text-primary hover:underline">
            ALL COLLEGES
          </NavLink>
          <NavLink to="/about" className="px-3 py-2 hover:text-primary hover:underline">
            ABOUT
          </NavLink>
          <NavLink to="/contact" className="px-3 py-2 hover:text-primary hover:underline">
            CONTACT
          </NavLink>
        </ul>

        {/* Second Row (Specialities with Improved Alignment) */}
        <ul className="flex items-center justify-center gap-4 mt-2">
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
            <li
              key={speciality}
              className="px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs font-medium transition-all"
            >
              <NavLink to={`/Collages/${speciality.replace(" ", "_")}`}>
                {speciality}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Book a Call Button */}
      <div className="flex items-center gap-4">
        {token && (
          <button
            onClick={() => navigate("/form")}
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Book a Call
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="Menu" />

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
    </div>
  );
};

export default Navbar;
