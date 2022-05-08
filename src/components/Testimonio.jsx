import React from "react";
import '../styles/Testimonio.css';

export default function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img src={require(`../img/persona${props.img}.jpg`)} alt="Foto" className="imagen-testimonio"/>
            <div className="contenedor-texto-testimonio">
                <h3 className="titulo-testimonio">{props.nombre}</h3>
                <h4 className="cargo-testimonio">{props.cargo}</h4>
                <p className="texto-testimonio">{props.testimonio}</p>
            </div>
        </div>
    );
}