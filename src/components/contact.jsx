import { useState } from 'react';

const ContactForm = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('All fields are required.');
  };

  return (
    <div className="bg-gray-100 pt-14 pb-10 flex justify-center items-center">
      <div className="bg-white rounded-lg px-6 py-8 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-500 border-b pb-5 mb-4">Contact</h2>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Support info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Support Info */}
          <div className="col-span-1 md:col-span-1">
            <h1 className="font-semibold text-sm text-gray-500 mb-0">Support email</h1>
            <p className="text-gray-600 text-sm mb-1">
              <a href="mailto:jim.sec14@gmail.com" className="text-gray-500">support@exchangebari.com</a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 ml-20 col-span-1 md:col-span-5">
            <div>
              <label className="block font-bold text-gray-500">Your name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-green-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-gray-500">Your email address</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-green-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-gray-500">Subject</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-green-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-gray-500">Message</label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-24 focus:border-green-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-auto bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
