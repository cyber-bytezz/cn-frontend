import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import RelatedDoctors from "../components/RelatedDoctors";
import Form from "./Form";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Appointment = () => {
  const { docId } = useParams();
  const { Collages, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  const navigate = useNavigate(); // Initialize useNavigate
  
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // Control form visibility
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
    setIsFormVisible(true); // Show form after selecting slot
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

  // Function to generate star ratings based on the rating value
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
          ))}
      </>
    );
  };

  return docInfo ? (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      {/* College Details */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex md:gap-8 transform transition duration-500 hover:scale-105">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            className="w-full h-64 md:h-full object-cover"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        <div className="p-6 md:p-10 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
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
            <button className="px-3 py-1 text-xs border border-indigo-600 text-indigo-600 rounded-full transition-all hover:bg-indigo-600 hover:text-white">
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

      {/* Highlights Section - Horizontal Scrollable */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Campus Rating</h3>
        <p className="text-sm text-gray-500 mt-2">
          Our commitment to quality education ensures student success and
          growth.
        </p>

        <div className="flex justify-center gap-6 mt-4 overflow-x-auto px-5 py-4 scrollbar-hide">
          {docInfo.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 min-w-[120px] px-2"
            >
              {highlight.icon ? (
                <img
                  src={highlight.icon}
                  alt={highlight.title}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xl">?</span>
                </div>
              )}
              <h3 className="text-sm font-medium mt-2">{highlight.title}</h3>

              {/* Rating stars */}
              <div className="flex mt-2">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex < Math.floor(highlight.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973h4.155c.958 0 1.358 1.224.588 1.81l-3.365 2.448 1.286 3.973c.3.921-.755 1.688-1.539 1.164L10 13.012l-3.372 2.283c-.784.523-1.838-.243-1.539-1.164l1.286-3.973-3.365-2.448c-.77-.586-.37-1.81.588-1.81h4.155L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Campus Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {docInfo.gallery?.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Campus Map</h3>
        <iframe
          src={docInfo.location}
          width="100%"
          height="400"
          className="mt-6 rounded-lg shadow-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Campus Map"
        ></iframe>
      </div>

      {/* Booking slots */}
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
          onClick={() => navigate("/form")} // Navigate to the form page on button click
          className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:bg-indigo-700"
        >
          Book a Call
        </button>
      </div>
    </div>
  ) : null;
};

export default Appointment;
