import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Container from "../../components/Container/Container"
import styles from "./Search.module.css"
import videos from "../../json/videos.json"
import SearchVideosList from "../../components/SearchVideosList/SearchVideosList"

function Search(){
    return(
        <>  
            
            <Header/>
            <Container>
                <div className={styles.search}>
                    
                    <SearchVideosList videos={videos}/>
                </div>
            </Container>
            <Footer/>
        </>
        
    )
}

export default Search