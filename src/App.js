import Favicon from "react-favicon";

import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import HeroSection from "./pages/HeroSection/HeroSection";
import Category from "./pages/Category/Category";
import Footer from "./pages/Footer/Footer";
import Faviconfile from "../src/media/favicon.png";
import Products from "./pages/Product/Products";
function App() {
    return (
        <div className="App" id="mainApp">
            <Favicon url={Faviconfile} />
            <NavBar />
            <HeroSection />
            <Category />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
