import { Col} from "react-bootstrap";

export const ComposantProjects = ({imgUrl}) => {
    return(
        <Col size={12} sm={3} md={3}>
            <div class="card-group ">
                <div class="card rounded-0 ">
                    <img src={imgUrl} class="img-fluid" alt="..." />
                </div>
            </div>
        </Col>        
    )
}