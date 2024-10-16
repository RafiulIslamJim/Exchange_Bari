import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

// Renamed to 'TestimonialCard' to avoid conflict
const TestimonialCard = ({ user, service, comment }) => {
  return (
    <div className="p-4 bg-white  rounded-lg">
      <div className="flex items-center space-x-1 mb-2">
      <span className="font-semibold text-[#6f6f6f]">by</span>
      <svg xmlns="http://www.w3.org/2000/svg" height={20} fill="#4a4a4a" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
        <span className="font-semibold">{user}</span>
      </div>
      <p className="text-sm text-[#6f6f6f]">{service}</p>
      <p className="mt-2 font-medium text-[#6f6f6f]">{comment}</p>
    </div>
  );
};

TestimonialCard.propTypes = {
  user: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

const Testimonials = () => {
  const testimonials = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 12; // Adjust this value for number of testimonials per page

  // Calculate indices for slicing the current testimonials
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Handlers for pagination
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-100 pt-14 pb-10 flex justify-center items-center">
      <div className="bg-white px-6 py-10 rounded-lg w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-500 border-b pb-5">
          User Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              user={testimonial.user}
              service={testimonial.service}
              comment={testimonial.comment}
            />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-6">
          <button
            className="px-3 py-1 mx-1 bg-gray-200 rounded"
            disabled={currentPage === 1}
            onClick={() => handleClick(1)}
          >
            First
          </button>
          <button
            className="px-3 py-1 mx-1 bg-gray-200 rounded"
            disabled={currentPage === 1}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="px-3 py-1 mx-1 bg-gray-400 rounded"
            disabled
          >
            {currentPage}
          </button>
          <button
            className="px-3 py-1 mx-1 bg-gray-200 rounded"
            disabled={currentPage === totalPages}
            onClick={handleNext}
          >
            Next
          </button>
          <button
            className="px-3 py-1 mx-1 bg-gray-200 rounded"
            disabled={currentPage === totalPages}
            onClick={() => handleClick(totalPages)}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
