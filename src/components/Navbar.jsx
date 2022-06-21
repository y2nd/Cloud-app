import React from 'react';
import { useState } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="z-20 w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>

                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Plateform</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className="hidden md:flex pr-4">
              <button className="border-none bg-transparent text-black mr-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
            </div>

            <div className="md:hidden mr-4" onClick={handleClick}>
              {isOpen ? <XIcon className="w-5"/> : <MenuIcon className="w-5"></MenuIcon>}
            </div>
        </div>
      
      <ul className={ !isOpen ? "hidden" : "absolute bg-zinc-200 w-full px-8 "}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Plateform</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-3"> Sign Up</button>
        </div>
      </ul>

    </div>
  )
}

export default Navbar