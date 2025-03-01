import React from "react";
import Navbar from "../components/Navbar";

const SpinazieRecept = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-lg max-w-lg w-full mx-auto mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">Recept</h1>
        <div className="space-y-4">
          
          <div className="space-y-2">
            <p class="font-bold">Dit recept is momenteel niet beschikbaar!</p>
          
           
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinazieRecept;
