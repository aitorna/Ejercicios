import React from "react";

let persona1 = {
    'username':'Aitor',
    'email': 'aitor@algo.com'
}
function ComponenteUno({telefono}){
    return(
        <div>
            <h3>Username: {persona1.username}</h3>
            <h3>Email: {persona1.email}</h3>
            <h3>Telefono: {telefono}</h3>
        </div>
    )
}

export default ComponenteUno