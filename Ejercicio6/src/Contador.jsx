import {useState} from 'react'


export default function Contador() {
    const [contador, setContador] = useState(0);
    
    const aumentar = () =>{
        setContador(contador+1);
    }

    const disminuir = () =>{
        if(contador>0)
        setContador(contador-1);
        else
            alert("NO PUEDES BAJAR DE CERO");
    }

    const resetear = () =>{
        setContador(0);
    }

    return (
        <div> 

            
            <h2>{contador}</h2>
            <button onClick={aumentar}>AUMENTAR</button>
            <button onClick={disminuir}>DISMINUIR</button>
            <button onClick={resetear}>RESETEAR</button>
        </div>
    )
}
