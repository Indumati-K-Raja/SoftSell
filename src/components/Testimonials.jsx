import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-xl italic">"Amazing service! This is a game-changer for our team."</p>
            <h3 className="text-lg font-semibold mt-4">John Doe, CEO</h3>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <p className="text-xl italic">"The tools are intuitive and easy to use. Highly recommended!"</p>
            <h3 className="text-lg font-semibold mt-4">Jane Smith, Product Manager</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
