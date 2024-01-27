import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png"
import iconUnfavorite from "./unfavorite.png"
import { useFavoriteContext } from "../../contexts/Favorites";

function Card ({ id }){

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((favorit) => favorit.id === id)
    const iconFav = !isFavorite ? iconFavorite : iconUnfavorite

    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                 {/* aqui defini a rota onde receberá o id e a pagina será direcionada para a page watch/ jutamente com o id do video kselesionado que será usado pela funcão useParams() e será comparada pela pela arroy funtion para verifixar se a id existe no arquivo json */}
                
                <img className={styles.cover} src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}/>

            </Link>
            <figure className={styles.icon}>
                <img 
                    src={iconFav}
                    onClick={() => addFavorite({id})} 
                />
            </figure>
        </section>
    )
}
export default Card