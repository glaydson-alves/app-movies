import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Container from "../../Components/Container/Container"
import styles from "./Search.module.css"
import VideoList from "../../Components/VideoList/VideoList"
import videos from "../../json/videos.json"

function Search(){
    return(
        <>
            <Header/>
            <Container>
                <div className={styles.search}>
                    <h2>Pesquisar</h2>
                    <VideoList videos={videos}/>
                </div>
            </Container>
            <Footer/>
        </>
        
    )
}

export default Search