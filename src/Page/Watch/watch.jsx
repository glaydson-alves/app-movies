import Header from "../../Components/Header/Header"
import Container from "../../Components/Container/Container"
import Footer from "../../Components/Footer/Footer"
import styles from "./Watch.module.css"
import { useParams } from "react-router-dom"
import videos from "../../json/videos.json"
import PageNotFound from "../PageNotFound"
function Watch (){
    // params "parametro" = useParams() permite que eu receba os parametrosa que são enviadosm quando seleciona um video do home e mostra na url
    const params = useParams()
    // videos.find usei o metodo find para buscar no arquivo json, cada objeto do arquivp eu irei chamar de video e que é atribuido como parametro
    const video = videos.find((video) => { return video.id === params.id})
    if(!video){ return <PageNotFound/> }
    // video.id === params.id}) aqui vai retornar se o id que o params recebeu na url existe no arquivo json.
    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                <iframe 
                    width="854"
                    height="480"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </section>
            </Container>    
            <Footer />
        </>
    )
}

export default Watch