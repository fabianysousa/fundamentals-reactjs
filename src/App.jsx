import { Post } from "./Post"
import { Header } from "./componentes/Header"
import './global.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Post author="Fabiany de Sousa" context="Teste1"/>
      <Post author="Anonimo" context="Teste2"/>
    </div>  
  )
}

export default App
