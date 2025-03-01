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
          <p className="text-lg text-center text-gray-600 mb-4">Roti</p>

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
          <p className="text-lg text-center text-gray-600 mb-4">Roti</p>
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
  { title: "Ontbijt", color: "text-yellow-500", items: ["2 crackers met pindakaas", "1 cracker met magere vleeswaren"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["200 gr yoghurt", "1 peer"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met kaas en rauwkost", "1 snee brood met zuivelspread en rauwkost"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["3 mandarijnen"] },
  { title: "Diner", color: "text-red-700", items: ["Roti met kip, sperziebonen en zoete aardappel"] },
  { title: "Snack", color: "text-red-800", items: ["50 gr magere rookworst", "Mosterd naar smaak", "1 drankje naar keuze"] },
];

// Menu 2
const menu2 = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["200 gr kwark", "35 gr granola", "75 gr blauwe bessen"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["2 rijstwafels met pindakaas"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met magere vleeswaren en rauwkost", "1 snee brood met groentespread en rauwkost", "200 ml melk"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["250 gr fruitsalade van fruit naar keuze"] },
  { title: "Diner", color: "text-red-700", items: ["Roti met kip, sperziebonen en zoete aardappel"] },
  { title: "Snack", color: "text-red-800", items: ["40 gr pure chocola"] },
];

export default Dagmenu;
