import React from "react";
import Navbar from "../components/Navbar";

const Roti = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-lg max-w-lg w-full mx-auto mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">Roti</h1>
        <div className="space-y-4">
          <p className="text-lg">Dagmenu</p>

          {/* Menu 1 */}
          <div className="space-y-2">
            <p className="font-bold">Menu 1</p>
            <div className="space-y-1">
              <h2 className="font-bold text-yellow-500">Ontbijt</h2>
              <ul className="list-inside list-disc">
                <li>2 crackers met pindakaas</li>
                <li>1 cracker met magere vleeswaren</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-orange-500 font-bold">Tussendoortje</h2>
              <ul className="list-inside list-disc">
                <li>200 gr yoghurt</li>
                <li>1 peer</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-500 font-bold">Lunch</h2>
              <ul className="list-inside list-disc">
                <li>2 sneeën brood met kaas en rauwkost</li>
                <li>1 snee brood met zuivelspread en rauwkost</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-600 font-bold">Tussendoortje</h2>
              <ul className="list-inside list-disc">
                <li>3 mandarijnen</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-700 font-bold">Diner</h2>
              <ul className="list-inside list-disc">
                <li>Roti met kip, sperziebonen en zoete aardappel</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-800 font-bold">Snack</h2>
              <ul className="list-inside list-disc">
                <li>50 gr magere rookworst</li>
                <li>Mosterd naar smaak</li>
                <li>1 drankje naar keuze</li>
              </ul>
            </div>
          </div>

          {/* Menu 2 */}
          <div className="space-y-2">
            <p className="font-bold">Menu 2</p>
            <div className="space-y-1">
              <h2 className="font-bold text-yellow-500">Ontbijt</h2>
              <ul className="list-inside list-disc">
                <li>200 gr kwark</li>
                <li>35 gr granola</li>
                <li>75 gr blauwe bessen</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-orange-500 font-bold">Tussendoortje</h2>
              <ul className="list-inside list-disc">
                <li>2 rijstwafels met pindakaas</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-500 font-bold">Lunch</h2>
              <ul className="list-inside list-disc">
                <li>2 sneeën brood met magere vleeswaren en rauwkost</li>
                <li>1 snee brood met groentespread en rauwkost</li>
                <li>200 ml melk</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-600 font-bold">Tussendoortje</h2>
              <ul className="list-inside list-disc">
                <li>250 gr fruitsalade van fruit naar keuze</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-700 font-bold">Diner</h2>
              <ul className="list-inside list-disc">
                <li>Roti met kip, sperziebonen en zoete aardappel</li>
              </ul>
            </div>

            <div className="space-y-1">
              <h2 className="text-red-800 font-bold">Snack</h2>
              <ul className="list-inside list-disc">
                <li>40 gr pure chocola</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roti;
