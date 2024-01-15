import styles from "./Banner.module.css"

function Banner(){
    return(
        <div 
            className={styles.banner} 
            style={ {backgroundImage: "url('/public/images/banner-home.png')"} }
        ></div>
    )
}

export default Banner