import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Dagmenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Dagmenu</h1>
          <p className="text-lg text-center text-gray-600 mb-4">Spinazie</p>

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
  { title: "Ontbijt", color: "text-yellow-500", items: ["2 crackers vleeswaren", "1 cracker jam", "Melk"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["Druiven"] },
  { title: "Lunch", color: "text-red-500", items: ["2 brood appelstroop", "1 brood groentespread", "Rauwkost", "Kiwi"] },
  { title: "Snack", color: "text-red-600", items: ["Ei"] },
  { title: "Diner", color: "text-red-700", items: ["Spinazie"] }
];

export default Dagmenu;
