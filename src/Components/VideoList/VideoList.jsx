import styles from "./VideoList.module.css"
import Card from "../Card/Card"

function VideoList({videos, emptyHeading}) {

  const count = videos.length
  let heading = emptyHeading
  if(count > 0) {
    const noun = count > 1 ? "vídeos" : "vídeo"
    heading = `${count} ${noun}`
    // nessa função eu faço a verificação de quantidades de videos encontradas pela pesquisa.
    // count vai resceber a quantide encontrada enquato que 'noun' vai verificar se é maior que 1 para ele receber o valor no plural ou no singular.
  }
  //
  return (
    <>
      <h2>{heading}</h2>
      <div className={styles.videos}>
        {videos.map((video) => (
          <Card id={video.id} key={video.id} />
        ))}
      </div>
    </>
  );
}

export default VideoList
