import react from 'react'
import Contador from './components/ItemCount';
import Title from './components/ItemListContainer';
import { Nav } from './components/NavBar'
import "./estilos.css";

const App = () => {
  return (
    <div>
      <Nav/>
      <br/>
      <br/>
      <Title greeting={"Mi E-Commerce"}/>
      <Contador stock={10} title = {"das"}/>
     
    </div>
  )
}
export default App 
