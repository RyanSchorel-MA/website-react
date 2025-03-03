import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return <div>
    <Navbar />

    <h1 className="text-3xl font-bold text-center mb-6 ">Contact</h1>

    {/* Dit is de container die we centreren */}
    <div className="flex justify-center items-center w-full">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Hoe kan je ons helpen?
        </h2>
        <p className="text-gray-600 mb-4">
          Als je tegen een probleem aanloopt op de website, stuur ons dan een gedetailleerde uitleg van het probleem en voeg een screenshot toe.
        </p>

        <div className="bg-gray-50 p-6 rounded-md border border-gray-300">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Stappen om je probleem te melden:
          </h3>
          <ul className="list-inside list-decimal text-gray-700">
            <li>Leg je probleem in detail uit.</li>
            <li>Voeg een screenshot toe van het probleem.</li>
            <li>
              Stuur alles naar
              <a href="mailto:ryanschorel@gmail.com" className="font-bold text-blue-500 ml-1">
                ryanschorel@gmail.com
              </a>.
            </li>
          </ul>

        </div>

      </div>

    </div>
    <footer className="bg-[#DFD7BF] text-black py-4 mt-auto text-center  fixed en bottom-0 w-screen">
      <p className="text-sm">
        © 2025 Ryan Schorel · All Rights Reserved
      </p>
    </footer>
  </div>


};

export default Contact;
