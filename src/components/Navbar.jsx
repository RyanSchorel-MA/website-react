import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#DFD7BF] p-5 flex justify-center">
      <div className="flex gap-8">
        <Link to='/' className="text-lg ">Home</Link>
        <Link to='/dashboard' className="text-lg ">Ontbijt</Link>
        <Link to='/contact' className="text-lg ">Contact</Link>

      </div>
    </div>
  );
};

export default Navbar;
