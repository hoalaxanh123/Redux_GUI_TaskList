import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";

class TaskItem extends Component {
  callShowFormFatherFunction = () => {
    this.props.VarEditFunctionDad(this.props.task);
  };

  render() {
    var { index } = this.props;
    var { task } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td>
          <button
            className={
              task.status
                ? "btn btn-success btn-block "
                : "btn btn-danger btn-block"
            }
            onClick={() => this.props.changeStatus(this.props.task.id)}
          >
            {task.status ? "H.Động" : "Ẩn"}
          </button>
        </td>
        <td>
          <div className="form-control-inline">
            <button
              type="button"
              className="btn  btn-primary"
              onClick={() => this.props.setTaskEditing(this.props.task)}
            >
              <i className="fas fa-edit" />
              &nbsp;Sửa
            </button>
            <button
              type="button"
              className="btn  btn-danger mt-left5"
              onClick={() => this.props.deleteTask(this.props.task.id)}
            >
              <i className="fas fa-trash" />
              &nbsp; Xoá
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStatus: id => {
      dispatch(actions.changeStatus(id));
    },
    deleteTask: id => {
      dispatch(actions.deleteTask(id));
    },
    setTaskEditing: task => {
      dispatch(actions.SetEditAble());
      dispatch(actions.openForm());
      dispatch(actions.setEditingTask(task));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskItem);
