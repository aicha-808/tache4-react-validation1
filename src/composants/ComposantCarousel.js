import { Col} from "react-bootstrap";

export const ComposantCarousel = ({imgUrl, description, Nom, Poste, }) => {
    return(
        <Col size={12} sm={12} md={12}>
            <div className="card rounded-0 border-0 text-center mt-5" >
                <img src={imgUrl} className="card-img-top rounded-circle mx-auto" alt="..." />
                <div className="card-body">
                    <p className="card-text mb-3">{description}</p>
                   <div className="mt-5">
                        <h5 className="card-title">{Nom}</h5>
                        <p className="card-text">{Poste}</p>  
                   </div>
                </div>
            </div>
        </Col>        
    )
}