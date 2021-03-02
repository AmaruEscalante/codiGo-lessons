import Flower from './Flower';

export default function FlowerList (props){
    let elements = 5;

    let imageUrl = "https://fyf.tac-cdn.net/images/products/large/F-898.jpg";
    return(
       <div className="container bg-dark">
           <div className="row">
               <div className="col-md-12">
                   {/* START CAROUSEL */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                         <div className="carousel-inner text">
                            <div className="carousel-item">
                                <Flower imageUrl={imageUrl} flowerName="Flor 1" flowerPrice="10"/>
                                <Flower imageUrl={imageUrl} flowerName="Flor 2" flowerPrice="30"/>
                                <Flower imageUrl={imageUrl} flowerName="Flor 3" flowerPrice="20"/>
                            </div>
                            <div className="carousel-item active">
                                <Flower imageUrl={imageUrl} flowerName="Flor 3" flowerPrice="20"/>
                                <Flower imageUrl={imageUrl} flowerName="Flor 3" flowerPrice="20"/>
                            </div>
                            <div className="carousel-item">
                                <Flower imageUrl={imageUrl} flowerName="Flor 3" flowerPrice="20"/>
                            </div>
                         </div>
                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                     </div>
                    {/* END CAROUSEL */}
               </div>
           </div>
       </div>
    )
}