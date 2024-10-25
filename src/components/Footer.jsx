import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"; // Import necessary social media icons

const Footer = () => {
  useEffect(() => {
    // Inject the Collect chat widget script dynamically (if needed later)
  }, []);

  return (
    <footer className="bg-gray-100">
      {/* Subscribe Section */}
      <div className="w-full bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Subscribe To Our News Letter</h3>
          <p className="text-gray-600 mb-6">
            Get College Notifications, Exam Notifications, and News Updates
          </p>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email id"
              className="px-4 py-3 border border-gray-300 rounded-lg w-full md:w-64"
            />
            <input
              type="text"
              placeholder="Enter your mobile no"
              className="px-4 py-3 border border-gray-300 rounded-lg w-full md:w-64"
            />
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg w-full md:w-64"
              defaultValue=""
            >
              <option value="" disabled>
                Choose your course
              </option>
              <option value="MBA">MBA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="Medical">Medical</option>
              {/* Add more options as needed */}
            </select>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="w-full bg-gray-200 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-gray-700">
          <div>
            <h4 className="text-lg font-semibold mb-4">Top Colleges</h4>
            <ul className="space-y-2">
              <li>MBA</li>
              <li>B.Tech/B.E</li>
              <li>MCA</li>
              <li>BCA</li>
              <li>M.Tech</li>
              <li>MA</li>
              <li>BA</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Top Universities</h4>
            <ul className="space-y-2">
              <li>Engineering</li>
              <li>Management</li>
              <li>Medical</li>
              <li>Law</li>
              <li>Commerce</li>
              <li>Science</li>
              <li>Arts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Top Exams</h4>
            <ul className="space-y-2">
              <li>CAT</li>
              <li>GATE</li>
              <li>JEE-Main</li>
              <li>NEET</li>
              <li>XAT</li>
              <li>CLAT</li>
              <li>MAT</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Abroad</h4>
            <ul className="space-y-2">
              <li>Canada</li>
              <li>USA</li>
              <li>UK</li>
              <li>UAE</li>
              <li>Australia</li>
              <li>Germany</li>
              <li>Sweden</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Board Exams</h4>
            <ul className="space-y-2">
              <li>CBSE Class 12</li>
              <li>CBSE Class 10</li>
              <li>ICSE Class 12</li>
              <li>ICSE Class 10</li>
              <li>State Boards</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section with Social Media Icons */}
      <div className="w-full bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2024 InnovNex - All Rights Reserved.</p>

          {/* Social Media Icons */}
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
