import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Ontbijtmenu = () => {
  const navigate = useNavigate();

  const handleButtonClick = (menu) => {
    // Navigeren naar de specifieke pagina, bijvoorbeeld '/spinazie' of andere menu's
    navigate(`/${menu}`);
  };

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Ontbijtmenu</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Spinazie</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("spinazie")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Menu: 2</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("menu-2")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Menu: 3</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("menu-3")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Menu: 4</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("menu-4")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Menu: 5</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("menu-5")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Menu: 6</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("menu-6")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Menu: 7</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("menu-7")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center">Menu: 8</h2>
            <p className="text-gray-600 text-center mt-2">Hier komt een recept</p>
            <button
              onClick={() => handleButtonClick("menu-8")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              Bekijk Recept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ontbijtmenu;
