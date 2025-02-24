import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming this is the correct path

function App() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to another page (you can replace '/spinazie' with the appropriate route)
    navigate('/spinazie');
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-6">Home</h1>
      <div className="flex justify-center space-x-4 mt-4">
        <button 
          onClick={handleButtonClick} 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Ga naar Ontbijt
        </button>
        {/* You can add more buttons here if necessary */}
      </div>
    </div>
  );
}

export default App;
