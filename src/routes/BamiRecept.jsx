import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Recept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Bami</h1>
          <p className="text-lg text-center text-gray-600 mb-2">20 minuten | 583 Kcal (per persoon)</p>

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

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">Tips & Tricks</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ingredients = [
  "160 gr mie nestjes",
  "1 à 2 el ketjap manis",
  "1 à 2 el sojasaus",
  "200 gr kipfilet",
  "1 teentje knoflook",
  "2 tl bami- en nasikruiden",
  "400 gr Chinese roerbakgroente",
  "Sambal oelek (naar smaak)",
  "2 eieren",
];

const instructions = [
  "Kook de mie nestjes volgens de instructies op de verpakking. Giet af en spoel koud. Laat de mie uitlekken in een vergiet.",
  "Doe de mie in een kom en roer de ketjap manis en de sojasaus erdoor. Snijd de kipfilet in blokjes. Bestrooi de blokjes met peper en zout.",
  "Hak de knoflook fijn.",
  "Verhit een scheutje olie in een ruime (wok)pan. Bak de blokjes kipfilet in enkele minuten goudbruin. Haal uit de pan en zet afgedekt weg.",
  "Verhit in dezelfde (wok)pan opnieuw een scheutje olie. Fruit daarin de bami- en nasikruiden kort aan.",
  "Voeg de Chinese roerbakgroente toe. Laat dit ongeveer 5 minuten op hoog vuur bakken. Schud regelmatig goed om.",
  "Zet het vuur lager. Bak de knoflook 1 à 2 minuten mee.",
  "Voeg de kipfilet en de mie toe. Roer of schep alles goed door elkaar. Maak de bami verder op smaak met sambal, sojasaus en ketjap manis.",
  "Klop de eieren los met peper, zout en eventueel sambal. Bak er een omelet van. Rol de omelet op en snijd in dunne rolletjes.",
  "Schep de bami op de borden en verdeel de omeletrolletjes erover. Bestrooi de omeletrolletjes eventueel met een klein beetje zout.",
];

const tips = [
  "Kies een zak Chinese wokgroente waar een rode peper in zit of voeg zelf een fijngehakte rode peper toe. Voeg de fijngehakte peper tegelijk toe met de wokgroente.",
];

export default Recept;
