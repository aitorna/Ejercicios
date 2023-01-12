import React from "react";

let persona2 = {
    'username':'Martin',
    'email': 'martin@algo.com'
}
function ComponenteDos({telefono}){
    return(
        <div>
            <h3>Username: {persona2.username}</h3>
            <h3>Email: {persona2.email}</h3>
            <h3>Telefono: {telefono}</h3>
        </div>
    )
}

export default ComponenteDos
