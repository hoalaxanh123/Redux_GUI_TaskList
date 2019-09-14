import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";

class TaskControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeSort: ""
    };
  }
  onHandleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  UNSAFE_componentWillMount = () => {
    this.setState({
      typeSort: this.props.sortCondition.typeSort
    },
    console.log("ASS: ",this.props.sortCondition));
  };
  callFatherSort = (type, prop, typeSort) => {
    this.props.setSortCondition({ type, prop, typeSort });
    this.setTypeSortState(typeSort);
  };
  setTypeSortState = type => {
    this.setState({
      typeSort: type
    });
  };
  render() {
    return (
      <div className="row ">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="input-group">
            <input
              type="text"
              name="keyword"
              id="input"
              className="form-control"
              required="required"
              value={this.state.keyword}
              onChange={this.onHandleChange}
            />

            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => this.props.setKeyWord(this.state.keyword)}
              >
                <i className="fas fa-search" />
                &nbsp;&nbsp;Tìm kiếm
              </button>
            </span>
          </div>
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="dropdown">
            <button
              className="dropdown-toggle btn btn-primary"
              data-toggle="dropdown"
            >
              Sắp xếp &nbsp;
              <i className="fas fa-sort-down" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="#Action"
                  className="CusorPoint"
                  onClick={() => this.callFatherSort(1, "name", "0")}
                >
                  <span className="fa fa-sort-alpha-asc pr-5" />
                  &nbsp;Từ A-Z{" "}
                  {this.state.typeSort === "0" ? (
                    <i className="fas fa-check" />
                  ) : (
                    ""
                  )}
                </a>
              </li>
              <li>
                <a
                  href="#Action"
                  className="CusorPoint"
                  onClick={() => this.callFatherSort(-1, "name", "1")}
                >
                  <span className="fa fa-sort-alpha-desc pr-5" />
                  &nbsp; Từ Z-A{" "}
                  {this.state.typeSort === "1" ? (
                    <i className="fas fa-check" />
                  ) : (
                    ""
                  )}
                </a>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <a
                  href="#Action"
                  className="CusorPoint"
                  onClick={() => this.callFatherSort(1, "status", "2")}
                >
                  <i className="fas fa-check-square" /> Trạng thái kích hoạt
                  {this.state.typeSort === "2" ? (
                    <i className="fas fa-check" />
                  ) : (
                    ""
                  )}
                </a>
              </li>
              <li>
                <a
                  href="#Action"
                  className="CusorPoint"
                  onClick={() => this.callFatherSort(-1, "status", "3")}
                >
                  <i className="fas fa-times" /> Trạng thái ẩn
                  {this.state.typeSort === "3" ? (
                    <i className="fas fa-check" />
                  ) : (
                    ""
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    sortCondition: state.change_sortcondition
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setKeyWord: keyword => {
      dispatch(actions.setKeyWord(keyword));
    },
    setSortCondition: condition => {
      dispatch(actions.setSortCondition(condition));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskControl);
