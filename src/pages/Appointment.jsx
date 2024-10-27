import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import RelatedDoctors from "../components/RelatedDoctors";
import Form from "./Form";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaBuilding,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Icons import

const Appointment = () => {
  const { docId } = useParams();
  const { Collages, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const navigate = useNavigate();

  const [selectedYear, setSelectedYear] = useState(2023);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({});
  const [activeTab, setActiveTab] = useState("overview"); // Active tab state
  const [faqOpen, setFaqOpen] = useState([]); // Keep track of open FAQs

  const fetchDocInfo = () => {
    const docInfo = Collages.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    setFaqOpen(new Array(docInfo.questions.length).fill(false)); // Initialize FAQ state
  };

  const toggleFaq = (index) => {
    const updatedFaqOpen = [...faqOpen];
    updatedFaqOpen[index] = !updatedFaqOpen[index]; // Toggle the open state for a specific FAQ
    setFaqOpen(updatedFaqOpen);
  };

  const getAvailableSlots = () => {
    setDocSlots([]);
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);
      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = () => {
    if (docSlots.length > 0 && docSlots[slotIndex]?.length > 0) {
      const date = docSlots[slotIndex][0].datetime;
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const slotDate = `${day}_${month}_${year}`;
      setAppointmentDetails({ slotDate, slotTime, docName: docInfo.name });
      setIsFormVisible(true);
    }
  };

  useEffect(() => {
    if (Collages.length > 0) {
      fetchDocInfo();
    }
  }, [Collages, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  if (!docInfo) {
    return <div>Loading...</div>; // Ensure data is loaded before rendering
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      {/* College Details Section */}
      <div className="max-w-6xl mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-6 transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        {/* Image Container */}
        <div className="w-full md:w-1/3 h-40 md:h-auto relative overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={docInfo?.image}
            alt={docInfo?.name}
          />
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
            <FaBuilding className="text-indigo-600 w-6 h-6" />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-between p-4 md:p-6">
          {/* Title Section */}
          <div className="flex items-start justify-between">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
              {docInfo?.name}
            </h2>
            <img
              src={assets.verified_icon}
              alt="Verified"
              className="ml-2 w-5 h-5 md:w-6 md:h-6"
              title="Verified"
            />
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center text-sm text-gray-700 mt-2">
            <div className="flex items-center text-yellow-500 space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < docInfo.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="ml-2">{`[${docInfo.rating}] Based on ${docInfo.reviews} Reviews`}</p>
          </div>

          {/* Button Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {["place", "est", "anothername", "agre"].map((field, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs border border-indigo-600 text-indigo-600 rounded-full transition-all hover:bg-indigo-600 hover:text-white shadow-sm"
              >
                {docInfo[field]}
              </span>
            ))}
          </div>

          {/* About Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">About</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300 ease-in-out">
              {docInfo?.about}
            </p>
          </div>

          {/* Fields Section */}
          <div className="flex flex-wrap gap-2 mt-3">
            {Object.keys(docInfo)
              .filter((key) => key.startsWith("field"))
              .map((key, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs shadow-md"
                >
                  {docInfo[key]}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 my-8 md:my-10">
        <button
          className={`px-4 md:px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
            activeTab === "overview"
              ? "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </button>
        <button
          className={`px-4 md:px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
            activeTab === "coursesFees"
              ? "bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick("coursesFees")}
        >
          Courses & Fees
        </button>
        <button
          className={`px-4 md:px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
            activeTab === "placements"
              ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick("placements")}
        >
          Placements
        </button>
        <button
          className={`px-4 md:px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
            activeTab === "reviews"
              ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Overview Content */}
      {activeTab === "overview" && (
        <div className="container mx-auto p-4 sm:p-8">
        {/* Overview Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            Overview
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {docInfo.about}
          </p>
        </div>
      
        {/* Affiliations & Approvals Table */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-6 sm:mt-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            Affiliations & Approvals
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 sm:p-4 text-sm sm:text-lg font-semibold text-gray-800">
                    College
                  </th>
                  <th className="p-3 sm:p-4 text-sm sm:text-lg font-semibold text-gray-800">
                    Affiliation
                  </th>
                  <th className="p-3 sm:p-4 text-sm sm:text-lg font-semibold text-gray-800">
                    Approval
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition-colors duration-300"
                  >
                    <td className="p-3 sm:p-4 text-sm sm:text-lg text-gray-700">
                      {docInfo.name}
                    </td>
                    <td className="p-3 sm:p-4 text-sm sm:text-lg text-gray-700">
                      {docInfo.anothername}
                    </td>
                    <td className="p-3 sm:p-4 text-sm sm:text-lg text-gray-700">
                      {docInfo.agre}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
        {/* Rankings & Awards Section */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-6 sm:mt-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            Rankings & Awards
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 sm:p-4 text-sm sm:text-lg font-semibold text-gray-800">
                    Year
                  </th>
                  <th className="p-3 sm:p-4 text-sm sm:text-lg font-semibold text-gray-800">
                    Award
                  </th>
                </tr>
              </thead>
              <tbody>
                {docInfo.rankings &&
                  docInfo.rankings.map((ranking, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-colors duration-300"
                    >
                      <td className="p-3 sm:p-4 text-sm sm:text-lg text-gray-700">
                        {ranking.year}
                      </td>
                      <td className="p-3 sm:p-4 text-sm sm:text-lg text-gray-700">
                        {ranking.award}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      
        {/* Facilities Section with Horizontal Scroll on Mobile */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-6 sm:mt-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            Facilities
          </h3>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-2">
            {docInfo.facilities &&
              docInfo.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center space-y-3 p-4 transform transition-all duration-300 hover:scale-110"
                >
                  {/* Facility Icon */}
                  <img
                    src={facility.icon}
                    alt={facility.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
                  />
      
                  {/* Facility Name */}
                  <span className="text-base sm:text-lg font-semibold text-gray-700 text-center">
                    {facility.name}
                  </span>
      
                  {/* Facility Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(facility.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-gray-600 text-sm sm:text-base">
                      {facility.rating}/5
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      
      )}

      {/* Courses & Fees Section */}
      {activeTab === "coursesFees" && (
        <div className="courses-fees mt-10 space-y-10">
          {docInfo.courses?.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{course.name}</h3>
                <p className="text-orange-600 text-lg font-bold">
                  {course.fees}
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <span>{course.duration}</span>
                <span className="mx-2">|</span>
                <span>{course.type}</span>
                <span className="mx-2">|</span>
                <span>{course.category}</span>
              </div>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
                Apply for this Course
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Placements Section */}
      {activeTab === "placements" && (
        <div className="placements-section mt-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Placement Highlights
          </h2>
          <div className="flex items-center justify-center space-x-4 my-8">
            <button
              onClick={() => setSelectedYear(2023)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedYear === 2023
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              2023
            </button>
            <button
              onClick={() => setSelectedYear(2024)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedYear === 2024
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              2024
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedYear} Placement Highlights at {docInfo.name}
            </h4>

            <p className="text-gray-700 leading-relaxed mb-8">
              {docInfo.placement[selectedYear]?.description}
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Top Recruiters
            </h4>
            <p className="text-gray-600 mb-6">
              {docInfo.placement[selectedYear]?.topRecruiters.join(", ")}.
            </p>

            <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
              <div>
                <p className="font-semibold text-gray-700">
                  Total number of Offers
                </p>
                <p className="text-lg font-bold text-indigo-600">
                  {docInfo.placement[selectedYear]?.totalOffers} +
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Section */}
      {activeTab === "reviews" && (
        <div className="reviews-section mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Reviews</h2>
          {/* Review Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h4 className="text-lg font-semibold">447 Ratings</h4>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaRegStar className="text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(4.5/5)</span>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h4 className="text-lg font-semibold">351 Excellent Ratings</h4>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaRegStar className="text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(4.0/5)</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h4 className="text-lg font-semibold">266 Good Ratings</h4>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalfAlt className="text-yellow-500" />
                <FaRegStar className="text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(3.8/5)</span>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h4 className="text-lg font-semibold">138 Average Ratings</h4>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalfAlt className="text-yellow-500" />
                <FaRegStar className="text-gray-300" />
                <FaRegStar className="text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(3.0/5)</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Student Reviews
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Academic:</strong> 7/10
              </p>
              <p className="text-sm text-gray-700">
                <strong>Faculty:</strong> 8/10
              </p>
              <p className="text-sm text-gray-700">
                <strong>Infrastructure:</strong> 7/10
              </p>
              <p className="text-sm text-gray-700">
                <strong>Accommodation:</strong> 7/10
              </p>
              <p className="text-sm text-gray-700">
                <strong>Placement:</strong> 9/10
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Students’ Reviews
              </h3>
              <div className="space-y-4">
                {[
                  {
                    review:
                      "The college has an amazing campus and the faculty is very supportive. The placement opportunities are excellent, especially for CSE and ECE students.",
                    student: "John Doe, Class of 2023",
                  },
                  {
                    review:
                      "Great infrastructure and hostel facilities. The academic curriculum is well-structured, but the extracurricular activities could be improved.",
                    student: "Sarah Lee, Class of 2022",
                  },
                  {
                    review:
                      "The faculty is very knowledgeable and experienced. The college has a good placement record, but the cafeteria food could be better.",
                    student: "Michael Smith, Class of 2021",
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-100 rounded-lg shadow-sm"
                  >
                    <p className="text-gray-700 font-semibold">
                      {review.review}
                    </p>
                    <span className="block text-right text-sm text-gray-600 mt-2">
                      — {review.student}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
        <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {docInfo.questions?.map((q, index) => (
            <div key={index} className="border-b">
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold">{q.question}</span>
                <span>{faqOpen[index] ? "−" : "+"}</span>
              </div>
              {faqOpen[index] && <p className="py-2">{q.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Booking Slots</h3>

        <div className="flex justify-center gap-4 mt-6 overflow-x-auto flex-nowrap px-4 py-2 scrollbar-hide">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center p-4 rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110 flex-shrink-0 ${
                  slotIndex === index
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="flex justify-center gap-4 mt-4 overflow-x-auto flex-nowrap px-4 py-2 scrollbar-hide">
          {docSlots.length > 0 &&
            docSlots[slotIndex]?.map((item, index) => (
              <span
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`px-4 py-2 cursor-pointer rounded-full transition-transform duration-300 transform hover:scale-110 flex-shrink-0 ${
                  item.time === slotTime
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 bg-white border"
                }`}
              >
                {item.time}
              </span>
            ))}
        </div>

        <button
          onClick={bookAppointment}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all hover:bg-indigo-700"
        >
          Book an Appointment
        </button>
      </div>

      {/* Form Section */}
      {isFormVisible && (
        <div className="mt-12">
          <Form appointmentDetails={appointmentDetails} />
        </div>
      )}

      {/* Related Colleges */}
      <div className="mt-12">
        <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
      </div>

      {/* Consultation */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Still Confused?</h3>
        <p className="text-gray-600 mt-4">
          Contact us today to book your consultation with our specialists.
        </p>
        <img
          src="https://miro.medium.com/v2/resize:fit:1224/0*3rQu3-4MaDINtwW6"
          alt="Consultation"
          className="mt-6 w-full max-w-lg mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={() => navigate("/form")}
          className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:bg-indigo-700"
        >
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default Appointment;
