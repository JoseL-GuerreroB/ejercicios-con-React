import React,{useState} from "react";
import '../styles/Tarea.css';
import TareaFormulario from '../components/TareaFormulario'
import Tarea from "./Tarea";

export default function ListaTareas(){

    const [tareas,setTareas]= useState([]);

    const eliminarTarea = (id)=>{
        const tareasActualizadas = tareas.filter(tarea=> tarea.id !== id);
        setTareas(tareasActualizadas)
    }

    const agregarTarea = (tarea)=>{
        if(tarea.texto.trim()){
            tarea.texto= tarea.texto.trim();

            const tareasActualizadas= [tarea,...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        //En el campo no se agrega un contenedor
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map(tarea=>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id} 
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completar={completarTarea}
                            eliminar={eliminarTarea}
                            />
                        )
                }
            </div>
        </>
    )
}