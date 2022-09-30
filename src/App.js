import Favicon from "react-favicon";

import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import HeroSection from "./pages/HeroSection/HeroSection";
import Category from "./pages/Category/Category";
import Footer from "./pages/Footer/Footer";
import Gadgets from "./pages/Product/Gadgets/Gadgets";
import Faviconfile from "../src/media/favicon.png";
import Sports from "./pages/Product/Sports/Sports";
function App() {
    return (
        <div className="App" id="mainApp">
            <Favicon url={Faviconfile} />
            <NavBar />
            <HeroSection />
            <Category />
            <Gadgets />
            <Sports />
            <Footer />
        </div>
    );
}

export default App;
