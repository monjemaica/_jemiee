import Content from "../components/Content";
import { getCompany } from "../services/companyData";

const Experience = ({ exp, onSelected, isActive }) => {

    return (
        <>
            <div className="heading">Experience</div>
            <div className="box-container">

                <ul className="list-group">
                    {getCompany().map(e =>
                        <li key={e.id} onClick={() => onSelected(e.id)} className={isActive === e.id ? "list--item active" : "list--item"}>
                            {e.company}
                        </li>
                    )}
                </ul>
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
            {/* <div className="exp--container">
                <div className="box--container">

                    <ul className="list-group">
                        {getCompany().map(e =>
                            <li key={e.id} onClick={() => onSelected(e.id)} className={isActive === e.id ? "list--item active" : "list--item"}>
                                {e.company}
                            </li>
                        )}
                    </ul>
                    <div className="content">
                        <Content exp={exp} />
                    </div>
                </div>
                <div className="square--container">
                    <div className="square--img">
                        {exp.map(res =>
                            <img src={res.img} alt="" />
                        )}
                    </div>
                </div>
            </div> */}


        </>
    );
}

export default Experience;