import React, { useContext } from 'react';
import { MouseContext } from '../../context/MouseContextProvider';
import useMousePosition from "./UseMousePosition";

const Cursor = () => {
    const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
    return (
      <>
        <div
          className={`ring ${cursorType}`} 
          style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
        <div
          className={`dot ${cursorType}`} 
          style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
      </>
    );
  };

export default Cursor;