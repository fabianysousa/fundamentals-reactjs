import {Bird} from 'phosphor-react' 
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Bird />
      <strong>My feed</strong>
    </header>
  );
}