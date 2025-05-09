import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.company) errs.company = "Company is required";
    if (!form.license) errs.license = "Select a license type";
    if (!form.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) return setErrors(v);
    setErrors({});
    alert("Submitted!");
    setForm({
      name: "",
      email: "",
      company: "",
      license: "",
      message: "",
    });
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-xl transition-colors duration-500">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white transition-colors duration-500">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Company */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500">
              Company
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company}</p>
            )}
          </div>

          {/* License */}
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500">
              License Type
            </label>
            <select
              name="license"
              value={form.license}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
            >
              <option value="">Select License Type</option>
              <option>Office Suite</option>
              <option>Antivirus</option>
              <option>Design Software</option>
              <option>Other</option>
            </select>
            {errors.license && (
              <p className="text-red-500 text-sm mt-1">{errors.license}</p>
            )}
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
