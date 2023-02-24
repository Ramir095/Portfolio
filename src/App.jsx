import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex bg-white w-full h-screen text-[#9da5ac]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
