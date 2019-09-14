import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: "0"
    };
  }
  onHandleChange = param => {
    var target = param.target;
    var name = target.name;
    var value;
    if (name === "status") {
      target.value === "1" ? (value = true) : (value = false);
    } else value = target.value;

    this.setState({
      [name]: value
    });
  };
  UNSAFE_componentWillMount = () => {
    if (this.props.EditAble && this.props.EditingTask) {
      this.setState({
        id: this.props.EditingTask.id,
        name: this.props.EditingTask.name,
        status: this.props.EditingTask.status
      });
    }
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.EditAble && nextProps.EditingTask && nextProps) {
      this.setState({
        id: nextProps.EditingTask.id,
        name: nextProps.EditingTask.name,
        status: nextProps.EditingTask.status
      });
    } else {
      this.setState({
        id: "",
        name: "",
        status: 1
      });
    }
  }

  BlockSubmitForm = event => {
    event.preventDefault();
  };

  callFatherUpdateFunction = () => {
    this.props.VarUpdateFunctionDad(this.state);
    this.callFatherAction();
  };
  render() {
    console.log("Render: ", this.state);
    return (
      <form onSubmit={this.BlockSubmitForm} id="MyForm">
        <div className="panel panel-primary TaskForm">
          <div className="panel-heading">
            <h3 className="panel-title">
              {!this.props.EditAble ? "Thêm mới công việc" : "Sửa công việc"}
            </h3>
          </div>
          <div className="panel-body">
            <div className="form-group">
              <label>Tên công việc:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Nhập vào tên công việc"
                name="name"
                onChange={this.onHandleChange}
                value={this.state.name ? this.state.name : ""}
              />
            </div>
            <div className="form-group">
              <label>Trạng thái:</label>
              <select
                name="status"
                className="form-control"
                onChange={this.onHandleChange}
                value={this.state.status ? "1" : "0"}
              >
                <option value="1">Hoạt động</option>
                <option value="0">Ẩn</option>
              </select>
            </div>
          </div>
          <div className="panel-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() =>
                !this.props.EditAble
                  ? this.props.onAddTask(this.state)
                  : this.props.onUpdateTask(this.state)
              }
            >
              Xác nhận
            </button>
            <button
              type="button"
              className="btn btn-danger mt-left5"
              onClick={() => this.props.onCloseForm()}
            >
              Đóng
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapToProps = state => {
  return {
    EditingTask: state.editing_task,
    EditAble: state.editable,
    IsDisplayFrom: state.toggle_form
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddTask: task => {
      dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.UnSetEditAble());
      dispatch(actions.setEditingTask(null));
      dispatch(actions.closeForm());
    },
    setEditingTask: task => {
      dispatch(actions.setEditingTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onUpdateTask: task => {
      dispatch(actions.updatingTask(task));
    }
  };
};

export default connect(
  mapToProps,
  mapDispatchToProps
)(TaskForm);
