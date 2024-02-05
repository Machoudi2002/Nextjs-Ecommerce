"use client";
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="p-3 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <h1 className='text-4xl font-bold italic'>NANO</h1>
        </div>
        <ul className="flex flex-row list-none ml-4 space-x-4 text-white">
          <li>
            <a className="text-black font-bold" href="/account">
              Account
            </a>
          </li>
          <li>
            <a className="text-black font-bold" href='/Login'>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
