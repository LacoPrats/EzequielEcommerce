import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
        <ul>
           <NavLink to="cat1">inicio</NavLink>
           <NavLink to="cat3">Tienda</NavLink> 
           <NavLink to="./Carrito">Carrito</NavLink> 
        </ul>
    </nav>
    );
};
export default Navbar