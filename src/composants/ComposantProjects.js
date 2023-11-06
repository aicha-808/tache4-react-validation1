import { Col} from "react-bootstrap";

export const ComposantProjects = ({imgUrl}) => {
    return(
        <Col size={12} sm={3} md={3} className="text-center m-0 p-0">
             <img src={imgUrl} className=" img-fluid mb-3" alt="..." />
        </Col>        
    )
}