
import { Facebook , Linkedin, Twitter, } from 'lucide-react';
const Footer = () => {
    return (
      <footer className="bg-white rounded-lg shadow-lg  ">
        <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap items-center  justify-start gap-2 mt-1 text-sm font-medium text-gray-500  sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
            <Facebook className='text-blue-700'/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <Linkedin className='text-gray-600'/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <Twitter className='text-blue-700'/>
              </a>
            </li>
         
          </ul>
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2025{" "}
           
            . All Rights Reserved.
          </span>
         
        </div>
      </footer>
    );
  };
  
  export default Footer;
  