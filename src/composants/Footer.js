import { Container, Row, Col} from "react-bootstrap";
import facebook from '../images/facebOk.png';
import instagram from '../images/instagram.png';
import twiter from '../images/twiter.png';
import pinterest from '../images/pinterest.png';

export const Footer = () => {
  
    return(
        <section className="footer  text-center" id="footer">
           <Container fluid  className="p-0 m-0">
                <Row className=" ">
                   <Col sm={12} md={12} className="info py-5 m-0">
                        <span className="w-semibold h4 mt-3">Sunnyside</span>
                        <div className="lien d-flex mx-auto mt-3">
                            <p><a href="#about">About</a></p>
                            <p><a href="#services">Services</a></p>
                            <p><a href="#projects">Projects</a></p>
                        </div>
                        <div className="icons d-flex mx-auto mt-3 p-0 m-0">
                            <a href="#f" ><img src={facebook} alt="" ></img></a>
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