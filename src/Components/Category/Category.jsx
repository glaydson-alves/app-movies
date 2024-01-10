import styles from "./Category.module.css"
import videos from "../../json/videos.json"
// aqui eu fiz um array com as categorias do meu arquivo json
export const categories = [
    "Evangélicos",
    "Ação",
    "Comédia",
    "Terror",
    "Infantil",
    "Documentários"
]
export function filterCategory(id){
    return videos.filter( video => video.category === categories[id] )
}

function Category({ category, children }) { 
    return(
        <section className={styles.category}>

            <h2>{ category }</h2>

            <div>
                { children }
            </div>
        </section>
    )
}
export default Category