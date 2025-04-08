import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Company Name</h1>
      <nav className="space-x-4">
        <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
