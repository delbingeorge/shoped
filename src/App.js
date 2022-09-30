import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import HeroSection from "./pages/HeroSection/HeroSection";
import Category from "./pages/Category/Category";
function App() {
    return (
        <div className="App" id="mainApp">
            <NavBar />
            <HeroSection />
            <Category />
        </div>
    );
}

export default App;
