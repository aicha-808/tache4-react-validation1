import { Col} from "react-bootstrap";

export const ComposantCarousel = ({imgUrl, description, Nom, Poste }) => {
    return(
        <Col size={12} sm={12} md={12}>
            <div class="card rounded-0 border-0 bg-transparent text-center mt-5" >
                <img src={imgUrl} class="card-img-top rounded-circle mx-auto" alt="..." />
                <div class="card-body">
                    <p class="card-text mb-3">{description}</p>
                   <div className="mt-5">
                        <h5 class="card-title">{Nom}</h5>
                        <p class="card-text">{Poste}</p>  
                   </div>
                </div>
            </div>
        </Col>        
    )
}