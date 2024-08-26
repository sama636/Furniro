
import React, { useContext } from "react";
import logout from "../assets/logout.png"
import { GlobalContext } from "./GlobalContext";

export default function Logout() {
  const { setTokenAction } = useContext(GlobalContext);
  const { setUserAction } = useContext(GlobalContext);

  function handelLogout() {

    setTokenAction(null);
    setUserAction(null);
    
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
  }
  return (
    <li>
      <button
        onClick={handelLogout}
      >
        <img
      src={ logout}
      alt="Log in icon"
      className="min-w-5 min-h-5 lg:min-w-7 lg:min-h-7"
    />
      </button>
    
  </li>
      
  );
}
