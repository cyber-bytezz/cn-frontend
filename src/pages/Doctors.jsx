import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {/* Filter options */}
          <p
            onClick={() =>
              speciality === "Engineering"
                ? navigate("/doctors")
                : navigate("/doctors/Engineering")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Engineering" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Engineering
          </p>
          <p
            onClick={() =>
              speciality === "Management"
                ? navigate("/doctors")
                : navigate("/doctors/Management")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Management" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Management
          </p>
          <p
            onClick={() =>
              speciality === "Medical"
                ? navigate("/doctors")
                : navigate("/doctors/Medical")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Medical" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Medical
          </p>
          <p
            onClick={() =>
              speciality === "Arts & Humanities"
                ? navigate("/doctors")
                : navigate("/doctors/Arts & Humanities")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Arts & Humanities"
                ? "bg-indigo-100 text-black "
                : ""
            }`}
          >
            Arts & Humanities
          </p>
          <p
            onClick={() =>
              speciality === "Agriculture"
                ? navigate("/doctors")
                : navigate("/doctors/Agriculture")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Agriculture" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Agriculture
          </p>
          <p
            onClick={() =>
              speciality === "Law"
                ? navigate("/doctors")
                : navigate("/doctors/Law")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Law" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Law
          </p>
          <p
            onClick={() =>
              speciality === "Pharmacy"
                ? navigate("/doctors")
                : navigate("/doctors/Pharmacy")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pharmacy" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Pharmacy
          </p>
          <p
            onClick={() =>
              speciality === "Allied Health Sciences"
                ? navigate("/doctors")
                : navigate("/doctors/Allied Health Sciences")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Allied Health Sciences"
                ? "bg-indigo-100 text-black "
                : ""
            }`}
          >
            Allied Health Science
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-indigo-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-neutral-800 text-lg font-medium">
                  {item.name}
                </p>
                <p className="text-zinc-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Section Below */}
      <div className="mt-10 text-center">
  <h1 className="text-2xl font-bold">Schedule Your Appointment</h1>
  <p className="mt-4 text-gray-700">
    Contact us today to book your consultation with our specialists.
  </p>
  <img
    src="https://miro.medium.com/v2/resize:fit:1224/0*3rQu3-4MaDINtwW6"
    alt="Consultation"
    className="mx-auto my-4 w-[700px] h-auto rounded-lg"
  />
  <button className="mt-4 py-3 px-6 bg-indigo-600 text-white rounded-full transition-all hover:bg-indigo-700">
    Book a Call
  </button>
</div>

    </div>
  );
};

export default Doctors;
