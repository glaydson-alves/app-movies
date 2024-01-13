import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useState } from "react"

function Header() {

  // const [showMenu, setShowMenu] = useState(false)
  // const toggleMenu = () =>{
  //   setShowMenu(!showMenu)
  // }

  return (
    <header className={styles.header}>

      <Link to="/">
        <span>Cine Movies</span>
      </Link>

      <nav /**className={`${styles.menu}${ showMenu ? styles.show : ''}`}*/>
        <Link to="/">Home</Link>
        <Link to="/search">Pesquisar</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>

      {/* <div onClick={toggleMenu} className={styles.menuButton}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div> */}
    </header>
  )
}

export default Header