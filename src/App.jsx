import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming this is the correct path

function App() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to another page (you can replace '/dashboard' with the appropriate route)
    navigate('/spinazie');
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl">Home</h1>
      <button 
        onClick={handleButtonClick} 
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Ga naar Ontbijt
      </button>
    </div>
  );
}

export default App;
