import { Container, Row, Col} from "react-bootstrap";
import facebook from '../images/facebOk.png';
import instagram from '../images/instagram.png';
import twiter from '../images/twiter.png';
import pinterest from '../images/pinterest.png';

export const Footer = () => {
  
    return(
        <section className="footer p-5 text-center" id="footer">
           <Container >
                <Row className=" text-center ">
                   <Col sm={12} md={12} className="info">
                        <span className="w-semibold h2 mtt-3">Sunnyside</span>
                        <div className="lien d-flex mx-auto mt-3">
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <div className="icons d-flex mx-auto mt-5">
                            <a href="#f" ><img src={facebook} alt="" className="fbook"></img></a>
                            <a href="#f"><img src={instagram} alt="" ></img></a>
                            <a href="#f"><img src={twiter} alt=""></img></a>
                            <a href="#f"><img src={pinterest} alt=""></img></a>
                        </div>
                   </Col>
                </Row>
            </Container>
        </section>
    )
}