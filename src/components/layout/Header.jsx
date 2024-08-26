import {Link} from "react-router-dom";
import React, { useContext, useState } from 'react'
import Logout from "../Logout";
import { cartcontext } from './GlobalContext2.jsx';
import { GlobalContext } from "../GlobalContext";

export default function Header(props) {
  const { token } = useContext(GlobalContext);
  const {openCartMenu} = useContext(cartcontext);
  const {openSideMenu} = useContext(cartcontext);


  const log_in_icon = "../assets/not-logged-in-icon.svg";

  return (
    <header className="bg-white flex flex-row p-6 px-3 gap-2 h-24 w-full bg-light items-center md:px-8 xl:px-16">
      <div className="basis-2/6 md:basis-1/4 flex justify-start items-center gap-1 md:gap-4">
        <img
          src="../assets/Logo.svg"
          alt="Furnio logo"
          className=" w-7 h-7 md:w-50 md:h-8"
        />
        <Link className="text-lg font-bold md:text-2xl lg:text-4xl">
          Furniro
        </Link>
      </div>

      <nav className="content-center text-xs md:text-base font-medium basis-1/2 lg:text-lg">
        <ul className="hidden md:flex md:justify-center md:gap-7 md:inline lg:gap-20">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-7 basis-1/6 md:basis-1/4 justify-end">
        <ul className="flex gap-5 basis-1/4 justify-end lg:gap-10">
        <span>{token ? (
        <Logout />
      ) : (
        <Link to={"/register"}><li>
        <img
          src={log_in_icon}
          alt="Log in icon"
          className="min-w-5 min-h-5 lg:min-w-7 lg:min-h-7"
        />
      </li></Link>
        
      )}</span>
          <li>
            <img
              src="../assets/search-icon.svg"
              alt="Search icon"
              className="min-w-5 min-h-5 lg:min-w-7 lg:min-h-7"
            />
          </li>
          <li>
            <img
              src="../assets/favorites-icon.svg"
              alt="Favorites icon"
              className="min-w-5 min-h-5 lg:min-w-7 lg:min-h-7"
            />
          </li>
          <li>
            <button onClick={openCartMenu}>
              <img
                src="../assets/cart-icon.svg"
                alt="Cart icon"
                className="min-w-5 min-h-5 lg:min-w-7 lg:min-h-7"
              />
            </button>
          </li>
        </ul>
        
        <button className="text-xs md:hidden" onClick={openSideMenu}>
          <img
            src="../assets/menu-icon.svg"
            alt="Menu icon"
            className="min-w-5 min-h-5"
          />
        </button>
      </div>
    </header>
  );
}
