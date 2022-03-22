import{useEffect, useState} from "react"
import { Routes } from "react-router-dom";
import ItemListContainer from "./itemListContainer";

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
      <ItemListContainer />
        </main>

    
    );
}
export default Main;