import styles from './Post.module.css'
import '../global.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/37695655?v=4" />
          <div className={styles.authorInfo}>
            <strong>Fabiany de Sousa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio as 08:13h" dateTime="2023-03-2027">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Oi pessoal!</p>
        <p>Esse é mais um dos meus projetos em que esto testando uma nova tecnologia. Usei como base o projeto que fui aprendendo no Ignite da Rocketseat</p>
        <p>
          <a href=''>jane.design/doctorcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#ignite</a>{' '}
          <a href=''>#rocketseat</a>{' '}
          <a href=''>#reactjs</a> 
        </p>
      </div>
    </article>
  );
}