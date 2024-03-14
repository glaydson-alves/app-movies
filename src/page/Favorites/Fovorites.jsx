import styles from "./Favorites.module.css"
import Header from "../../components/Header/Header"
import Container from "../../components/Container/Container"
import Footer from "../../components/Footer/Footer"
import VideoList from "../../components/VideoList/VideoList"
import { useFavoriteContext } from "../../contexts/Favorites"
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton"
import Banner from "../../components/Banner/Banner"

function Favorites(){

    const { favorite } = useFavoriteContext()

    return(
        <>
            <ScrollToTopButton />
            <Header />
            <Banner image="home" />
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