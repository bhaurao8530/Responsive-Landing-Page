import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">Welcome to Our Product</h2>
        <p className="text-lg">We offer a solution that helps your team work smarter and faster.</p>
        <a href="#features" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">Explore Features</a>
      </div>
      <img src="/assets/hero-image.png" alt="Hero" className="md:w-1/2 mt-8 md:mt-0" />
    </section>
  );
};

export default Hero;
