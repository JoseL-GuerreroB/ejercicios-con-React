import React from "react";
import '../styles/CalcBoton.css';

const CalcBtnClear = (props)=>(
    <button className="Tecla operador" onClick={props.manejarClick}>
        {props.children}
    </button>
);
export default CalcBtnClear;