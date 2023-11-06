import { Row, Col, Container } from "react-bootstrap";
import aboutImg from '../images/about1.png';

export const About = () => {
    return(
        <section className="about-section text-center text-light p-0 m-0" id="about">
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <h1 className="fw-semibold lh-2">WE ARE CREATIVES</h1>
                        <div className="about-image mt-5">
                            <img src={aboutImg} alt=""></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}