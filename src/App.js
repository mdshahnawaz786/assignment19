import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Cart from "./component/Cart";
import { createContext, useState } from "react";


export const myContext = createContext();

function App() {

  const [state, setstate ] = useState([])

  return (
    <div className="App">
      <Navbar />
      <myContext.Provider value={{state,setstate}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
