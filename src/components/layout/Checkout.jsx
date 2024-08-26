import React, { useContext } from "react";
import CheckoutHeader from "./CheckoutHeader";
import CartFooter from "./CartFooter";
import { cartcontext } from './GlobalContext2.jsx';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";


export default function Checkout() {
  const navigate = useNavigate();
  const {user} = useContext(GlobalContext);
  const {token} = useContext(GlobalContext);
  const {cart} = useContext(cartcontext);
  const contextflag = true
  const [radioflag, setradioFlag] = React.useState(true)

  console.log(token)

  const ordered_items = cart.map(item => ({"product": item.id,"count": item.quantity}))
  const product_names = cart.map(item => <div key={item.id} className="flex flex-row items-center gap-2 mb-2"><p className="text-gray-400 ">{item.name}</p> <p className="w-fit text-xs">x {item.quantity}</p></div>)
  const product_prices = cart.map(item => <p key={item.id} className="mb-2">Rs. {item.total}</p>)
  
  function totalnum(){
    let num = 0
    for(let i = 0; i<cart.length; i++){
      num+= cart[i].total
    }
    return num 
  }
  const total_price = totalnum()

  const [post, setpost] = React.useState({
    "first_name": "",
    "last_name": "",
    "company": "",
    "country_code": "",
    "address": "",
    "city": "",
    "province": "",
    "zip_code": "",
    "order_items": ordered_items
  })

  

    const handleInput = (event) => {
        setpost({...post, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://confident-cow-e38266f6dc.strapiapp.com/api/checkout', 
        {data: post},{headers: {'Authorization': 'Bearer ' + token }})
        .then(response => {console.log(response)
        alert('Checkout was done successfully');
        event.target.reset()})
        .catch(err =>  alert('Something went wrong'))
        return false
    }

  return (
    <>
    {user?(
    <>
    <CheckoutHeader />
     
      <div className="container mx-auto px-4 lg:py-14 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-0">
    <div>
      <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
      <form id="checkoutform" className="p-4 rounded-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="flex-1 mb-3">
            <label htmlFor="first-name" className="block text-gray-700 mb-2">First Name</label>
            <input
              name="first_name"
              onChange={handleInput}
              id="first-name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex-1 mb-3">
            <label htmlFor="last-name" className="block text-gray-700 mb-2">Last Name</label>
            <input
              name="last_name"
              onChange={handleInput}
              id="last-name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="company" className="block text-gray-700 mb-2">Company Name (Optional)</label>
          <input
            name="company"
            onChange={handleInput}
            id="company"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="block text-gray-700 mb-2">Country / Region</label>
          <select
            name="country_code"
            onChange={handleInput}
            id="country"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
         >  
            <option value="" disabled selected>Select a country</option>
            <option value="EG">Egypt</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="block text-gray-700 mb-2">Street Address</label>
          <input
            name="address"
            onChange={handleInput}
            id="address"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="block text-gray-700 mb-2">Town / City</label>
          <input
            name="city"
            onChange={handleInput}
            id="city"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="province" className="block text-gray-700 mb-2">Province</label>
          <input
            name="province"
            onChange={handleInput}
            id="province"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="zip" className="block text-gray-700 mb-2">Zip Code</label>
          <input
            name="zip_code"
            onChange={handleInput}
            id="zip"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>

    <div className="pt-20 ">
      <div className="border-b-2 border-gray-300 pb-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Product</h3>
            {product_names}
            <p className="mb-2">Subtotal</p>
            <p className="mb-2">Total</p>
            
          </div>
          

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Pricing</h3>
            {product_prices}
            <p className="mb-2">Rs. {total_price}</p>
            <h2 className="text-add-cart-btn-txt text-xl font-semibold mb-2">Rs. {total_price}</h2>
          </div>
        </div>
      </div>

      <form >
        <div className="flex gap-2 items-center mb-4">
        <input onClick={() => setradioFlag(old => !old)} type="radio" name="deliveryMethod" defaultChecked className="accent-black"/>
          <p className={radioflag?"font-semibold":"font-semibold text-gray-400"}>Direct Bank Transfer</p>
        </div>
        <p className="text-gray-400 mb-4">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>

        <div className="flex gap-2 items-center mb-4">
        <input onClick={() => setradioFlag(old => !old)} type="radio" name="deliveryMethod" className="accent-black"/>
          <p className={!radioflag?"font-semibold":"font-semibold text-gray-400"}>Cash On Delivery</p>
        </div>
      </form>
      

      <p className="mb-6">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy</span>.
      </p>

      <button type="submit" form="checkoutform" className="rounded-xl bg-white border py-2 mt-6 ml-20 px-20">Place order</button>
      </div>
  </div>
</div>
<CartFooter/>

    </>):
    <div className="flex justify-center p-4">
    <div className="flex flex-col items-center border border-black w-auto p-4 rounded gap-2">
      <img className="w-10 h-auto" src="../assets/warning.png" alt="" />
      <h2 className="text-center text-lg font-medium leading-snug">You do not have the permission to access checkout</h2>
      <p className="text-address-txt">you must log in first</p>
      <div className="flex flex-row gap-4 py-2">
        <button className="border border-brownish-creamy bg-brownish-creamy rounded-md w-20 h-8 text-white"><Link to="/login">Log in</Link></button>
        <button className="border border-brownish-creamy rounded-md w-20 h-8 text-brownish-creamy" onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
    </div>}
    </>
    
  );
}
