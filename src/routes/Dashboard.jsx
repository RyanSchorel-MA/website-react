import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import spinazie from "../assets/spinazie.jpg";
import Andijvie from "../assets/Andijvie.jpg";
import Wraps from "../assets/Wraps.jpg";
import Bami from "../assets/Bami.jpg";
import Roti from "../assets/roti.avif";
import Darum from "../assets/Darum.jpg";
import Patat from "../assets/Patat.jpg";
import Pizza from "../assets/Pizza.jpg";

import Kibbeling from "../assets/Kibbeling.jpg";

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
        <h1 className="text-3xl font-bold text-center mb-6 ">Menu</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={spinazie}
              alt="Spinazie"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Spinazie</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              _
            </p>
            <button
              onClick={() => handleButtonClick("spinazie")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Wraps}
              alt="Wraps"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Wraps</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("wrapsrecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("wraps")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Andijvie}
              alt="Andijvie"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Andijvie</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              -
            </p>
            <button
              onClick={() => handleButtonClick("andijvie")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Bami}
              alt="Bami"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Bami</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("bamirecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("bami")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Roti}
              alt="Bami"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Roti</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("roti")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Darum}
              alt="Durum"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Durum</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("durum")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Kibbeling}
              alt="Kibbeling"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Kibbeling</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("kibbeling")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Pizza}
              alt="Pizza"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Pizza</h2>
            <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("pizza")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={Patat}
              alt="Patat"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Patat</h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("patat")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>


         


          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={menu}
              alt="Pannenkoeken"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Schnitzel
            </h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
              onClick={() => handleButtonClick("schnitzel")}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>
   

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={menu}
              alt="Pannenkoeken"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Nachoschotel
            </h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
             onClick={() => handleButtonClick("nachoschotel")}

              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={menu}
              alt="Pannenkoeken"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Shaksuka
            </h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
             onClick={() => handleButtonClick("shaksuka")}

              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={menu}
              alt="Pannenkoeken"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">Turkse Pizza
            </h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
             onClick={() => handleButtonClick("turksepizza")}

              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>




          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={menu}
              alt="Pannenkoeken"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2"> Aardappel Anders
            </h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
             onClick={() => handleButtonClick("aardappelanders")}

              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={menu}
              alt="Pannenkoeken"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2"> Beef Shanghai
            </h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
             onClick={() => handleButtonClick("beefshanghai")}

              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>



          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
            <img
              src={menu}
              alt="Pannenkoeken"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2"> Beef Tonight
            </h2>
              <p
              className="text-gray-600 text-center mt-2 mb-4 cursor-pointer hover:text-blue-500"
              onClick={() => handleButtonClick("spinazierecept")}
            >
              Klik hier voor het recept
            </p>
            <button
             onClick={() => handleButtonClick("beeftonight")}

              className="bg-blue-500 text-white p-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors"
            >
              Bekijk het dagmenu
            </button>
          </div>

         



        </div>
      </div>
    </div>
  );
};

export default Ontbijtmenu;
