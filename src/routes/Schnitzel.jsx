import React from "react";
import Navbar from "../components/Navbar";

const Schnitzel = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-lg max-w-lg w-full mx-auto mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">Schnitzel</h1>
        <div className="space-y-4">
          <p className=" text-lg">Dagmenu</p>
          <div className="space-y-2">
            <p class="font-bold">Menu 1</p>
            <div className="space-y-1">
              <h2 className="font-bold text-yellow-500">Ontbijt</h2>
              <ul className="list-inside list-disc">
                <li>2 crackers vleeswaren</li>
                <li>1 cracker jam</li>
                <li>Melk</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h2 className="text-orange-500 font-bold">Tussendoortje</h2>
              <ul className="list-inside list-disc">
                <li>Druiven</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h2 className="text-red-500 font-bold">Lunch</h2>
              <ul className="list-inside list-disc">
                <li>2 brood appelstroop</li>
                <li>1 brood groentespread</li>
                <li>rauwkost</li>
                <li>kiwi</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h2 className="text-red-600 font-bold">Snack</h2>
              <ul className="list-inside list-disc">
                <li>Ei</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h2 className="text-red-700 font-bold">Diner</h2>
              <ul className="list-inside list-disc">
                <li>Spinazie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schnitzel;
