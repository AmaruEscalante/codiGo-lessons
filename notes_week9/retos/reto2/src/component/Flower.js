import { Component } from 'react';

class Flower extends Component {
    // var imageUrl = "https://fyf.tac-cdn.net/images/products/large/F-898.jpg";
    // state = {
    //     imageUrl
    // }

    constructor(){
        super();
        this.imageUrl = "https://fyf.tac-cdn.net/images/products/large/F-898.jpg";
        // this.flowerName = "Some flower";
        // this.flowerPrice = 10;
    }

    render() {

        return <div className="d-inline-flex card m-5" style={{width: "18rem"}}>
                <img src={this.props.imageUrl} className="card-img-top" height="300px" width="100px" alt="..."></img>
                <div className="card-body">
                    <h5 className="fs-1 card-title">{this.props.flowerName}</h5>
                    <span className="fs-2">S./{this.props.flowerPrice}</span>
                </div>
            </div>
    }
}

export default Flower;
