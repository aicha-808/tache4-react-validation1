import { Col} from "react-bootstrap";

export const ComposantProjects = ({imgUrl}) => {
    return(
        <Col size={12} sm={3} md={3} className="m-0 p-0 projImg">
             {/* <img src={imgUrl} className=" img-fluid mb-3 p-0 m-0" alt="..." /> */}
             <div className="card m-0 p-0">
                <img src={imgUrl} className="img-fluid image" alt=""/>
            </div>
        </Col>        
    )
}