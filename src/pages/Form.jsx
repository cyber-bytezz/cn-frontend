import React, { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Form = ({ appointmentDetails }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    stream: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.college) newErrors.college = "College is required";
    if (!formData.stream) newErrors.stream = "Stream is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const combinedData = {
      ...formData,
      ...appointmentDetails,
    };

    try {
      const response = await fetch("https://formspree.io/f/mldeezow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setSubmitStatus("Form submitted successfully!");
        setErrors({});
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          college: "",
          stream: "",
        });
      } else {
        setSubmitStatus("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Error submitting form");
    }
  };

  // Redirect to home page after 3 seconds on successful submission
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 3000); // 3-second delay

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isSubmitted, navigate]);

  // Show thank you message if form is submitted
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Thank you for submitting!
          </h2>
          <p className="text-center text-gray-700">
            We will contact you soon. Redirecting to home...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Book a Call With Us!
        </h2>
        {submitStatus && (
          <p
            className={`text-${
              isSubmitted ? "green" : "red"
            }-500 text-center mb-4`}
          >
            {submitStatus}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlineUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlineUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlinePhone className="text-gray-400 mr-2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
            )}
          </div>

          {/* College */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="college"
            >
              College
            </label>
            <div className="flex items-center border-b border-gray-300">
              <BsBuilding className="text-gray-400 mr-2" />
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            {errors.college && (
              <p className="text-red-500 text-xs italic">{errors.college}</p>
            )}
          </div>

          {/* Stream */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="stream"
            >
              Stream
            </label>
            <div className="flex items-center border-b border-gray-300">
              <MdSchool className="text-gray-400 mr-2" />
              <input
                type="text"
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            {errors.stream && (
              <p className="text-red-500 text-xs italic">{errors.stream}</p>
            )}
          </div>

          {/* Display Appointment Details */}
          <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-indigo-600 mb-2 flex items-center">
              <span className="mr-2 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10m-2 10a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Appointment Date
            </h3>
            <p className="text-gray-800 text-sm">
              <span className="font-semibold">
                {(() => {
                  const [day, month, year] =
                    appointmentDetails.slotDate.split("_");
                  const validDate = new Date(`${year}-${month}-${day}`);
                  return validDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });
                })()}
              </span>
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-4 mb-2 flex items-center">
              <span className="mr-2 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                </svg>
              </span>
              Appointment Time
            </h3>
            <p className="text-gray-800 text-sm">
              <span className="font-semibold">
                {appointmentDetails.slotTime}
              </span>
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-4 mb-2 flex items-center">
              <span className="mr-2 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              College
            </h3>
            <p className="text-gray-800 text-sm">
              <span className="font-semibold">
                {appointmentDetails.docName}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
