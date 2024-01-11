import styles from "./SearchVideosList.module.css"
import VideoList from "../VideoList/VideoList"
import { useState } from "react"

function filterVideos(videos, searchText){
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideosList({videos}){

    const [ searchText, setText ] = useState("Evangélicos")
    const foundVideos = filterVideos(videos, searchText)

    return(
        <div className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar"
                value={searchText}
                onChange={event => setText(event.target.value)}
            />

            <VideoList 
                videos={foundVideos}
                emptyHeading={`Sem vídeos sobre "${searchText}"`}
            />
        </div>
    )
}

export default SearchVideosList