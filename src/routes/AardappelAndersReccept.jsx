import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const AardappelAndersRecept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Aardappel Anders</h1>

          <h2 className="text-2xl font-semibold text-gray-700 mt-4">Ingrediënten (twee personen)</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">Zo maak je het</h2>
          <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

const ingredients = [
  "300 gr aardappels",
  "2 tomaten",
  "1 flinke rode ui (of twee kleintjes)",
  "20 gr ongezouten roomboter",
  "20 gr bloem",
  "200 ml melk",
  "50 gr geraspte kaas",
  "200 gr hamblokjes (optioneel, zie tips en tricks)",
  "peterselie (kan ook gedroogd)",
  "citroen(sap)"
];

const instructions = [
  "Verwarm de oven voor op 180 graden.",
  "Schil de aardappels en snijd ze in schijfjes. Kook ze 10 minuten in water met een klein beetje zout.",
  "Snijd de tomaat in plakken en de rode ui in ringen.",
  "Hak de peterselie fijn. Je hebt ongeveer twee eetlepels fijngehakte peterselie nodig.",
  "Bedek de bodem van de ovenschaal met een laagje aardappel. Leg daarop de tomaat en vervolgens de uiringen. Als je nog aardappel over hebt eindig je daarmee.",
  "Neem een steelpan en smelt daarin de boter. Voeg vervolgens de bloem toe en blijf goed roeren terwijl je de bloem in een paar minuten zachtjes gaar laat bakken.",
  "Voeg nu al roerend de melk toe en breng de saus weer aan de kook. Voeg 40 gr geraspte kaas toe, peterselie, peper, zout en ongeveer twee theelepels citroensap toe. Als je het lekker vindt kun je ook wat knoflookpoeder toevoegen.",
  "Als je hamblokjes gebruikt kun je deze nu door de saus roeren.",
  "Proef de saus en voeg naar smaak extra peper, zout of citroensap toe.",
  "Verdeel de saus over de ovenschaal, strooi de laatste 10 gr kaas erover en bak het gerecht in ongeveer 20 minuten af."
];

export default AardappelAndersRecept;
