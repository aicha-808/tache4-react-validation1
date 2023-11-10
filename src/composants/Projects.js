import { Container, Row } from "react-bootstrap";
import imgBidonBas from '../images/img10.jpg';
import imgOrangeHaut from '../images/img11.jpg';
import imgTakosBas from '../images/img3.PNG';
import imgSucreHaut from '../images/img4.PNG';
import { ComposantProjects } from "./ComposantProjects";

export const Projects = () => {
    const projects= [
        {
            imgUrl: imgBidonBas,
        },
        {
            imgUrl: imgOrangeHaut,
        },
        {
            imgUrl: imgTakosBas,
        },
        {
            imgUrl: imgSucreHaut,
        }
    ]
    return(
        <section className="projects " id="projects">
            <Container fluid className="p-0 m-0 cont-proj">
                <Row className="d-flex g-0 ">
                    {
                        projects.map((project, index) => {
                            return(
                                <ComposantProjects key={index} {...project} />
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}