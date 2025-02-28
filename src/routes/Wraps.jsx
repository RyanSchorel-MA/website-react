import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Dagmenu = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Dagmenu</h1>
          <p className="text-lg text-center text-gray-600 mb-4">Wraps</p>

          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <h2 className={`font-bold text-lg ${item.color}`}>{item.title}</h2>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {item.items.map((food, i) => (
                    <li key={i}>{food}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["200 gr kwark", "30 gr granola", "75 gr mangostukjes"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["250 gr fruitsalade van fruit naar keuze"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met magere vleeswaren en rauwkost", "1 snee brood met smeerkaas en rauwkost", "200 ml melk"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["250 gr rauwkostsalade met dressing naar keuze"] },
  { title: "Diner", color: "text-red-700", items: ["Turkse Pizza"] },
  { title: "Snack", color: "text-red-800", items: ["40 gr hazelnoten"] },
];

export default Dagmenu;
