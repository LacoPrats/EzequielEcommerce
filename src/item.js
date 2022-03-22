import { useEffect, useState } from "react";

import React from "react";
function Item({product}){
    const{title,price,stock,image}=product
    return(
        <>
        <h4>{title}</h4>
        <img src={image}></img>
        <p>Precio{price}</p>
        <button>Ver Detalles</button>
        <h4>Stock Disponible {stock}</h4>
        </>
    )
}
   export default Item