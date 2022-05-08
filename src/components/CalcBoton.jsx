import React from "react";
import '../styles/CalcBoton.css';

export default function CalcBoton(props){

    const esOperador=(valor)=>{
        return isNaN(valor) && valor !== '.' && valor !== '=';
    };

    return(
        <div className={`Tecla ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={()=> props.manejarClick(props.children)}>
            {props.children}
        </div>
    )
}