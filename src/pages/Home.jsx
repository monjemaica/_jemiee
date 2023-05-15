import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import { getExp } from "../services/experienceData";
import Footer from "../components/Footer";
import { getProject } from "../services/projectData";


const Home = () => {
    const [exp, setExp] = useState([]);
    const [prj, setPrj] = useState([]);
    const [filter, setFilter] = useState([getExp()[0]]);
    const [active, setActive] = useState("9d384aae-4f79-4f82-8034-0e77f84a115e");
    
    
    const handleOnSelected = (id) => {
        try {
            let newData = exp.filter(e => e.id === id);
            setFilter(newData)
            setActive(id);
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        const doGetExp = async() => {
            const res = await getExp()
            setExp(res);
        }
        const doGetPrj = async() => {
            const res = await getProject();
            setPrj(res);
        }
        
        doGetExp();
        doGetPrj();
    }, [])
    
    return (
        <>
            <section id="section_header">
                <HeroSection />
            </section>
            <section className="section_about" id="section_about">
                <About />
            </section>

            <section id="section_projects">
                <Projects prj={prj} />
            </section>

            <section id="section_experience">
                <Experience exp = {filter} onSelected = {handleOnSelected} isActive={active}/>
            </section>
            <Footer />
        </>
    );
}

export default Home;