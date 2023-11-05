import { Container, Row } from "react-bootstrap";
import imgBidonBas from '../images/img1.jpg';
import imgOrangeHaut from '../images/img2..PNG';
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
        <section className="projects" id="projects">
            <Container fluid>
                <Row className="d-flex g-0">
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