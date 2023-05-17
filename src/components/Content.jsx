import React from 'react';
import '../App.css';
import '../styles.css';

const Content = ({ exp }) => {
    return (
        <>

            {exp.map((res, i) =>
                <div key={i}>
                    <div className="card_header">{res.role}</div>
                    <div className="content--header hover-underline-animation">
                        <a href={res.link}>
                            {res.company}
                        </a>
                    </div>
                    <div className='content--date'>{res.duration}</div>

                    <ul className="content--desc list list--tick">
                        {res.description.map((desc, i) =>
                            <li key={i} className="list__item">{desc}</li>
                        )}
                    </ul>

                </div>
            )}
        </>
    );
}

export default Content;