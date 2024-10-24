import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import RelatedDoctors from "../components/RelatedDoctors";
import Form from "./Form";
import { FaStar, FaStarHalfAlt, FaRegStar, FaBuilding, FaRegCalendarAlt } from "react-icons/fa"; // Icons import

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

  const fetchDocInfo = () => {
    const docInfo = Collages.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
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
    const date = docSlots[slotIndex][0].datetime;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const slotDate = `${day}_${month}_${year}`;
    setAppointmentDetails({ slotDate, slotTime, docName: docInfo.name });
    setIsFormVisible(true);
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

  return docInfo ? (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      {/* College Details */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:flex md:gap-8 transform transition duration-500 hover:scale-105">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            className="w-full h-64 md:h-full object-cover rounded-t-md md:rounded-l-md"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        <div className="p-6 md:p-10 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              {docInfo.name}
              <img
                className="ml-2 w-5 inline-block"
                src={assets.verified_icon}
                alt="Verified"
                title="Verified"
              />
            </h2>
          </div>
          <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
            <span>
              {docInfo.degree} - {docInfo.speciality}
            </span>
            <button className="px-4 py-1 text-xs border border-indigo-600 text-indigo-600 rounded-full transition-all hover:bg-indigo-600 hover:text-white">
              {docInfo.experience} Years Experience
            </button>
          </div>

          {/* About */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">About</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {docInfo.about}
            </p>
          </div>

          {/* Fields */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Array.from({ length: 8 }, (_, i) =>
              docInfo[`field${i + 1}`] ? (
                <span
                  key={i}
                  className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs"
                >
                  {docInfo[`field${i + 1}`]}
                </span>
              ) : null
            )}
          </div>

          {/* Fee */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-700">
              Fees:{" "}
              <span className="text-indigo-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Placements Section */}
      <div className="mt-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Placements
        </h3>

        {/* Year Selector */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedYear(2023)}
            className={`px-6 py-2 rounded-full transition-all font-semibold ${
              selectedYear === 2023
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            2023
          </button>
          <button
            onClick={() => setSelectedYear(2024)}
            className={`px-6 py-2 rounded-full transition-all font-semibold ${
              selectedYear === 2024
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            2024
          </button>
        </div>

        {/* Placement Details Based on Selected Year */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            {selectedYear} Placement Highlights at {docInfo.name}
          </h4>

          <p className="text-gray-700 leading-relaxed mb-8">
            {docInfo.placement[selectedYear].description}
          </p>

          {/* Top Recruiters */}
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Top Recruiters</h4>
          <p className="text-gray-600 mb-6">
            {docInfo.placement[selectedYear].topRecruiters.join(", ")}.
          </p>

          {/* Career Resource Center */}
          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Career Resource Center
          </h4>
          <p className="text-gray-700 mb-6">
            {docInfo.placement[selectedYear].careerCenter}
          </p>

          {/* Placement Statistics */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Placement Statistics
            </h4>
            <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
              <div>
                <p className="font-semibold text-gray-700">Total number of Offers</p>
                <p className="text-lg font-bold text-indigo-600">
                  {docInfo.placement[selectedYear].totalOffers} +
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Top Recruiters</p>
                <p className="text-sm text-gray-600">
                  {docInfo.placement[selectedYear].topRecruiters.slice(0, 5).join(", ")} and more...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses & Fees Section */}
      <div className="mt-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Courses And Fees
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {docInfo.courses.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {course.name}
                </h4>
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-4">
                  <span className="flex items-center space-x-1">
                    <FaRegCalendarAlt className="text-blue-500" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaBuilding className="text-green-500" />
                    <span>{course.type}</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-indigo-600">
                  {currencySymbol}
                  {course.fees}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-all duration-300">
                  Apply Now
                </button>
              </div>
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
  ) : null;
};

export default Appointment;
