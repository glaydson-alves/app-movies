import styles from "./Favorites.module.css"
import Header from "../../Components/Header/Header"
import Container from "../../Components/Container/Container"
import Footer from "../../Components/Footer/Footer"

function Favorites(){
    return(
        <>
            <Header />
            <Container>
                <div className={styles.favorites}>
                    <h2>Favoritos</h2>
                    Lista de de favoritos
                </div>

            </Container>
            <Footer/>
        </>
    )
}

export default Favorites