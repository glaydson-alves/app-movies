import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card ({ id }){
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                 {/* aqui defini a rota onde receberá o id e a pagina será direcionada para a page watch/ jutamente com o id do video kselesionado que será usado pela funcão useParams() e será comparada pela pela arroy funtion para verifixar se a id existe no arquivo json */}
                
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}/>

            </Link>
        </section>
    )
}
export default Card