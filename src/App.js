import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import SkillChart from "./components/SkillChart";
import FunFacts from "./components/FunFacts";



function App() {
    return (
        <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <Hero />
            <Projects />
            <SkillChart/>
            <About />
            <FunFacts />
            <Contact />
            <Footer />
        </div>
    );
}
export default App;

