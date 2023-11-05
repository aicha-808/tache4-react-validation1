import { Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimonial1 from "../images/female-.jpg";
import testimonial2 from "../images/avatar3.jpg";
import testimonial3 from "../images/female-.jpg";
import { ComposantCarousel } from "../composants/ComposantCarousel";


export const Testimonials = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
    };

    //   testimonials
    const composantCarousel = [
        {
            imgUrl: testimonial1,
            description: "We put our trust in Sunnyside and they delivered, making sure pur needs were met and deadlines were always hit",
            Nom: "Emily R.",
            Poste: " Maketing Director"
        },
        {
            imgUrl: testimonial2,
            description: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success ade it a satisfying and enjoyable experience.",
            Nom: "Thoas S.",
            Poste: " Maketing Director"
        },
        {
            imgUrl: testimonial3,
            description: "Incredible end result! Our sales increased over 40% when we worked with Sunnyside. Highly recommended!",
            Nom: "Jennie F.",
            Poste: "Business Owner"
        }
    ]

    return(
        <section className="testimonial-sect text-center bg-light py-5" id="testimonials">
            <Container>
                <Row >
                    <h4 className="mt-5 fw-semibold">CLIENT TESTIMONIALS</h4>
                    <Col>
                        <Carousel responsive={responsive} infinite={true} className="testimonials">
                            {
                                composantCarousel.map((carousel, index) => {
                                    return (
                                        <ComposantCarousel key={index} {...carousel}/>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}