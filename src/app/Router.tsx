import { Route, Routes } from "react-router";
import TestMain from "../pages/TestMain/TestMain";
import Home from "../pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TestMain />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
