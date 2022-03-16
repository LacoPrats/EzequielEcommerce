import{useEffect, useState} from "react"

const baseDeDatos = [
    {
        id: 1,
        nombre: 'Patata',
        precio: 1,
        imagen: 'patata.jpg'
    },
    {
        id: 2,
        nombre: 'Cebolla',
        precio: 1.2,
        imagen: 'cebolla.jpg'
    },
    {
        id: 3,
        nombre: 'Calabacin',
        precio: 2.1,
        imagen: 'calabacin.jpg'
    },
    {
        id: 4,
        nombre: 'Fresas',
        precio: 0.6,
        imagen: 'fresas.jpg'
    }

];
let productosIniciales=[]
 
const Main=(props)=>{
    return(
        <main className="container">
            <p> La cantidad de produtos es :0</p>
            <p>{loading ? "Cargando productos":"Ya estan los productos cargados"}</p>
            <ul>
                {productos.map((productos,indice)=>{
                    return <li>productos.nombre</li>
                })}
            </ul>
            <button onClick={handleClick}>aumentar</button>
            <button onClick={reStar}>restar</button>
            <button onClick={reset}>reset</button>
        </main>

    
    );
}
export default Main;