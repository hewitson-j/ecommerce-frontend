import { Route, Routes } from "react-router";
import TestMain from "../pages/TestMain/TestMain";
import Home from "../pages/Home/Home";
import Browse from "../pages/Browse/Browse";
import Orders from "../pages/Orders/Orders";
import Account from "../pages/Account/Account";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import OrderDetails from "../pages/OrderDetails/OrderDetails";

export function Router() {
  return (
    <Routes>
      {/* Storefront */}
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/browse/:category" element={<Browse />} />
      <Route path="/products/:id" element={<Product />} />

      {/* Shopping */}
      <Route path="/cart" element={<Cart />} />

      {/* Account */}
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/orders" element={<Orders />} />

      {/* Orders */}
      <Route path="/orders/search" element={<OrderDetails />} />
      <Route path="/orders/:orderId" element={<OrderDetails />} />

      {/* Development */}
      <Route path="/test" element={<TestMain />} />
    </Routes>
  );
}
