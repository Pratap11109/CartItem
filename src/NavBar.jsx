import React, { Component } from "react";

const NavBar = (props) => {
  const { total, totalamt } = props;
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <li>
          <img
            src="https://image.flaticon.com/icons/png/128/1170/1170576.png"
            alt=""
            width="50"
            height="50"
            className=""
          />
          <button className="btn btn-warning mx-2"> {total}</button>
        </li>
        <div style={{ color: "white" }} className="col-5 float-left">
          TOTAL : {totalamt}
        </div>
      </div>
    </nav>
  );
};

let styles = {
  nav: {
    margin: "Auto",
    fontSize: 30,
    color: "Red",
  },
};

export default NavBar;
