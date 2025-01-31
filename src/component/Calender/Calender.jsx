import { useState } from "react";

const Calender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [date, setDate] = useState("");
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);

  return (
    <div className="flex justify-between items-center    gap-2 p-2  flex-wrap">
      <div className="relative inline-block text-left">
        {/* Dropdown button */}
        <button
          onClick={toggleDropdown}
          className="text-gray-700  bg-white   font-medium rounded-md  text-xs px-4 py-1.5 text-center inline-flex items-center "
          type="button"
        >
          All Branches
          <svg
            className="w-2.5 h-2.5 ms-10"
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
          <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-36">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  E-Stamp Services
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
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  E-Stamp Services
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-2 w-auto">
        <div className="relative inline-block text-left">
          {/* Dropdown button */}
          <button
            onClick={toggleDropdown2}
            className="text-gray-700  bg-white   font-medium rounded-md  text-xs px-4 py-1.5 text-center inline-flex items-center "
            type="button"
          >
            custom range
            <svg
              className="w-2.5 h-2.5 ms-10"
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
          {isOpen2 && (
            <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-36">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    E-Stamp Services
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
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    E-Stamp Services
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative max-w-sm">
          <input
            id="default-datepicker"
            type="date"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-5 px-4 py-1 "
            placeholder="Select date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
