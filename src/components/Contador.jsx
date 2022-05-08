import React from "react";
import '../styles/Contador.css';

export default function Contador({NumClicks}) {
    return(
        <div id="contador">
            {NumClicks}
        </div>
    )
}