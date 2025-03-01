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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Roti</h1>
          <p className="text-lg text-center text-gray-600 mb-2">40 minuten | 474 Kcal (per persoon)</p>

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
  "500 ml kippenbouillon (één blokje)",
  "2 eieren",
  "150 gr kipfilet",
  "Kerriepoeder (naar smaak)",
  "1 ui",
  "1 teentje knoflook",
  "250 gr zoete aardappel",
  "200 gr sperziebonen",
  "Komijnpoeder (naar smaak)",
  "2 rotivellen",
];

const instructions = [
  "Kook de eieren in ongeveer 8 minuten hard. Spoel ze koud, pel ze en leg ze apart.",
  "Snijd de kipfilet in blokjes van ongeveer 1 bij 1 centimeter. Roer er een kleine eetlepel olijfolie en een theelepel kerriepoeder door.",
  "Snipper de ui en hak de knoflook fijn.",
  "Schil de zoete aardappel en snijd deze in blokjes van ongeveer 1 bij 1 centimeter.",
  "Maak de sperziebonen schoon en snijd ze één keer doormidden.",
  "Verhit een scheutje olijfolie in een wokpan. Fruit daarin de ui, de knoflook, een theelepel kerriepoeder en een halve theelepel komijnpoeder aan.",
  "Voeg vervolgens de zoete aardappel toe en bak deze een minuutje mee. Giet daarna een deel van de kippenbouillon erbij zodat het geheel lekker kan pruttelen. De zoete aardappel moet ongeveer 15 minuten koken totdat deze gaar is.",
  "Voeg de laatste 8 minuten ook de sperziebonen toe.",
  "Voeg steeds een beetje bouillon toe zodat alles lekker kan blijven koken. Probeer dit zo te doen, dat je wanneer het gerecht klaar is geen dunne bouillon meer in de pan hebt. Door het zetmeel van de zoete aardappel zal de bouillon binden en krijg je als het ware groente in een sausje.",
  "Als de groente bijna klaar is kun je in een koekenpan de kipfiletstukjes op hoog vuur gaar bakken. Haal ze daarna uit de pan en roer ze door de saus of serveer ze apart.",
  "Het gekookte ei kun je nog heel even door de pan van de kipfilet ‘rollen’ zodat deze een mooi kleurtje krijgt en wat van de smaken oppakt.",
  "Warm de rotivellen ongeveer 20 seconden op in de magnetron. Serveer de kip en groente ernaast, of op de roti.",
];

const tips = [
  "Je kunt de kipfilet ook vervangen door een ander soort vlees, zoals rundvlees of varkensvlees, afhankelijk van je voorkeur.",
  "Als je van pittig houdt, kun je wat extra kerriepoeder of chili toevoegen voor meer smaak.",
];

export default Recept;
