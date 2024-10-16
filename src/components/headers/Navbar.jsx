import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-[#0BD098] font-dosis">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between sm: h-16">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
             <Link to='/'> <img className="h-10 w-auto" src={logo} alt="Exchange Bari" /></Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="font-bold hover:text-[#22c55e]">
                  EXCHANGE
                </Link>
                <Link to="/testimonials" className="font-bold hover:text-[#22c55e]">
                  TESTIMONIALS
                </Link>
                <Link to="/affiliate" className="font-bold hover:text-[#22c55e]">
                  AFFILIATE
                </Link>
                <Link to="/contact" className="font-bold hover:text-[#22c55e]">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-[#0BD098] hover:bg-green-500 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0BD098] hover:bg-gray-200"
            >
              EXCHANGE
            </Link>
            <Link
              to="/testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0BD098] hover:bg-gray-200"
            >
              TESTIMONIALS
            </Link>
            <Link
              to="/affiliate"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0BD098] hover:bg-gray-200"
            >
              AFFILIATE
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0BD098] hover:bg-gray-200"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
