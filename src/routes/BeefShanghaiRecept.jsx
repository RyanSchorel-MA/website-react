import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const BeefShanghaiRecept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Beef Shanghai</h1>

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
  "120 gr mie",
  "200 gr prei",
  "1 ui",
  "1 teentje knoflook",
  "10 gr peterselie",
  "1 à 2 cm gember",
  "200 gr rundergehakt",
  "40 gr tomatenpuree",
  "200 ml runderbouillon",
  "10 ml ketjap manis",
  "10 ml oestersaus",
  "100 gr taugé",
  "5 gr sambal"
];

const instructions = [
  "Kook de mie volgens de aanwijzingen op de verpakking. Giet af en spoel koud.",
  "Snipper de ui en snijd de prei in ringen. Hak de knoflook fijn.",
  "Snijd de gember in kleine stukjes.",
  "Hak de peterselie fijn en meng samen met wat peper en zout door het gehakt en draai kleine balletjes.",
  "Verhit een scheut olie in de pan en fruit de gember, knoflook en ui aan. Zet het even apart.",
  "Bak de gehaktballetjes op hoog vuur rondom bruin.",
  "Voeg de prei en tomatenpuree toe en bak kort mee.",
  "Voeg de runderbouillon, oestersaus en ketjap manis toe. Doe ook de ui, knoflook en gember weer terug in de pan.",
  "Laat op laag vuur inkoken tot een dikke saus.",
  "Meng de mie en taugé er doorheen en voeg naar smaak sambal toe."
];

export default BeefShanghaiRecept;
