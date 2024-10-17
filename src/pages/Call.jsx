import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; // Icons for user, email, and phone
import { BsBuilding } from 'react-icons/bs'; // Icon for college
import { MdSchool } from 'react-icons/md'; // Icon for stream

const Call = () => {
    const [formData, setCallData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        college: '',
        stream: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCallData({ ...formData, [name]: value });
    };

    const validateCall = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone Number is required';
        if (!formData.college) newErrors.college = 'College is required';
        if (!formData.stream) newErrors.stream = 'Stream is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateCall();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Send data to Google Apps Script
        try {
            const response = await fetch('YOUR_WEB_APP_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setIsSubmitted(true);
                setSubmitStatus('Call submitted successfully!');
                setErrors({});
                setCallData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    college: '',
                    stream: ''
                });
            } else {
                setSubmitStatus('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('Error submitting form');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md fade-in">
                <h2 className="text-2xl font-bold text-center mb-6">Book a Call With Us!</h2>
                {submitStatus && <p className={`text-${isSubmitted ? 'green' : 'red'}-500 text-center mb-4`}>{submitStatus}</p>}
                <form onSubmit={handleSubmit}>
                    {/* Call Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
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
                        {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
                    </div>
                    {/* Repeat for other fields... */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
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
                        {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
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
                        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="college">
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
                        {errors.college && <p className="text-red-500 text-xs italic">{errors.college}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stream">
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
                        {errors.stream && <p className="text-red-500 text-xs italic">{errors.stream}</p>}
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

export default Call;