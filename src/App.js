import Favicon from "react-favicon";
import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import HeroSection from "./pages/HeroSection/HeroSection";
import Footer from "./pages/Footer/Footer";
import Faviconfile from "../src/media/favicon.png";
import Products from "./pages/Product/Products";
import Cart from "./pages/Cart/Cart";
import Fav from "./pages/Fav/Fav";
function App() {
    return (
        <div className="App" id="mainApp">
            <Favicon url={Faviconfile} />
            <NavBar />
            <Routes>
                <Route path="" element={<HeroSection />}></Route>
                <Route path="your-cart" element={<Cart />}></Route>
                <Route path="your-fav" element={<Fav />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="ele" element={<Products />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
