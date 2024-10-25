import React, { useState, useEffect } from "react";
import { collegesData, specialityData } from "../assets/assets";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [searchTerm, setSearchTerm] = useState("");

  const [bgImageIndex, setBgImageIndex] = useState(0); // Track the current background image

  const [placeholder, setPlaceholder] = useState("Search for specialties...");

  const phrases = ["Find Over 3 Lakh Reviews", "Find Over 3 Lakh Colleges"];

  const bgImages = [
    "https://t4.ftcdn.net/jpg/06/30/76/11/360_F_630761173_Hkeqf7J3DYfICjQQaMkTiSpCOK7XOq1q.jpg",
    "https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg",
    "https://educatedquest.com/wp-content/uploads/2021/03/Image-2.jpeg",
  ];

  // Typing Effect Logic
  useEffect(() => {
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
        setTypingSpeed(50);
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        setTypingSpeed(150);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, loopNum, typingSpeed, phrases]);

  // Background Image Auto-Scroll Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Change background image every 3 seconds
    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Placeholder cycle for search bar
  useEffect(() => {
    const specialtiesExamples = specialityData.map((item) => item.speciality);
    let index = 0;
    const intervalId = setInterval(() => {
      setPlaceholder(`Try "${specialtiesExamples[index]}"`);
      index = (index + 1) % specialtiesExamples.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const filteredSpecialities = specialityData.filter((item) =>
    item.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between rounded-lg px-6 md:px-10 lg:px-20 h-auto md:h-[400px] lg:h-[600px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImages[bgImageIndex]})`, // Auto-scroll images
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Text and search container */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
        {/* Typing effect text */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight whitespace-nowrap"> 
          {currentText}
          <span className="blinking-cursor">|</span>
        </p>
        <p className="text-lg text-white font-light">
          Explore colleges, exams, and more to make an informed decision.
        </p>

        {/* Search Input */}
        <div className="relative w-full mt-4">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-12 py-4 border-2 border-gray-300 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />

          {/* Displaying filtered specialties */}
          {searchTerm && (
            <div className="absolute w-full bg-white border-2 border-gray-300 mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredSpecialities.length > 0 ? (
                filteredSpecialities.map((item, index) => (
                  <Link
                    to={`/Colleges/${item.speciality}`}
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSearchTerm(item.speciality)}
                  >
                    {item.speciality}
                  </Link>
                ))
              ) : (
                <div className="p-3 text-gray-500">No specialties found.</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="relative md:w-1/2"></div>
    </div>
  );
};

export default Header;
