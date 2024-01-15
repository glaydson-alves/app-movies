import Banner from "../../Components/Banner/Banner"
import Container from "../../Components/Container/Container"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Card from "../../Components/Card/Card"
import Carousel from "../../Components/Carousel/Carousel"
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton"
import Category, { categories, filterCategory } from "../../Components/Category/Category"


function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Header/>
      <Banner/>
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
