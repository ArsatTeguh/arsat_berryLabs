import React from 'react';
import Button from '../ui/button';
import BerryLabsSvg from '../ui/berryLabs_svg';

function Navbar() {
  return (
    <div className="navbar bg-white py-4 lg:px-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="font-medium menu text-zinc-800 menu-sm bg-zinc-100 dropdown-content mt-3 z-[1] p-2 shadow  rounded-md w-52">
            <li>
              <p>Link 1</p>
            </li>
            <li>
              <p> Sub Link 2</p>
              <ul className="p-2 w-full">
                <li>
                  <p>Submenu 1</p>
                </li>
                <li>
                  <p>Submenu 2</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Item 3</p>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <BerryLabsSvg />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-8 menu-horizontal px-1 font-medium">
          <li>
            <details>
              <summary>Product</summary>
              <ul className="border">
                <li>
                  <p>Submenu</p>
                </li>
                <li>
                  <p>Submenu</p>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Solution</summary>
              <ul className="border">
                <li>
                  <p>Submenu</p>
                </li>
                <li>
                  <p>Submenu</p>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <p>Pricing</p>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button size="large" color="primary" title="Get Started" />
      </div>
    </div>
  );
}

export default Navbar;
