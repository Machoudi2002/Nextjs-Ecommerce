"use client";

const Navbar = () => {
  const cartItems = 10
  return (
    <nav className="p-3 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a className='text-4xl font-bold italic cursor-pointer' href="/">NANO</a>
        </div>
        <ul className="flex flex-row list-none ml-4 space-x-4 text-white">
          <li>
            <a className="text-black font-bold" href="/Account">
              Account
            </a>
          </li>
          <li>
            <a className="text-black font-bold" href='/Login'>
              Cart (<span className="text-red-500">{cartItems}</span>)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
