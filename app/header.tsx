'use client'
import React from "react";



export default function Header(){

    const [showMenu, setShowMenu] = React.useState(false);

    function toggleMenu() {
        console.log('increment like count');
        if( showMenu === true ) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }

  return (
    <nav className="bg-white text-gray-900 fixed w-full z-20 top-0 start-0 border-b border-neutral-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Le jardinier chez vous</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <a href="#contact" className="text-white bg-lime-600 hover:bg-lime-800 box-border border border-transparent focus:ring-4 focus:ring-lime-400 shadow-xs rounded-xl text-sm font-semibold px-3 py-2 cursor-pointer focus:outline-none">Contactez-nous</a>
                <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
                </button>
            </div>
            <div className={`${showMenu ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                    <li>
                        <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-lime-200 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-lime-200 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-lime-200 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-lime-200 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}