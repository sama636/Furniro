import { createContext } from "react";

export const GlobalContext = createContext({
    user: () =>{},
    token: () =>{},
    setTokenAction : () =>{},
    setUserAction: () =>{},
})
