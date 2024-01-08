import Banner from "../Components/Banner/Banner"
import Container from "../Components/Container/Container"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Card from "../Components/Card/Card"
import videos from "../json/videos.json"
import Category from "../Components/Category/Category"
  
// aqui eu fiz um array com as categorias do meu arquivo json
const categories = [
  "Evangélicos",
  "Ação",
  "Comédia",
  "Terror",
  "Infantil",
  "Documentários"
]
function filterCategory(id){
  return videos.filter( video => video.category === categories[id] )
}

function Home() {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Container>

        <Category category={categories[0]}> {/* aqui coloca os titulos*/}
          {/* quando a tag no React precisar de abertura e de fachamento significa que ela precisará usar ou será usado children (filhos) */}
          {filterCategory(0).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>

        <Category category={categories[1]}>

          {filterCategory(1).map((video) => <Card id={video.id} key={video.id}/>)}

        </Category>

        
        <Category category={categories[2]}>

          {filterCategory(2).map((video) => <Card id={video.id} key={video.id}/>)}

        </Category>

        
        <Category category={categories[3]}>

          {filterCategory(3).map((video) => <Card id={video.id} key={video.id}/>)}

        </Category>

        
        <Category category={categories[4]}>

          {filterCategory(4).map((video) => <Card id={video.id} key={video.id}/>)}

        </Category>

        <Category category={categories[5]}>

          {filterCategory(5).map((video) => <Card id={video.id} key={video.id}/>)}

        </Category>

        
      </Container>
      <Footer/>
    </>
  )
}

export default Home
