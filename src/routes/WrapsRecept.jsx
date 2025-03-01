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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Recept: Wraps</h1>
          <p className="text-lg text-center text-gray-600 mb-2">30 minuten | 526 Kcal (per persoon)</p>

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
  "80 gr magere kwark",
  "1 teentje knoflook",
  "5 ml citroensap",
  "5 gr bieslook",
  "150 gr rundergehakt",
  "5 gr Tex-Mex kruiden",
  "0,5 rode ui",
  "1 rode puntpaprika",
  "50 gr maïs",
  "4 wraps (40 gr per stuk)",
  "2 tomaten",
  "50 gr ijsbergsla",
];

const instructions = [
  "Pers de knoflook en hak de bieslook fijn. Meng samen met het citroensap door de kwark. Voeg wat water toe om de saus dunner te maken.",
  "Bak het gehakt rul en maak op smaak met de Tex-Mex kruiden.",
  "Snijd de rode ui in halve ringen en bak een paar minuten mee.",
  "Snijd de paprika in kleine stukjes en bak even mee.",
  "Laat de maïs uitlekken en voeg toe aan het gehakt en laat even mee verwarmen.",
  "Verwarm de wraps volgens de instructies op de verpakking.",
  "Snijd de tomaten in plakjes.",
  "Smeer de wraps in met de saus en verdeel vervolgens de ijsbergsla, tomaat en het gehaktmengsel erover. Rol de wraps op en zet eventueel vast met een cocktailprikker.",
];

const tips = [
  "Je kan de frisse saus ook maken met yoghurt in plaats van kwark. Je hoeft dan geen water toe te voegen.",
  "Tex-Mex kruiden kun je kant-en-klaar kopen, maar ook zelf maken. Zoek online voor een recept!",
];

export default Recept;
