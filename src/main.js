import{useState} from "react"
const Main=()=>{
    const[contador, setContador]= useState(0)
    const handleClick=()=>{
        contador=contador + 1
        contador++
    }
    const reStar=()=>{
        setContador(contador-1)
    }
    const reset=()=>{
        setContador(0)
    }


    return(
        <main className="container">
            <button onClick={handleClick}>aumentar</button>
            <button onClick={reStar}>restar</button>
            <button onClick={reset}>reset</button>
        </main>

    
    );
}
export default Main;