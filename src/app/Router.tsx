import { Route, Routes } from "react-router";
import TestMain from "../pages/TestMain/TestMain";
import Home from "../pages/Home/Home";
import Browse from "../pages/Browse/Browse";
import Orders from "../pages/Orders/Orders";
import Account from "../pages/Account/Account";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TestMain />} />
      <Route path="home" element={<Home />} />
      <Route path="browse" element={<Browse />} />
      <Route path="orders" element={<Orders />} />
      <Route path="account" element={<Account />} />
      <Route path="product" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
