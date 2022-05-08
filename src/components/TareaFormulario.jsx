import React,{useState} from "react";
import '../styles/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

export default function TareaFormulario(props){

const [input, setInput]= useState('');

    const manejarEnvio=(e)=>{
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    const manejarCambio = (e)=>{
        setInput(e.target.value);
    }
    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto" onChange={manejarCambio}/>
            <input type="submit" value="Incluir tarea" className="tarea-submit" onSubmit={manejarEnvio}/>
        </form>
    );
}