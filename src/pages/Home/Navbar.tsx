import { useState } from "react";
import { Menu, MenuIcon, ShoppingCart, X } from "lucide-react";
import Cart from "../Cart/Cart";
import logo from "../../../src/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="md:container py-2 sticky w-full h-20 z-20 top-0 start-0 border-b bg-white border-b-gray-200">
      <div className="mx-auto flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <div className="flex items-center">
          <div className="absolute">
            <Link to='/'><img alt="Fitness zone" className="size-8 md:size-12" src={logo} /></Link>
          </div>
          <h1 className="font-bold pl-8 md:pl-16 text-2xl"> Fitness <span className="text-red-500"> Zone </span> </h1>
          </div>
          <div className="hidden lg:block md:pl-16">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-md font-semibold text-gray-800 hover:text-red-600 hover:underline hover:decoration-red-600/[.33]"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="hidden space-x-2 lg:block">
          <Cart />
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      
                      <MenuIcon/>
                    </span>
                    <span className="font-bold">DevUI</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:underline transition duration-300 ease-in-out btn btn-ghost"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-0.5  bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                    </NavLink>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ShoppingCart className="size-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Product Management",
    path: "/products-management",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
];