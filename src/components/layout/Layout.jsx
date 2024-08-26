import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { cartcontext } from "./GlobalContext2";
import  { useEffect } from "react";
import CartMenu from "../CartMenu";
import { SideMenu } from "../SideMenu";

export default function Layout() {
  const [page, setpage] = React.useState("")
  
  const [user, setUser]= useState(JSON.parse(localStorage.getItem("user")||null));
  const [token, setToken]= useState(localStorage.getItem("token"))

  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [cartMenu, setcartmenu] = React.useState(false)
  const [sideMenu, setsidemenu] = React.useState(false)

  const setTokenAction = (value)=>{
      setToken(value)
  };
  const setUserAction = (value)=>{
      setUser(value)
  };
    
  useEffect(() => {localStorage.setItem("cart", JSON.stringify(cart))},[cart])

  const addItem = (product) =>{
    if (cart && cart.length!==0){
      let flag = false
      let result = cart.map(item =>{
        if (item.name == product.name){
          flag=true
          let total = item.price*(item.quantity+product.quantity)
          return {...item, quantity: item.quantity+product.quantity, total: total}
        }
        else
          return item
      })
      if (flag==false){
        result.push(product)
      }
      setCart(result)
    }
    else{
      setCart((old) => {
        let arr = []
        arr.push(product)
      return arr})
    }
  }
  
  const deleteItem = (itemid) =>{
    let result = []
    for (let i = 0; i<cart.length; i++){
      if (itemid == cart[i].id){
        if(cart[i].quantity>1){
          cart[i].quantity -=1
          cart[i].total -= cart[i].price
          result.push(cart[i])
        }
      }
      else 
      result.push(cart[i])
    }
    setCart(result)
  }

  const openCartMenu = () => {
    setcartmenu(true)
  }
  const closeCartMenu = () => {
    setcartmenu(false)
  }

  const openSideMenu = () => {
    setsidemenu(true)
  }
  const closeSideMenu = () => {
    setsidemenu(false)
  }


  return (
    <cartcontext.Provider value={{
      cart,
      cartMenu,
      sideMenu,
      deleteItem,
      addItem,
      closeCartMenu,
      openCartMenu,
      closeSideMenu,
      openSideMenu,
      }}>

    <GlobalContext.Provider value={{user,token,setTokenAction , setUserAction}}>
    <div>
      <div className={page}></div>
      <Header setpage={setpage}/>
      <Outlet />
      <Footer />
      <CartMenu/>
      <SideMenu />
    </div>
    </GlobalContext.Provider>
    </cartcontext.Provider>

      

  ) }

