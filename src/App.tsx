import "./App.css";
import { Router } from "./app/Router";
import GlobalContextProvider from "./contexts/GlobalContextProvider";

function App() {
  return (
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  );
}

export default App;
