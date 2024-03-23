import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              © 2024 <Link to="havetic.com">Havetic</Link>. All rights reserved.
            </p>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer