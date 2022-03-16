import { useState } from "react";
useEffect(()=>{
    traeItemListContainer
    .then((res)=>{
        setProductos(res)
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        setCargando(false)
    });
},[]);
const [cargando,setCargando]=useState
let{id}=useParams()
console.log(id);