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
          <p className="text-lg text-center text-gray-600 mb-4">Kibbeling</p>

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

        {/* Menu 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Menu 2</h2>
          <p className="text-lg text-center text-gray-600 mb-4">Kibbeling</p>
          {menu2.map((item, index) => (
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
  { title: "Ontbijt", color: "text-yellow-500", items: ["200 ml melk", "40 gr havermout", "75 gr mangostukjes"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["2 rijstwafels met kaas en rauwkost"] },
  { title: "Lunch", color: "text-red-500", items: ["250 gr rauwkostsalade met dressing naar keuze", "2 crackers met zuivelspread", "1 cracker met groentespread", "1 gekookt ei"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["1 notenreep"] },
  { title: "Diner", color: "text-red-700", items: ["Kibbeling"] },
  { title: "Snack", color: "text-red-800", items: ["200 gr yoghurt", "20 gr granola"] },
];

// Menu 2
const menu2 = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["200 gr kwark", "30 gr granola", "75 gr aardbeien"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["Een sapje van:", "50 gr mangostukjes", "halve banaan", "halve kiwi"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met groentespread en rauwkost", "1 snee brood met appelstroop", "1 gekookt ei"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["1 notenreep"] },
  { title: "Diner", color: "text-red-700", items: ["Kibbeling"] },
  { title: "Snack", color: "text-red-800", items: ["50 gr achterham", "25 gr roomkaas met bieslook", "1 drankje naar keuze"] },
];

export default Dagmenu;
