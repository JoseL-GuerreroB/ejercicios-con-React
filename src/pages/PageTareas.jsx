import '../App.css';
import ListaTareas from '../components/ListaTareas';

export default function PageTareas() {
    return(
        <div className="campo-tareas">
            <h2>Aplicacion de tareas</h2>
            <div className="contenedor-tareas">
                <h3>Mis Tareas</h3>
                <ListaTareas />
            </div>
        </div>
    )
}