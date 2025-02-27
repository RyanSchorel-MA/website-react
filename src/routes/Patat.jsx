import React from "react";
import Navbar from "../components/Navbar";

const Patat = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-lg max-w-lg w-full mx-auto mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">Patat</h1>
        <div className="space-y-4">
          <p className="text-lg">Dagmenu</p>

          <div className="space-y-2">
            <p className="font-bold">Menu 1</p>
            <div className="space-y-1">
              <h2 className="font-bold text-yellow-500">Ontbijt</h2>
              <ul className="list-inside list-disc">
                <li>200 ml melk
                </li>
                <li>40 gr havermout
                </li>
                <li>1 kiwi
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-orange-500 font-bold">Tussendoortje</h2>
              <ul className="list-inside list-disc">
                <li>2 rijstwafels met pindakaas
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-500 font-bold">Lunch</h2>
              <ul className="list-inside list-disc">
                <li>2 sneeën brood met zuivelspread en rauwkost
                </li>
                <li>1 snee brood met jam
                </li>
                <li>250 gr druiven

                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-600 font-bold">Tussendoortje</h2>
              <ul className="list-inside list-disc">
                <li>200 gr yoghurt
                </li>
                <li>25 gr granola
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-700 font-bold">Diner</h2>
              <ul className="list-inside list-disc">
                <li>Patat
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-800 font-bold">Snack</h2>
              <ul className="list-inside list-disc">
                <li>250 gr rauwkost
                </li>
                <li>1 gekookt ei
                </li>
              </ul>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Patat;
