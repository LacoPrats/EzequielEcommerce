import { useEffect, useState } from "react";
import { traeProductos } from "./productos";

export const ItemListContainer=({greetings})=>{
    const [productos,setProductos]=useState([])
    const[cargando,SetCargando]=useState(true);
    useEffect(()=>{

        const promesa=new Promise((res,rej)=>{
            setTimeout(() => {
                res(productosIniciales)
            }, 3000);
        })
        promesa
        .then((respuestadelaApi)=>{
            setProductos(productosiniciales)
    })
    .catch((errordelaApi)=>{
        console.log(error);
    })
   .finally(()=>{
       setLoading(false)
   })
})
return(
    <Itemlist producto={productos}/>
)
}
export default ItemListContainer