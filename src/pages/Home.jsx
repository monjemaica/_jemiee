import HeroSection from "../components/HeroSection";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";


const Home = () => {
    return (
        <>
            <section id="section_header">
                <HeroSection />
            </section>
            <section className="section_about" id="section_about">
                <About />
            </section>

            <section id="section_projects">
                <Projects />
            </section>

            <section id="section_experience">
                <Experience />
            </section>
        </>
    );
}

export default Home;