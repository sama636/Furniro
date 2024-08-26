import {Link} from "react-router-dom";
import {createPortal} from 'react-dom';
import { cartcontext } from './layout/GlobalContext2';
import { useContext } from "react";

export const SideMenu = () => {
  const {closeSideMenu} = useContext(cartcontext);
  const {sideMenu} = useContext(cartcontext);

  if (!sideMenu) return null
  return createPortal(
    <div className="fixed top-0 start-0 w-full h-screen">
          <div className="bg-white w-52 h-screen py-6 relative z-[2] ms-auto">
            <button
              className="bg-gray-200 rounded-sm w-8 h-8 ml-3 mb-5  block ease-in duration-100 text-lg"
              onClick={closeSideMenu}
            >
              &times;
            </button>
            <Link
              to="/"
              className="px-3 mb-4 block ease-in duration-100 text-lg"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="px-3 mb-4 block ease-in duration-100 text-lg"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="px-3 mb-4 block ease-in duration-100 text-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 mb-4 block ease-in duration-100 text-lg"
            >
              Contact
            </Link>
          </div>

          <div
            className="absolute top-0 start-0 h-full w-full bg-black/20 z-[1]"
            onClick={closeSideMenu}
          ></div>
        </div>
  , document.body
  );
};
