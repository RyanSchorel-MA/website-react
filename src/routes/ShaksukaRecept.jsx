import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const ShaksukaRecept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Shaksuka</h1>

          <h2 className="text-2xl font-semibold text-gray-700 mt-4">Ingrediënten</h2>
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
  "(rode) ui",
  "olijfolie",
  "2 tl ras el hanout",
  "teentje knoflook",
  "1 a 2 rode paprika",
  "2 blik tomatenblokjes",
  "4 eieren"
];

const instructions = [
  "Pel en snipper de ui. Bak de ui met zout in olijfolie ongeveer 5 minuten.",
  "Snijd de knoflook en de groene peper fijn en de paprika in blokjes. Voeg de ras el hanout, knoflook, paprika en peper toe en bak weer 5 minuten.",
  "Doe het blikje tomatenblokjes erbij en vul het blikje voor de helft met water en giet erop. Breng op smaak met zout en peper.",
  "Laat het aan de kook komen en laat 5 minuten pruttelen.",
  "Maak met een spatel kleine kuiltjes in de saus en breek hierin steeds een eitje. Gebruik 3 tot 6 eieren.",
  "Dek de pan af met een deksel of aluminiumfolie en laat 7 minuten op zacht vuur een geheel worden."
];

export default ShaksukaRecept;
