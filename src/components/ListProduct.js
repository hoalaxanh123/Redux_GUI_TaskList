import React, { Component } from "react";
import Product from "./Product";

class ListProduct extends Component {
  onSetState=()=>{
    this.setState({
      isActive : !this.state.isActive
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      ListProduct: [
        {
          id: 1,
          name: "Samsung galaxy note 10",
          price: "10.000.000",
          image: "note10.jpg",
          des:
            "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
          status: true
        },
        {
          id: 2,
          name: "Samsung galaxy note 11",
          price: "11.000.000",
          image: "note10.jpg",
          des:
            "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
          status: true
        },
        {
          id: 3,
          name: "Samsung galaxy note 13",
          price: "12.000.000",
          image: "note10.jpg",
          des:
            "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
          status: true
        },
        {
          id: 4,
          name: "Samsung galaxy note 14",
          price: "14.000.000",
          image: "note10.jpg",
          des:
            "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
          status: true
        },
        {
          id: 5,
          name: "Samsung galaxy note 15",
          price: "15.000.000",
          image: "note10.jpg",
          des:
            "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
          status: true
        }
      ],
      isActive: false
    };
  }

  AddNewProduct = () => {
    console.log(
      "Name: " +
        this.refs.name.value +
        ", Des: " +
        this.refs.des.value +
        ", Price: " +
        this.refs.price.value
    );
  };
  render() {
    // var ListProduct = [
    //   {
    //     id: 1,
    //     name: "Samsung galaxy note 10",
    //     price: "10.000.000",
    //     image: "note10.jpg",
    //     des: "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
    //     status: true
    //   },
    //   {
    //     id: 2,
    //     name: "Samsung galaxy note 11",
    //     price: "11.000.000",
    //     image: "note10.jpg",
    //     des: "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
    //     status: true
    //   },
    //   {
    //     id: 3,
    //     name: "Samsung galaxy note 13",
    //     price: "12.000.000",
    //     image: "note10.jpg",
    //     des: "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
    //     status: true
    //   },
    //   {
    //     id: 4,
    //     name: "Samsung galaxy note 14",
    //     price: "14.000.000",
    //     image: "note10.jpg",
    //     des: "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
    //     status: true
    //   },
    //   {
    //     id: 5,
    //     name: "Samsung galaxy note 15",
    //     price: "15.000.000",
    //     image: "note10.jpg",
    //     des: "Tặng Đồng hồ Galaxy Fit, SDP không dây, Clearview, và Trả góp 0%",
    //     status: true
    //   }
    // ];

    var element = this.state.ListProduct.map((product, index) => {
      if (!product.status)
        return (
          <div key={product.id}>
            <h1 className="label-danger">
              This product cannot show (id: {product.id})
            </h1>
          </div>
        );
      return (
        // <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={product.id}>
        <Product
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          des={product.des}
        />
        // </div>
      );
    });
    return (
      <div className="container">
        {/* Form nhập liệu */}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" />
          <div className="panel panel-default float-left">
            <div className="panel-heading">Add product</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  ref="name"
                  className="form-control"
                  placeholder="Enter the product name"
                />
              </div>

              <div className="form-group">
                <label>Description: </label>
                <input
                  type="text"
                  ref="des"
                  className="form-control"
                  placeholder="Enter the product description"
                />
              </div>

              <div className="form-group">
                <label>Price:</label>
                <input
                  type="text"
                  ref="price"
                  className="form-control"
                  placeholder="Enter the product price"
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={this.AddNewProduct}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        {/* List sản phẩm */}
        <div className="row">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{element}</tbody>
            </table>
          </div>
          <button type="button" class="btn btn-primary" onClick={this.onSetState}>Active: {this.state.isActive?"true":"false"}</button>
        </div>
      </div>
      
      
      
    );
  }
}

export default ListProduct;
