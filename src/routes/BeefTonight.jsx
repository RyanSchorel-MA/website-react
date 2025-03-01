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
        
        {/* Menu 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Menu 1</h2>
          <p className="text-lg text-center text-gray-600 mb-4">Beef Tonight</p>

          {menu1.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50 mb-4">
              <h3 className={`font-bold text-lg ${item.color}`}>{item.title}</h3>
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
  );
};

// Menu 1
const menu1 = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["Havermout"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["Notenreep"] },
  { title: "Lunch", color: "text-red-500", items: ["2 Brood Kaas Rauwkost", "1 Brood Vleeswaren", "Melk"] },
  { title: "Diner", color: "text-red-700", items: ["Beef Tonight"] },
];

export default Dagmenu;
