import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import heroImage from "./assets/hero.jpeg"; 

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">

      <div className="relative h-full w-full flex items-center justify-center">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-10">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Lekker Gezond Eten 2025
          </h1>
          <p className="text-2xl italic mb-8">
            Ontdek recepten & dagmenu's!
          </p>
          <button 
            onClick={() => handleButtonClick("dashboard")}
            className="bg-[#e3a80d] hover:bg-yellow-600 text-white text-lg py-3 px-6 rounded-lg transition duration-300"
          >
            Klik Hier!
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#e3a80d] text-black py-4 mt-auto text-center ">
        <p className="text-sm">
        © 2025 Ryan Schorel · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
