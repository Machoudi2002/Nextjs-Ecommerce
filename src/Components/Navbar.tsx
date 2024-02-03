import React from 'react';
import Popup from './Popup';

const Navbar = () => {
    const auth = false;
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <h1>NANO</h1>
        </div>
        <ul className="flex flex-row list-none ml-4 space-x-4 text-white">
          <li>
            <a className="hover:text-gray-300" href="/account">
              Account
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300">
              Cart
            </a>
            {
                auth && <Popup />
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
