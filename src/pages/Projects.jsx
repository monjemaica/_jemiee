import { useContext } from "react";
import { MouseContext } from "../context/MouseContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Projects = ({ prj }) => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const location = useNavigate()

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
                    <div onClick={() => location(`/project/${p.id}`)} className="card grid-container grid-2" onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}>
                        <img src={p.img} loading="lazy" alt="" />
                        <div className="card_contents">

                            <div className="card_header">
                                {p.header}
                                <h2>{p.project}</h2>
                            </div>
                            <div className="card_body">
                                <p>{p.description}</p>

                                <div className="badge--container">
                                    {p.badge.map((b, i) =>
                                        <span key={i} className="badge badge--primary badge--small">{b}</span>
                                    )}

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