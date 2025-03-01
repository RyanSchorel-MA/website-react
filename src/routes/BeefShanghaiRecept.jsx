import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const NachoschotelRecept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Beef Shanghai niet af</h1>
          <p className="text-lg text-center text-gray-600 mb-2">20 minuten + 8 minuten oventijd | 524 Kcal (per persoon)</p>

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
  "80 gr tortilla chips (naturel)",
  "100 gr mager rundergehakt",
  "400 gr Mexicaanse roerbakgroente",
  "1 tomaat",
  "75 gr crème fraîche",
  "35 gr geraspte kaas",
  "Mexicaanse kruiden"
];

const instructions = [
  "Verwarm de oven voor op 180 graden.",
  "Kruid het gehakt met de Mexicaanse gehaktkruiden.",
  "Snijd de tomaat in kleine blokjes.",
  "Neem een wok en bak het gehakt rul. Voeg na een minuut of twee ook de Mexicaanse groente en de tomaat toe en laat dit een minuut of vijf meebakken.",
  "Neem een ovenschaal en verdeel de helft van de tortilla chips over de bodem.",
  "Verdeel het gehaktmengsel over de tortilla chips.",
  "Neem de andere helft van de tortilla chips en smeer op elk chipje een klein likje crème fraîche. Vervolgens steek je de chips een beetje schuin in de schotel. Als je nog crème fraîche over hebt kun je dit verdelen over de schotel.",
  "Strooi de geraspte kaas over het gerecht en zet het ongeveer acht minuten in de oven."
];

const tips = [
  "Hou je het liever nog wat magerder? Vervang dan het gehakt door kleine stukjes kipfilet."
];

export default NachoschotelRecept;
