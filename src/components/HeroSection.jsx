import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-800 dark:to-blue-900 text-white py-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
          Welcome to Our World
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-lg mx-auto">
          We provide the best solutions for your needs. Start your journey with us today.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
