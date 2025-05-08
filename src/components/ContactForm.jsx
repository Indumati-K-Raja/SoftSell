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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.company) newErrors.company = "Company name is required";
    if (!form.license) newErrors.license = "Select a license type";
    if (!form.message) newErrors.message = "Please enter your message";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      setErrors({});
      alert("Form submitted successfully! ✅ (This is a frontend mock)");
      setForm({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
              value={form.company}
              onChange={handleChange}
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
          <div>
            <select
              name="license"
              className="w-full border p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
              value={form.license}
              onChange={handleChange}
            >
              <option value="">Select License Type</option>
              <option value="Office Suite">Office Suite</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Design Software">Design Software</option>
              <option value="Other">Other</option>
            </select>
            {errors.license && <p className="text-red-500 text-sm">{errors.license}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your message..."
              className="w-full border p-3 rounded h-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 dark:bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
