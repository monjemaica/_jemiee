import { useContext } from "react";
import { MouseContext } from "../context/MouseContextProvider";
import { SiIonic } from 'react-icons/si'

const About = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    return (
        <>
            <div className="box-container ">
                <div className="square--container img--md" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
                    <div className="square--img">
                        <img src="../assets/images/img-dp.jpg" alt="" />
                    </div>
                </div>
                <div className="about--content">

                    <div className="separator">
                        <span className="heading--no">01. &nbsp;</span>
                        <span className="heading">
                            About
                        </span>
                    </div>
                    <p className="about--paragraph">
                    Mabuhay! I'm Jem, a passionate and dedicated Full-Stack developer located in Olongapo City, Philippines, who creates stuff for the Internet. Using ReactJs, TypeScript, Angular Framework, and Ionic, I have created a variety of APIs, websites, and mobile apps. However, I discovered that I was more intrigued with MERN stack development.

                    </p>
                    <p className="about--paragraph">
                        Interested in the entire developement of backend and working on ambitious projects with positive people.
                    </p>

                    <p className="about--paragraph">
                        Here are a few Programming Language/ Frameworks / Libraries I've been working with recently:
                    </p>
                    <ul className="list list--tick list--col2">
                        <li className="list__item"><i className="fa-brands fa-square-js"></i> JavaScript</li>
                        <li className="list__item"><i className="fa-brands fa-react"></i> ReactJs</li>
                        <li className="list__item"><i className="fa-brands fa-node-js"></i> Node.js</li>
                        <li className="list__item"><i className="fa-brands fa-laravel"></i> Laravel</li>
                        <li className="list__item"><i className="fa-brands fa-angular"></i> Angular</li>
                        <li className="list__item"><SiIonic/> Ionic</li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default About;