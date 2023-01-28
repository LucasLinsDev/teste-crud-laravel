import styles from './Header.module.scss'
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";

export function Header(){
  return(
    <header className={styles.header}>
        <Logo/>
        <Menu/>
    </header>
  )
}