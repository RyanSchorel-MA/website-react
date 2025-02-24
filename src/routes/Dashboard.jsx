import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import spinazie from "../assets/spinazie.jpg"; 
import menu from "../assets/menu.png"; 


const Ontbijtmenu = () => {
  const navigate = useNavigate();

  const handleButtonClick = (menu) => {
    navigate(`/${menu}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold text-center mb-6 ">Ontbijtmenu</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={spinazie}
              alt="Spinazie"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Spinazie</h2>
            <p className="text-gray-600 text-center mt-2 mb-4">Klik hier voor het recept</p>
            <button
              onClick={() => handleButtonClick("spinazie")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src="/path/to/wraps-image.jpg"
              alt="Wraps"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Wraps</h2>
            <p className="text-gray-600 text-center mt-2 mb-4">Klik hier voor het recept</p>
            <button
              onClick={() => handleButtonClick("wraps")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src="/path/to/Andijvie.jpg"
              alt="Andijvie"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Andijvie</h2>
            <p className="text-gray-600 text-center mt-2 mb-4">Klik hier voor het recept</p>
            <button
              onClick={() => handleButtonClick("andijvie")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk Recept
            </button>
          </div>

          {[...Array(29)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
              <img
                src={menu}
                alt={`Menu ${index + 3}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-center mb-2">Menu: {index + 4}</h2>
              <p className="text-gray-600 text-center mt-2 mb-4">Dit menu werkt nog niet!</p>
              <button
                onClick={() => handleButtonClick(`menu-${index + 3}`)}
                className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
              >
                Bekijk Recept
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ontbijtmenu;
