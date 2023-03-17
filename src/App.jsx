import { Post } from "./componentes/Post"
import { Header } from "./componentes/Header"
import { Sidebar } from "./componentes/Sidebar"
import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Fabiany de Sousa" context="Teste1" />
          <Post author="Anonimo" context="Teste2" />
        </main>
      </div>
    </div>  
  )
}

export default App
