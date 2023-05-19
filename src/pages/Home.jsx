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
        const doGetExp = async () => {
            const res = await getExp()
            setExp(res);
        }
        const doGetPrj = async () => {
            const res = await getProject();
            setPrj(res);
        }

        doGetExp();
        doGetPrj();
    }, [])

    return (
        <>
            <div id="section_header">
                <HeroSection />
            </div>
            <div className="section_about" id="section_about">
                <About />
            </div>

            <div id="section_projects">
                <Projects prj={prj} />
            </div>

            <div id="section_experience">
                <Experience exp={filter} onSelected={handleOnSelected} isActive={active} />
            </div>
            <div id="section_contact" className="center">
                <div className="heading--no">04.&nbsp;</div>
                <span className="heading">
                    Get In Touch
                </span>
                <p >I'm open to any new job opportunities. You can email me anytime! <i className="fa-light fa-message-question "></i></p>
                <div className="btn-margin-top">
                    <a href="mailto:jemaemon04@gmail.com?subject='Hi Jem!'&body='Just popped in to say hello'" className="btn btn--outline btn--medium" >Email Me</a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;