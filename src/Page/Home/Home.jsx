import Banner from "../../Components/Banner/Banner"
import Container from "../../Components/Container/Container"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Card from "../../Components/Card/Card"
import Carousel from "../../Components/Carousel/Carousel"
import Category, { categories, filterCategory } from "../../Components/Category/Category"


function Home() {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Container>
        {categories.map((category, index) =>
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
            </Carousel>
          </Category>
        )}
      </Container>
      <Footer/>
    </>
  )
}

export default Home
