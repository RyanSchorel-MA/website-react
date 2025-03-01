import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar"; 

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
 
    navigate(`/${path}`);
  };

  return (
    <div>
      <Navbar />
      <div className="text-center text-black mt-12"> 
        <h1 className="text-5xl font-extrabold mb-6 text-shadow-lg">
          Lekker Gezond Eten 2025
        </h1>
        <p className="text-2xl italic mb-8">
          Ontdek recepten & dagmenu's!
        </p>
        <div className="flex justify-center space-x-6">
          <button 
            onClick={() => handleButtonClick("dashboard")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-3 px-6 rounded-lg transition duration-300"
          >
            Klik Hier!
          </button>
      
        </div>
      </div>
    </div>
  );
}

export default App;
