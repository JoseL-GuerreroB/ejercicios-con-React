import '../App.css';
import { useState } from 'react';
import CalcBoton from '../components/CalcBoton';
import Pantalla from '../components/Pantalla';
import CalcBtnClear from '../components/CalcBtnClear';
import { evaluate } from 'mathjs';

export default function PageCalculadora() {

    const [input, setInput] = useState('');

    const agregarInp = (val) => {
        setInput(input + val);
    };

    const limpiarInp = () => {
        setInput('');
    };

    const resInp = () => {
        if (input) {
            setInput(evaluate(input));
        } else {
            alert("introduce valores por favor");
        }
    };

    return (
        <div className="campo-calculadora">
            <h2>Calculadora</h2>
            <div className="contenedor-calculadora">
                <Pantalla input={input} />
                <div className="fila">
                    <CalcBoton manejarClick={agregarInp} >1</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >2</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >3</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >+</CalcBoton>
                </div>
                <div className="fila">
                    <CalcBoton manejarClick={agregarInp} >4</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >5</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >6</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >-</CalcBoton>
                </div>
                <div className="fila">
                    <CalcBoton manejarClick={agregarInp} >7</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >8</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >9</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >*</CalcBoton>
                </div>
                <div className="fila">
                    <CalcBoton manejarClick={resInp} >=</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >0</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >.</CalcBoton>
                    <CalcBoton manejarClick={agregarInp} >/</CalcBoton>
                </div>
                <div className="fila">
                    <CalcBtnClear manejarClick={limpiarInp}>Limpiar</CalcBtnClear>
                </div>
            </div>
            <br /><br />
        </div>
    )
}