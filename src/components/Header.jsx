import React, { useState, useEffect } from "react";
import { collegesData } from "../assets/assets"; // Assume this contains a list of colleges with names and other data.

const Header = () => {
  // State to hold the current text being displayed and index
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // State to handle current background image index
  const [bgImageIndex, setBgImageIndex] = useState(0);

  // Array of phrases to cycle through
  const phrases = ["Find Over 3 Lakh Reviews in India", "Find Over 3 Lakh Colleges in India"];

  // Array of background images
  const bgImages = [
    "https://t4.ftcdn.net/jpg/06/30/76/11/360_F_630761173_Hkeqf7J3DYfICjQQaMkTiSpCOK7XOq1q.jpg",
    "https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg",
    "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  ];

  useEffect(() => {
    // Text typing effect
    const currentPhrase = phrases[loopNum % phrases.length];

    if (!isDeleting && currentText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(currentText.slice(0, -1));
        setTypingSpeed(50); // Faster deleting speed
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, loopNum, typingSpeed, phrases]);

  // Effect to automatically change background images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId);
  }, [bgImages.length]);

  // Filter colleges based on search term
  const filteredColleges = collegesData.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between bg-primary rounded-lg px-6 md:px-10 lg:px-20 h-auto md:h-[400px] lg:h-[600px]"
      style={{
        backgroundImage: `url(${bgImages[bgImageIndex]})`,
        backgroundSize: "cover",          // Ensures the image covers the entire area
        backgroundPosition: "center",     // Center the background image
        transition: "background-image 1s ease-in-out",  // Smooth transition between images
        width: "100%",                    // Make sure the container spans the full width
        height: "100%",                   // Full height for the background image
      }}
    >
      {/* Text and search container */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
        {/* Typing effect text */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          {currentText}
          <span className="blinking-cursor">|</span> {/* Simulate blinking cursor */}
        </p>
        <p className="text-lg text-white font-light">
          Explore colleges, exams, and more to make an informed decision.
        </p>
        {/* Search Input */}
        <div className="relative w-full mt-4">
          <input
            type="text"
            placeholder="Search for colleges, exams, courses and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
          {/* Displaying filtered results */}
          {searchTerm && (
            <div className="absolute w-full bg-white border-2 border-gray-300 mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredColleges.length > 0 ? (
                filteredColleges.map((college, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(college.name); // Fill input with clicked college
                    }}
                  >
                    {college.name}
                  </div>
                ))
              ) : (
                <div className="p-3 text-gray-500">No colleges found.</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image section (empty since background images handle the visual now) */}
      <div className="relative md:w-1/2"></div>
    </div>
  );
};

export default Header;
