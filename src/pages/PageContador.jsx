import '../App.css';
import { useState } from 'react';
import Boton from '../components/Boton';
import Contador from '../components/Contador';

export default function PageContador() {

    const [NumClicks, setNumClicks] = useState(0);

    const aumentarContador = () => {
        setNumClicks(NumClicks + 1);
    };

    const reiniciarContador = () => {
        setNumClicks(0);
    };
    return (
        <div className="campo-contador">
            <h2>Contador de clicks</h2>
            <Contador NumClicks={NumClicks} />
            <Boton texto="Click" esBotonDeClick={true} manejarClick={aumentarContador} />
            <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
            <br /><br />
        </div>
    )
}