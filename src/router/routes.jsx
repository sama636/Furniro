import {createRoutesFromElements, Route} from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Layout from "@/components/layout/Layout";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Product from "@/components/layout/Product";
import Cart from "@/components/layout/Cart";
import Contact from "@/components/layout/Contact";
import Checkout from "@/components/layout/Checkout";
import Shop from "@/pages/Shop";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="register" element={<Register />} />
    <Route path="login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="shop" element={<Shop />} />
    <Route path="/shop/:categoryId" element={<Shop />} />
    <Route path="/checkout" element={<Checkout />} />
  </Route>,
);

export default routes;
