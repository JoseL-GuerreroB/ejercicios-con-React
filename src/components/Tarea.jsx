import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Tarea({id, texto, completada, completar, eliminar}){
    return (
        <div className={`tarea-contenedor ${completada===true ? 'tarea-contenedor-completado' : ''}`.trimEnd()}>
            <div
                className={`tarea-texto ${completada===true ? 'tarea-contenedor-completado' : ''}`.trimEnd()}
                onClick={()=> completar(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle className="tarea-icono" onClick={()=> eliminar(id)}/>
            </div>
        </div>
    );
}