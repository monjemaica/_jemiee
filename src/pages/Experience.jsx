import { useContext, useState } from "react";
import Content from "../components/Content";
import Modal from "../components/Modal";
import { MouseContext } from "../context/MouseContextProvider";
import { getCompany } from "../services/companyData";

const Experience = ({ exp, onSelected, isActive }) => {
    const { cursorChangeHandler } = useContext(MouseContext);

    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState('');

    const openImg = (img) => {
        setIsOpen(true);
        setImg(img)
    }
    

    return (
        <>
            <div className="separator">
                <span className="heading--no">03.&nbsp;</span>
                <span className="heading">
                    Experience
                </span>
            </div>
            <div className="grid-container grid-1">
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
                    
                    <div className="content--img">
                            {exp.map(res =>
                                res.img.map((img, i) => 
                                <div className="content--img" onClick={() => openImg(img)}>
                                    <img key={i} src={img} alt="" />
                                </div>
                                )
                            )}
                    </div>
                </div>
            </div>
            {isOpen && <Modal img={img} onClose={setIsOpen}/>}

        </>
    );
}

export default Experience;