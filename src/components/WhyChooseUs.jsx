import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-lg md:text-xl mb-6">We offer a unique combination of features that makes us stand out.</p>
        <ul className="space-y-6">
          <li className="flex justify-start items-center">
            <span className="text-2xl">✔</span> Feature One
          </li>
          <li className="flex justify-start items-center">
            <span className="text-2xl">✔</span> Feature Two
          </li>
          <li className="flex justify-start items-center">
            <span className="text-2xl">✔</span> Feature Three
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
