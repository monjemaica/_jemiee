import Projects from "./Projects";


const About = () => {
    return (
        <>
            <section className="section_about" id="section_about">
                <div className="heading regular"> About Me</div>
                <p className="about--paragraph">
                    Mabuhay! I'm Jem, a passionate and dedicated Full-Stack developer that build things in internet
                    based in Olongapo City, Philippines. I have developed many types of API development, Websites and
                    Mobile Apps using Angular/ Ionic and Laravel Framework.
                </p>
                <p className="about--paragraph">
                    Interested in the entire developement of backend and working on ambitious projects with positive people.
                </p>

                <p className="about--paragraph">
                    Here are a few Programming Language/ Frameworks I've been working with recently:
                </p>
                <ul class="list list--tick">
                    <li class="list__item">JavaScript</li>
                    <li class="list__item">ReactJs</li>
                    <li class="list__item">Node.js</li>
                    <li class="list__item">Laravel</li>
                    <li class="list__item">Angular</li>
                    <li class="list__item">Ionic</li>
                </ul>
            </section>

            <section id="section_projects">
                <Projects />
            </section>
        </>
    );
}

export default About;