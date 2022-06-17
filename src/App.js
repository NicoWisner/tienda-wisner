import react from 'react'
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
     
    </div>
  )
}
export default App 
