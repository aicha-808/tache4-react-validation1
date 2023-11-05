import { Container } from "react-bootstrap"
import { Col, Row} from "react-bootstrap";
import imgOeuf from '../images/imgOeuf.PNG';
import imgtpomme from '../images/pomeImg-removebg.png';
import imgtVert from '../images/imgVer.PNG';
import imgtOrange from '../images/orange-removebg.png';

export const Services = () => {
    // const composantCard = [
    //     {
    //         title: "We are",
    //         description: "Using a collaborative formula of designers, reseachers, photographers,videographers, and copywriters, we'll build and extend your brand in digital places.",
    //         linkText: "LEARN MORE",
    //     },

    //     { imgUrl: imgOeuf},

    //     { imgUrl: imgtOrange},

    //     {
    //         title: "Stand out to the right audience",
    //         description: "Using a collaborative formula of designers, reseachers, photographers,videographers, and copywriters, we'll build and extend your brand in digital places.",
    //         linkText: "LEARN MORE",
    //     },

    //     {
    //         // imgUrl: imgtpomme,
    //         description: "Graphic Design",
    //         linkText: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potiental clients' attention." 
    //     },
    //     {
    //         // imgUrl: imgtasse,
    //         description: "Photography",
    //         linkText: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image. ",
    //     },
    // ]

    return(
        <section className="sect-services" id="services">
            <Container fluid>
            <Row className="p-0 m-0 g-0">
                <Col sm={6} md={6}>
                    <div className="card  text-center border-0 rounded-0 ">
                        <div className="card-body textCard m-0">
                            <h5 className="card-title mb-4 fw-bold">Transform your brand</h5>
                            <p className="card-text mb-5">Using a collaborative formula of designers, reseachers, photographers,videographers, and copywriters, 
                            we'll build and extend your brand in digital places.</p>
                            <a className="card-link mb-5 text-dark fw-bold" href="#h">LEARN MORE</a>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="card text-center border-0 rounded-0">
                        <div className="card-body p-0 m-0">
                            <img src={imgOeuf} alt="" className="img-fluid imgurl "></img>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="card text-center border-0 rounded-0 ">
                        <div className="card-body p-0 m-0">
                            <img src={imgtVert} alt="" className="imgurl img-fluid"></img>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="card  text-center border-0 rounded-0 ">
                        <div className="card-body textCard  m-0">
                            <h5 className="card-title mb-4 fw-bold">Stand out to the right audience</h5>
                            <p className="card-text  mb-5">Using a collaborative formula of designers, reseachers, photographers,videographers, and copywriters, 
                            we'll build and extend your brand in digital places.</p>
                            <a className="card-link mb-5 text-dark fw-bold" href="#h">LEARN MORE</a>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6}>
                <div className="card  text-center border-0 rounded-0 pomme">
                        <div className="card-body  m-0 contImg">
                            <img src={imgtpomme} alt="" className="img-card-top"></img>
                            <h5 className="card-title mt-5">Graphic Design</h5>
                            <p className="card-text mt-5">Great design makes you memorable. We deliver artwork that underscores your brand message 
                            and captures potiental clients' attention.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6}>
                    <div className="card text-center border-0 rounded-0 orange pb-5">
                        <div className="card-body  m-0 contImg">
                            <img src={imgtOrange} alt="" className="img-card-top"></img>
                            <h5 className="card-title mt-5 text-center">Photography</h5>
                            <p className="card-text mt-4 text-center">Increase your credibility by getting the most stunning, 
                            high-quality photos that improve your business image.</p>
                        </div>
                    </div>
                </Col>
           </Row>
            </Container>
        </section>
    )
}