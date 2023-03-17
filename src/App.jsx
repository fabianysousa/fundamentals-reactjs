import { Post } from "./Post"
import { Header } from "./componentes/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./componentes/Sidebar"

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
