import { useContext } from "react";
import { MouseContext } from "../context/MouseContextProvider";

const Projects = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
    return (
        <>
            <div className="separator">
                <span className="heading--no">02. &nbsp;</span>
                <span className="heading">
                    Projects
                </span>
            </div>
            <div className="card_container">
                <div className="card" onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}>

                    <img src="../assets/images/img-9.jpg" alt="" />
                    <div className="card_contents">

                        <header className="card_header">
                            Project Name
                        </header>
                        <div className="card_body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam laborum dolor minima soluta delectus perspiciatis dolore perferendis ea animi?</p>
                            <span className="badge badge--primary badge--small">ReactJs</span>
                            <span className="badge badge--primary badge--small">MongoDB</span>
                        </div>
                    </div>
                </div>
                <div className="card" onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}>

                    <img src="../assets/images/img-9.jpg" alt="" />
                    <div className="card_contents">

                        <header className="card_header">
                            Project Name
                        </header>
                        <div className="card_body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam laborum dolor minima soluta delectus perspiciatis dolore perferendis ea animi?</p>
                            <span className="badge badge--primary badge--small">ReactJs</span>
                            <span className="badge badge--primary badge--small">MongoDB</span>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default Projects;