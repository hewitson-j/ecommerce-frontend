import { Route, Routes } from "react-router";
import TestMain from "../pages/TestMain/TestMain";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TestMain />} />
    </Routes>
  );
}
