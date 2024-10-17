import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collages from './pages/Collages';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Form from './pages/Form';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Footer from './components/Footer';

const App = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    slotDate: '',
    slotTime: '',
    docName: 'Looking for College',
  });

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();

    // Format the date as DD_MM_YYYY
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}_${
      (currentDate.getMonth() + 1).toString().padStart(2, '0')
    }_${currentDate.getFullYear()}`;

    // Format the time as HH:MM AM/PM
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    return { formattedDate, formattedTime };
  };

  // This will run when the component mounts (or user clicks, depending on logic)
  useEffect(() => {
    const { formattedDate, formattedTime } = getCurrentDateTime();
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      slotDate: formattedDate,
      slotTime: formattedTime,
    }));
  }, []);

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collages" element={<Collages />} />
        <Route path="/Collages/:speciality" element={<Collages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/form" element={<Form appointmentDetails={appointmentDetails} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
