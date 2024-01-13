import styles from "./button.module.css"

function ScrollToTopButton(){
    const handleClick = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return (
        <button onClick={handleClick} className={styles.button}>
            &#9650;
        </button>
    )
}



export default ScrollToTopButton