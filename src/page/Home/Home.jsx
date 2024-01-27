import Banner from "../../components/Banner/Banner"
import Container from "../../components/Container/Container"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"
import Carousel from "../../components/Carousel/Carousel"
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton"
import Category, { categories, filterCategory } from "../../components/Category/Category"


function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Header/>
      <Banner image="home"/>
      <Container>
        {categories.map((category, index) =>
          <Category key={index} category={category}>
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
