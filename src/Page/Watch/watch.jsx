import Header from "../../Components/Header/Header"
import Container from "../../Components/Container/Container"
import Footer from "../../Components/Footer/Footer"
import styles from "./Watch.module.css"

function Watch (){
    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                <iframe width="854" height="480" src="https://www.youtube.com/embed/uAqtHu74GmU?si=FQUdkfSyT01YIsZX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section>
            </Container>    
            <Footer />
        </>
    )
}

export default Watch