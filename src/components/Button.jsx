import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MouseContext } from "../context/MouseContextProvider";
import '../styles.css';
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle :STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}>
                {children}
            </button>
        </Link>
    )
};
