import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: "-1" //-1: all         1: active             0:deactive
    };
  }
  onHandleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.props.setFilterName(this.state);
      }
    );
  };

  render() {
    var { taskList } = this.props;
    if (this.state.filterName) {
      taskList = taskList.filter(item => {
        return (
          item.name
            .toLowerCase()
            .indexOf(this.state.filterName.toLowerCase()) !== -1
        );
      });
    }
    taskList = taskList.filter(item => {
      if (this.state.filterStatus === "-1") return taskList;
      var stt = this.state.filterStatus === "1" ? true : false;
      return item.status === stt;
    });
    if (this.props.keyword) {
      taskList = taskList.filter(item => {
        return (
          item.name.toLowerCase().indexOf(this.props.keyword.toLowerCase()) !==
          -1
        );
      });
    }
    let sortCondition = this.props.sortCondition;
    console.log(sortCondition);
    if (sortCondition.prop === "name") {
      taskList.sort((a, b) => {
        if (a.name > b.name) return sortCondition.type;
        else if (a.name < b.name) return -sortCondition.type;
        else return 0;
      });
    } else {
      taskList.sort((a, b) => {
        if (a.status > b.status) return sortCondition.type;
        else if (a.status < b.status) return -sortCondition.type;
        else return 0;
      });
    }
    var elementTask = taskList.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />;
    });

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <br />
          <div className="table-responsive table-bordered">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="col-md-1">STT</th>
                  <th className="col-md-2">ID</th>
                  <th className="col-md-6">Tên</th>
                  <th className="col-md-1">Trạng thái</th>
                  <th className="col-md-2">Hành động</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td />
                  <td />
                  <td>
                    <input
                      type="text"
                      name="filterName"
                      className="form-control"
                      value={this.state.filterName}
                      required="required"
                      onChange={this.onHandleChange}
                    />
                  </td>
                  <td>
                    <select
                      name="filterStatus"
                      id="inputfilterStatus"
                      className="form-control"
                      required="required"
                      onChange={this.onHandleChange}
                      value={this.state.filterStatus}
                    >
                      <option value="-1">Tất cả</option>
                      <option value="1">H.Động</option>
                      <option value="0">Ẩn</option>
                    </select>
                  </td>
                  <td />
                </tr>
                {elementTask}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("TASKLIST: ", state);
  return {
    taskList: state.List_GettAll,
    filter: state.change_filter,
    keyword: state.change_keyword,
    sortCondition: state.change_sortcondition
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilterName: filter_name => {
      dispatch(actions.setFilterName(filter_name));
    },
    setTaskList: tasks => {
      dispatch(actions.setTaskList(tasks));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
