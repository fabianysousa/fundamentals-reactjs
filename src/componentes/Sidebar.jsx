import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react'
import '../global.css'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src='https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'></img>
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/37695655?v=4"/>
        <strong>Fabiany de Sousa Costa</strong>
        <span>Web front-end developer</span>
      </div>
      <footer>
        <a href='https://www.instagram.com/fabiany_sousa/'>
          <InstagramLogo />
        </a>
        <a href='https://www.linkedin.com/in/fabiany-sousa/'>
          <LinkedinLogo />
        </a>
        <a href='https://github.com/fabianysousa'>
          <GithubLogo />
        </a>
      </footer>
    </aside> 
  )
}