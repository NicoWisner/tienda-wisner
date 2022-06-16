import react from 'react';
import "../estilos.css"; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "./assets/logo.png";

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
            <button className= "img-2">
                <ShoppingCartIcon/>
            </button>
           
        </nav>
    )
}
export default Nav;