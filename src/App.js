import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/main/TaskForm";
import TaskControl from "./components/main/TaskControl";
import TaskList from "./components/main/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";
// import demo from "./training/demo";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filterName: "",
      filterStatus: "-1",
      taskCounter: 0
    };
  }

  onShowEditableForm = task => {
    this.setState({
      isDisplayForm: true,
      taskEditing: task
    });
  };
  onReceiveFilterValue = param => {
    this.setState({
      filterName: param.filterName,
      filterStatus: param.filterStatus
    });
  };
  OnReceiveKeyWord = param => {
    this.setState({
      keyword: param.keyword
    });
  };
  setCounter = tasksListState => {
    this.setState({
      taskCounter: tasksListState.length
    });
  };
  onToggleForms = () => {
    if (this.props.isDisplayForm && this.props.EditingTask) {
      this.props.setNullTaskEditting();
      this.props.UnSetEditAble();
    } else this.props.onToggleForm();
  };
  render() {
  
    var { isDisplayForm } = this.props;
    var checkDisplayForm = isDisplayForm ? <TaskForm /> : "";
    return (
      <div className="container">
        <div className="row">
          <Header />
          {checkDisplayForm}
          <TaskControl
            sortFatherFunction={this.Sort}
            varOnReceiveKeyWord={this.OnReceiveKeyWord}
          />
          <br />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.onToggleForms()}
              >
                <i className="fas fa-plus" />
                &nbsp; Thêm công việc
              </button>

              <button
                type="button"
                className="btn btn-danger mt-left5 "
                onClick={() => this.props.resetTask()}
              >
                <i className="fas fa-sync" />
                &nbsp; Reset
              </button>
            </div>
          </div>
          <p className="danger">
            {this.state.taskEditing === 0 ? "Nothing to show" : ""}
          </p>
          <TaskList />
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    isDisplayForm: state.toggle_form,
    EditAble: state.editable,
    EditingTask: state.editing_task
    // filterName:state
  };
};
const mapDispatchToProps = (dispatch, ownProps, state) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
      dispatch(actions.UnSetEditAble());
      dispatch(actions.setEditingTask(null));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    setNullTaskEditting: () => {
      dispatch(actions.setEditingTask(null));
    },
    UnSetEditAble: () => {
      dispatch(actions.UnSetEditAble());
    },
    resetTask: () => {
      dispatch(actions.resetTask());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
