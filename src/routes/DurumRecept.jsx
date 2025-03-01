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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Dürüm</h1>
          <p className="text-lg text-center text-gray-600 mb-2">30 minuten | + 15 minuten rijzen | 504 Kcal (per persoon)</p>

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
  "120 gr tarwemeel",
  "130 ml water",
  "1 theelepel zout",
  "50 gr komkommer",
  "150 ml yoghurt",
  "1 teentje knoflook",
  "Peterselie naar smaak",
  "1 ui",
  "1 rode paprika",
  "Komijnpoeder naar smaak",
  "Paprikapoeder naar smaak",
  "(Verse) tijm naar smaak",
  "200 gr kipfilet",
  "1 appel",
  "50 gr ijsbergsla",
];

const instructions = [
  "Kneed een deeg van het meel, zout en water. Voeg steeds voorzichtig wat water toe voor een gelijkmatig deeg.",
  "Dek het af en laat 15 minuten staan.",
  "Verdeel het deeg in vier gelijke ballen. Rol de ballen plat uit en bak ze in een klein scheutje olie.",
  "Rasp de komkommer en meng door de yoghurt.",
  "Pers het teentje knoflook en meng samen met de fijngesneden peterselie en wat peper en zout ook door de yoghurt.",
  "Snipper het uitje en bak glazig in wat olie.",
  "Snijd de paprika in stukjes en bak samen met de tijm, paprikapoeder en komijnpoeder mee met het uitje.",
  "Snijd de kipfilet in blokjes, voeg toe en bak op hoog vuur rondom bruin.",
  "Snijd ondertussen de appel in blokjes en voeg toe.",
  "Maak het kipmengsel op smaak met peper en zout.",
  "Bestrijk nu de dürüm met de yoghurtdressing en beleg met ijsbergsla. Verdeel het kipmengsel over de dürüm en vouw dicht of rol op.",
];

const tips = [
  "Je kunt de yoghurtdressing ook aanpassen met een beetje citroensap voor een frisse smaak.",
  "Als je geen tarwemeel hebt, kun je ook volkorenmeel gebruiken voor een gezondere variant.",
  "Voor een pittigere variant kun je wat chilipoeder toevoegen aan de yoghurtdressing.",
];

export default Recept;
