import react from 'react';
import "../estilos.css"; 
import logo from "./assets/logo.png";
import Carrito from './CartWidjet';



export const Nav = () =>{
    return (
        <nav className="nav">

            <img className = "img-1" src ={logo}/>

            <button className="btn">
                Menu
            </button>
            <button className="btn">
                Productos
            </button>
            <button className= "btn">
                Nosotros
            </button>       

            <Carrito/>    
                  
        </nav>
    )
}
export default Nav;