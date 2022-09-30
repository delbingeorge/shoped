import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import HeroSection from "./pages/HeroSection/HeroSection";
import Category from "./pages/Category/Category";
import Footer from "./pages/Footer/Footer";
function App() {
    return (
        <div className="App" id="mainApp">
            <NavBar />
            <HeroSection />
            <Category />
            <Footer />
        </div>
    );
}

export default App;
