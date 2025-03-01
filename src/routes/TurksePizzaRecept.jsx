import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const TurksePizzaRecept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Turkse Pizza</h1>

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
  "0,5 rode ui",
  "1 rode paprika",
  "2 tomaten",
  "10 gr peterselie",
  "1 teentje knoflook",
  "100 gr komkommer",
  "50 gr ijsbergsla",
  "150 gr rundergehakt",
  "1 tl paprikapoeder",
  "1 tl komijnpoeder",
  "1 tl korianderpoeder",
  "1 tl gedroogde tijm",
  "1 tl zout",
  "1 tl peper",
  "4 wraps (40 gr per stuk)",
  "60 gr magere knoflooksaus"
];

const instructions = [
  "Verwarm de oven op 200 graden.",
  "Snijd de rode ui, rode paprika en 1 tomaat in grove stukken. Hak de peterselie grof door.",
  "Maal dit samen met het teentje knoflook in een blender of met een staafmixer tot een puree die de structuur heeft van een tapenade.",
  "Laat het mengsel 10 à 15 minuten uitlekken in een fijne zeef.",
  "Snijd de komkommer en de tweede tomaat in kleine blokjes.",
  "Snijd de ijsbergsla in dunne repen.",
  "Voeg de uitgelekte puree samen met de paprikapoeder, komijnpoeder, korianderpoeder, gedroogde tijm, peper en het zout toe aan het gehakt. Kneed het gehakt tot alles goed gemengd is. Verdeel in 4 gelijke porties.",
  "Leg op elke wrap een portie van het gehaktmengsel. Verdeel dit gelijkmatig over de wrap. Dit gaat het makkelijkst met je vingertoppen.",
  "Leg de wraps op een met bakpapier beklede bakplaat. Zet de wraps voor 10 minuten in de oven, zodat het gehakt gaar is.",
  "Haal de wraps uit de oven en beleg ze met de blokjes komkommer, tomaat en de repen ijsbergsla.",
  "Top iedere wrap af met een kwart van de knoflooksaus.",
  "Rol de wraps op en serveer direct."
];

export default TurksePizzaRecept;
