import { useState } from "react";
import { BellDot } from "lucide-react";
import { ChevronDown, User } from "lucide-react";

// This is a functional component called Navbar2
const Navbar = () => {
  // This state variable is used to keep track of whether the mobile menu is open or not
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // This state variable is used to keep track of whether the dropdown menu is open or not
  const [isOpen, setIsOpen] = useState(false);
  // This function toggles the mobile menu open or closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  shadow-md">
      <div className="flex flex-wrap items-center justify-around gap-2 max-w-screen-xl mx-auto p-4 w-[100vw]  ">
        <a
          href="https://loqfy.com"
          className="flex items-center space-x-2 rtl:space-x-reverse "
        >
          <img
            src="../public/images/logo.png"
            height={20}
            width={25}
            alt="Loqfy Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap  md:text-xl ">
            OQFY
          </span>
        </a>

        <div className="flex items-center gap-2 md:order-2 space-x-2 md:space-x-2 rtl:space-x-reverse">
          <a
            href="#notification"
            className=" rounded-lg text-sm px-2 py-2 md:px-2 md:py-1"
          >
            <div className="relative">
              <BellDot className="w-6 h-6 text-gray-600 " />

              <div className="absolute bottom-3 left-3 flex justify-center items-center w-2 h-2 text-xs p-2 text-white bg-red-400 rounded-full">
                1
              </div>
            </div>
          </a>

          <button className="flex items-center space-x-2 bg-slate-100  text-gray-600  font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300">
            <ChevronDown className="w-4 h-4 hidden xl:block" />
            <span className="text-sm hidden xl:block">Michael</span>
            <User className="w-5 h-5 text-blue-500" />
          </button>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="mega-menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only" >Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="mega-menu"
          className={`items-center justify-between ${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col items-center text-center justify-center gap-0.5 font-medium md:flex-row space-y-6 lg:space-y-0 md:mt-0 space-x-4 xl:space-x-8 rtl:space-x-reverse py-4 text-sm text-gray-700">
            <li className="hidden xl:block">
              <div className="relative inline-block text-center">
                <button
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="text-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="z-10 absolute right-0 mt-2 w-40 bg-slate-50 divide-y divide-gray-100 rounded-lg shadow-sm ">
                    <ul className="py-2 text-sm text-gray-600 ">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          E-Sign Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          E-Count Services
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>

            <li>
              <a href="#usermanagement" className="hover:text-gray-500 ">
                User Management
              </a>
            </li>

            <li>
              <a href="#myorder" className="hover:text-gray-500">
                My Orders
              </a>
            </li>

            <li>
              <a href="#reports" className="hover:text-gray-500">
                Reports
              </a>
            </li>

            <li>
              <a href="#stamp" className="hover:text-gray-500">
                Stamp Inventory
              </a>
            </li>

            <li>
              <a href="#barcodes" className="hover:text-gray-500">
                Bar Codes
              </a>
            </li>

            <li>
              <a href="#invoice" className="hover:text-gray-500">
                Invoice
              </a>
            </li>

            <li className="hidden xl:block">
              <a
                href="#comingsoon"
                className="text-gray-700 text-xs focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg  px-2 py-4 md:px-5 md:py-2 focus:outline-none"
              >
                coming soon
              </a>
            </li>

            {/* <li>
              <a
                href="#notification"
                className=" rounded-lg text-sm px-2 py-2 md:px-5 md:py-2.5  focus:outline-none"
              >
                <div className="relative">
                  <BellDot className="w-6 h-6 text-gray-600 " />

                  <div className="absolute bottom-3 left-3 flex justify-center items-center w-2 h-2 text-xs p-2 text-white bg-red-400 rounded-full">
                    1
                  </div>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;