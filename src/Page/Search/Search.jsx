import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Container from "../../Components/Container/Container"
import styles from "./Search.module.css"
import videos from "../../json/videos.json"
import SearchVideosList from "../../Components/SearchVideosList/SearchVideosList"

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