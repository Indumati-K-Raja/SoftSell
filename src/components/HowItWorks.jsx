import React from "react";
import { FaArrowRight, FaFileAlt, FaMoneyCheck } from "react-icons/fa"; // Using react-icons for visuals

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <FaFileAlt className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 1: Upload License</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simply upload your software license and our system will take care of the rest.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <FaArrowRight className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 2: Get Valuation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive an instant quote based on the current market value of your license.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <FaMoneyCheck className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 3: Get Paid</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Once you accept the offer, we pay you right away. It's fast and secure!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
