import { createContext } from "react";

export const cartcontext = createContext({
    cart:[],
    cartMenu: false,
    sideMenu: false,
    deleteItem: ()=>{},
    addItem: ()=>{},
    openCartMenu: ()=>{},
    closeCartMenu: ()=>{},
    openSideMenu: ()=>{},
    closeSideMenu: ()=>{},
})