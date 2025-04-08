import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
