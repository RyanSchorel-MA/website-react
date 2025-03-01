import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#DFD7BF] p-5 flex justify-center font-bold">
      <div className="flex gap-8">
        <Link to='/' className="text-lg hover:text-blue-500 hover:">Home</Link>
        <Link to='/dashboard' className="text-lg hover:text-blue-500">Dagmenu</Link>
        <Link to='/contact' className="text-lg hover:text-blue-500">Contact</Link>

      </div>
    </div>
  );
};

export default Navbar;
