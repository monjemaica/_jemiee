import { useContext } from "react";
import { MouseContext } from "../context/MouseContextProvider";

const Projects = ({ prj }) => {
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
            {prj.map(p =>
                    <div className="card grid-container grid-2" onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>

                        <img src={p.img} alt=""/>
                        <div className="card_contents">

                            <div className="card_header">
                                {p.header}
                                <h2>{p.project}</h2>
                            </div>
                            <div className="card_body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam laborum dolor minima soluta delectus perspiciatis dolore perferendis ea animi?</p>
                                <div className="badge--container">
                                    <span className="badge badge--primary badge--small">ReactJs</span>
                                    <span className="badge badge--primary badge--small">MongoDB</span>
                                    <span className="badge badge--primary badge--small">MongoDB</span>
                                    <span className="badge badge--primary badge--small">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>

            )}
                </div>
               



        </>
    );
}

export default Projects;