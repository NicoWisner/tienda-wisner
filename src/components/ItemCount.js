import react,{ useState } from "react";
import "../estilos.css";


const Contador = ({stock, title}) => {
    console.log(stock, title);

    const [contador, setContador] = useState (0);
   
   
    const handlerClickSumar = ()=>{
        if (contador < stock) {
       setContador(contador + 1);
    } else { 
        return 
    }
            
        
    }

    const handlerClickRestar = ()=>{
        if (contador > 0){
         setContador(contador - 1);
        }else{
            return
        }


       
     }

     const reset = () =>{

        setContador(0)

     }
    
    return(
        <div>       
    
            <div>{}</div>
            <h1>{contador}</h1>            
            <button onClick = {handlerClickRestar}>-</button>
            <button onClick = {reset}>Resetear Carrito</button>            
            <button onClick = {handlerClickSumar}>+</button>
        </div>   
    );
}
export default Contador;