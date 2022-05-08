import React from "react";
import Testimonio from '../components/Testimonio';
import Test from '../jsons/Testimonios.json';
import '../App.css';

export default function PageTestimonios() {
    const comentarios = Test;
    return (
        <div className="campo-testimonios">
            <h2>Los mejores testimonios</h2>
            {
                comentarios.map(coment =>
                    <Testimonio nombre={coment.nombre} cargo={coment.cargo} img={coment.img} testimonio={coment.testimonio} />
                )
            }
            <br /> <br />
        </div>
    )
}