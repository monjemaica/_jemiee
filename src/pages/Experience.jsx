import { useContext } from "react";
import Content from "../components/Content";
import { MouseContext } from "../context/MouseContextProvider";
import { getCompany } from "../services/companyData";

const Experience = ({ exp, onSelected, isActive }) => {
    const { cursorChangeHandler } = useContext(MouseContext);

    return (
        <>
            <div className="separator">
                <span className="heading--no">03.&nbsp;</span>
                <span className="heading">
                    Experience
                </span>
            </div>
            <div className="grid-container">
                <div>
                    <ul className="list-group">
                        {getCompany().map(e =>
                            <li key={e.id} onClick={() => onSelected(e.id)} className={isActive === e.id ? "list--item active" : "list--item"} onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}>
                                {e.company}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="content--container">
                    <div className="content--details">
                        <Content exp={exp}/>
                    </div>
                    
                    <div className="content--img-container">
                        <div className="content--img">
                           <img src="../assets/images/img-10.jpg" alt="" />
                           <img src="../assets/images/img-10.jpg" alt="" />
                           <img src="../assets/images/img-10.jpg" alt="" />
                            {/* {exp.map(res =>
                                <img src={res.img} alt="" />
                            )} */}
                        </div>
                    </div>
                </div>


            </div>


        </>
    );
}

export default Experience;