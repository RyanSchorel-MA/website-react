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
          <p className="text-lg text-center text-gray-600 mb-4">Schnitzel</p>

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
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Menu 2</h2>
          <p className="text-lg text-center text-gray-600 mb-4">Schnitzel</p>
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

        {/* Menu 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Menu 3</h2>
          <p className="text-lg text-center text-gray-600 mb-4">Schnitzel</p>
          {menu3.map((item, index) => (
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

        {/* Menu 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Menu 4</h2>
          <p className="text-lg text-center text-gray-600 mb-4">Schnitzel</p>
          {menu4.map((item, index) => (
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

        {/* Menu 5 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Menu 5</h2>
          <p className="text-lg text-center text-gray-600 mb-4">Schnitzel</p>
          {menu5.map((item, index) => (
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
  { title: "Ontbijt", color: "text-yellow-500", items: ["200 gr yoghurt", "40 gr granola", "1 kaki"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["3 mandarijnen"] },
  { title: "Lunch", color: "text-red-500", items: ["1 snee roggebrood met kaas", "1 snee roggebrood met roomboter en kaneel naar smaak", "200 ml melk"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["1 rijstwafel met groentespread en rauwkost"] },
  { title: "Diner", color: "text-red-700", items: ["Schnitzel"] },
  { title: "Snack", color: "text-red-800", items: ["40 gr cashewnoten"] },
];

// Menu 2
const menu2 = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["2 crackers met kaas", "1 cracker met groentespread"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["200 gr kwark", "75 gr mangostukjes"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met magere vleeswaren en rauwkost", "1 snee brood met smeerkaas en rauwkost", "200 ml melk"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["1 notenreep"] },
  { title: "Diner", color: "text-red-700", items: ["Schnitzel"] },
  { title: "Snack", color: "text-red-800", items: ["250 gr fruitsalade van fruit naar keuze"] },
];

// Menu 3
const menu3 = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["200 ml melk", "40 gr havermout", "75 gr ananas", "5 gr kokosrasp"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["200 gr kwark", "20 gr amandelen"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met magere vleeswaren en rauwkost", "1 snee brood met groentespread en rauwkost", "2 kiwi's"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["1 cracker met jam"] },
  { title: "Diner", color: "text-red-700", items: ["Schnitzel"] },
  { title: "Snack", color: "text-red-800", items: ["50 gr hummus", "100 gr rauwkost naar keuze"] },
];

// Menu 4
const menu4 = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["Een smoothie van:", "200 gr yoghurt", "40 gr havermout", "75 gr ananas"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["2 pindacrunchkoekjes"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met magere vleeswaren en rauwkost", "1 snee brood met appelstroop", "150 gr druiven"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["1 rijstwafel met smeerkaas en rauwkost", "1 gekookt ei"] },
  { title: "Diner", color: "text-red-700", items: ["Schnitzel"] },
  { title: "Snack", color: "text-red-800", items: ["40 gr kaas", "40 gr zilveruitjes"] },
];

// Menu 5
const menu5 = [
  { title: "Ontbijt", color: "text-yellow-500", items: ["200 ml melk", "40 gr havermout", "1 banaan"] },
  { title: "Tussendoortje", color: "text-orange-500", items: ["200 gr druiven"] },
  { title: "Lunch", color: "text-red-500", items: ["2 sneeën brood met magere vleeswaren en rauwkost", "1 snee brood met appelstroop"] },
  { title: "Tussendoortje", color: "text-red-600", items: ["200 gr kwark", "20 gr walnoten"] },
  { title: "Diner", color: "text-red-700", items: ["Schnitzel"] },
  { title: "Snack", color: "text-red-800", items: ["40 gr kaas", "mosterd naar smaak"] },
];

export default Dagmenu;
