import React from "react";

const Features = () => {
  return (
    <section id="features" className="px-6 py-20 bg-gray-100">
      <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h4 className="font-semibold text-xl">Feature One</h4>
          <p className="text-gray-600 mt-2">Description of the first feature.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h4 className="font-semibold text-xl">Feature Two</h4>
          <p className="text-gray-600 mt-2">Description of the second feature.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h4 className="font-semibold text-xl">Feature Three</h4>
          <p className="text-gray-600 mt-2">Description of the third feature.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
