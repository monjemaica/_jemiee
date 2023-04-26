import Content from "../components/Content";
import { getCompany } from "../services/companyData";

const Experience = ({ exp, onSelected, isActive }) => {

    return (
        <>
            <div className="separator">
                <span className="heading--no">03.&nbsp;</span> 
                <span className="heading">
                    Experience
                </span>
            </div>
            <div className="box-container">
                <div>
                    <ul className="list-group">
                        {getCompany().map(e =>
                            <li key={e.id} onClick={() => onSelected(e.id)} className={isActive === e.id ? "list--item active" : "list--item"}>
                                {e.company}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="content">
                    <Content exp={exp} />
                </div>

                <div className="square--container">
                    <div className="square--img">
                        {exp.map(res =>
                            <img src={res.img} alt="" />
                        )}
                    </div>

                </div>

            </div>


        </>
    );
}

export default Experience;