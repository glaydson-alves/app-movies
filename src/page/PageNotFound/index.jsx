import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import erro404 from "./Oops! 404 Error.png"
import styles from "./PageNotFound.module.css"

function PageNotFound(){
    return(
        <>
            <Header/>
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={erro404} alt="Logo de pagina não localizada" />
            </section>
            <Footer/>
        </>
        
    )
}

export default PageNotFound