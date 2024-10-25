import React, { useState, useEffect } from 'react'; // Make sure to include useEffect here
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collages from './pages/Collages';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Form from './pages/Form';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import PopUpForm from './components/PopUpForm';

const App = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    slotDate: '',
    slotTime: '',
    docName: 'Looking for College',
  });
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // State for pop-up visibility

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}_${
      (currentDate.getMonth() + 1).toString().padStart(2, '0')
    }_${currentDate.getFullYear()}`;
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return { formattedDate, formattedTime };
  };

  // Set appointment details on component mount
  useEffect(() => {
    const { formattedDate, formattedTime } = getCurrentDateTime();
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      slotDate: formattedDate,
      slotTime: formattedTime,
    }));

    // Automatically open pop-up after 5 seconds
    const timer = setTimeout(() => {
      setIsPopUpOpen(true);
    }, 5000);

    // Cleanup timer if the component is unmounted before 5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Function to close pop-up
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

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

      {/* Pop-up Form */}
      <PopUpForm isOpen={isPopUpOpen} onClose={closePopUp} />
    </div>
  );
};

export default App;
