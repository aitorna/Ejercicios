import React from "react";

function retorno(parametro){
    return parametro;
}

function Funcion(){
    return(
        <h1>
            { retorno("Esto es el parámetro interpolarizado.") }
        </h1>

    )
}


export default Funcion