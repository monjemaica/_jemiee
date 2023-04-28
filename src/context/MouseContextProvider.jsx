import { createContext, useState } from "react";

export const MouseContext = createContext({
    cursorType: "",
    cursorChangeHandler: (_cursorType) => {}// you can add cursorType here if you want to use typescript) => {},
  });

const MouseContextProvider = (props) => {
    const [cursorType, setCursorType] = useState("");
    const cursorChangeHandler = (cursorType) => {
        setCursorType(cursorType);
    };
    return (
        <MouseContext.Provider
            value={{
                cursorType: cursorType,
                cursorChangeHandler: cursorChangeHandler,
            }}
        >
            {props.children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;