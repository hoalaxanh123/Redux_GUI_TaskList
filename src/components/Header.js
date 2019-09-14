import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-ex1-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                <b>TMA</b> Solutions
              </a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <button type="submit" className="btn btn-default mt-left5">
                    Search
                  </button>
                </form>
                <li className="dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Hello, Vuong
                    <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/">Action</a>
                    </li>
                    <li>
                      <a href="/">Another action</a>
                    </li>
                    <li>
                      <a href="/">Something else here</a>
                    </li>
                    <li>
                      <a href="/">Separated link</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Logout !</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
