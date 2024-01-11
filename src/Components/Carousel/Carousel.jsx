import Slider from "react-slick"
import "./Carousel.css"

function Carousel ({ children }){
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        variableHeigth: true,
        slidesToScroll: 1
    }

    return(
        <div>
            {/* Spread syntax (...) */}
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    )
}
export default Carousel
