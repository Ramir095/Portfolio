import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
