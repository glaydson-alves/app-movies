import styles from "./Favorites.module.css"
import Header from "../../Components/Header/Header"
import Container from "../../Components/Container/Container"
import Footer from "../../Components/Footer/Footer"
import VideoList from "../../Components/VideoList/VideoList"
import { useFavoriteContext } from "../../contexts/Favorites"
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton"

function Favorites(){

    const { favorite } = useFavoriteContext()

    return(
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <div className={styles.favorites}>
                    <h2>Favoritos</h2>
                    {<VideoList videos={favorite} emptyHeading="Sem Favoritos"/> }
                </div>

            </Container>
            <Footer/>
        </>
    )
}

export default Favorites