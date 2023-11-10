import { Row, Col, Container } from "react-bootstrap";
import aboutImg from '../images/about1.png';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
    return(
        <section className="about-section text-center text-light " id="about">
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <h1 className="fw-semibold lh-2">WE ARE CREATIVES</h1>
                        <div className="about-image mt-5">
                            <img src={aboutImg} alt="" className="img-fluid"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}