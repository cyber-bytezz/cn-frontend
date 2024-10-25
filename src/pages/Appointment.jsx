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
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:flex md:gap-8 transition-transform duration-500 hover:scale-105">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-2xl"
            src={docInfo?.image}
            alt={docInfo?.name}
          />
        </div>

        <div className="p-6 md:p-10 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
              {docInfo?.name}
              <img
                src={assets.verified_icon}
                alt="Verified"
                className="ml-2 w-6 inline-block"
                title="Verified"
              />
            </h2>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-4">
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((star, i) => (
                <FaStar
                  key={i}
                  className={i < docInfo.rating ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="ml-2 text-gray-700">
              {`[${docInfo.rating}] Based on ${docInfo.reviews} Reviews`}
            </p>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">About</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {docInfo?.about}
            </p>
          </div>

          {/* Fields Section */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.keys(docInfo)
              .filter((key) => key.startsWith("field"))
              .map((key, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs shadow-sm"
                >
                  {docInfo[key]}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-4 my-10">
        <button
          className={`px-6 py-2 font-semibold rounded-full transition-all ${
            activeTab === "overview"
              ? "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white shadow-lg"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-full transition-all ${
            activeTab === "coursesFees"
              ? "bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white shadow-lg"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
          onClick={() => handleTabClick("coursesFees")}
        >
          Courses & Fees
        </button>
        <button
          className={`px-6 py-2 font-semibold rounded-full transition-all ${
            activeTab === "placements"
              ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white shadow-lg"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
          onClick={() => handleTabClick("placements")}
        >
          Placements
        </button>
      </div>

      {/* Overview Content */}
      {activeTab === "overview" && (
        <div className="college-overview mt-10 space-y-10">
          {/* College Overview */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Overview</h3>
            <p>{docInfo.about}</p>
          </div>

          {/* Affiliations & Approvals Table */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Affiliations & Approvals</h3>
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-4 font-semibold">College</th>
                  <th className="p-4 font-semibold">Affiliation</th>
                  <th className="p-4 font-semibold">Approval</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">{docInfo.name}</td>
                  <td className="p-4">{docInfo.anothername}</td>
                  <td className="p-4">{docInfo.agre}</td>
                </tr>
                <tr>
                  <td className="p-4">{docInfo.name}</td>
                  <td className="p-4">{docInfo.anothername}</td>
                  <td className="p-4">{docInfo.agre}</td>
                </tr>
                <tr>
                  <td className="p-4">{docInfo.name}</td>
                  <td className="p-4">{docInfo.anothername}</td>
                  <td className="p-4">{docInfo.agre}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rankings & Awards */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Rankings & Awards</h3>
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-4 font-semibold">Year</th>
                  <th className="p-4 font-semibold">Award</th>
                </tr>
              </thead>
              <tbody>
                {docInfo.rankings &&
                  docInfo.rankings.map((ranking, index) => (
                    <tr key={index}>
                      <td className="p-4">{ranking.year}</td>
                      <td className="p-4">{ranking.award}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Facilities */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Facilities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {docInfo.facilities &&
                docInfo.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <img
                      src={facility.icon}
                      alt={facility.name}
                      className="w-12 h-12"
                    />
                    <span className="text-gray-700">{facility.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* College Highlights */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Highlights</h3>
            <table className="min-w-full bg-white border rounded-lg">
              <tbody>
                {Object.entries(docInfo.highlights || {}).map(
                  ([key, value], index) => (
                    <tr className="border-b" key={index}>
                      <td className="p-4 font-semibold">{key}</td>
                      <td className="p-4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Courses & Fees Section */}
      {activeTab === "coursesFees" && (
        <div className="courses-fees mt-10 space-y-10">
          {docInfo.courses?.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:scale-105">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{course.name}</h3>
                <p className="text-orange-600 text-lg font-bold">{course.fees}</p>
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

      {/* FAQ Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
        <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {docInfo.questions?.map((q, index) => (
            <div key={index} className="border-b">
              <div className="flex justify-between items-center py-2 cursor-pointer" onClick={() => toggleFaq(index)}>
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
