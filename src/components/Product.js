import React, { Component } from "react";

class Product extends Component {
  ChooseProduct = () => {
    alert(this.props.name);
  };

  ChooseProduct2(action, product) {
    alert(action + " " + product.name);
  }
  render() {
    return (
      <tr className="float-left">
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.des}</td>
        <td>{this.props.price}</td>
      </tr>
      // {/* <div className="thumbnail ">
      //   <img
      //     height="200"
      //     width="200"
      //     src="note10.jpg"
      //     alt="{this.props.name}"
      //   />
      //   <div className="caption">
      //     <h4>{this.props.name}</h4>
      //     <p>{this.props.des}</p>
      //     <h5 className="">
      //       <b>{this.props.price}</b>
      //     </h5>
      //     <p>
      //       <button className="btn btn-primary" onClick={this.ChooseProduct}>
      //         Buy now!
      //       </button>

      //       <button
      //         className="btn btn-default space"
      //         onClick={() => this.ChooseProduct2("Add", this.props)}
      //       >
      //         Add to Cart
      //       </button>
      //     </p>
      //   </div>
      // </div> */}
    );
  }
}

export default Product;
