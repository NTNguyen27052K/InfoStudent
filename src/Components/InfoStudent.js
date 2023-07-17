import React, { Component } from "react";
import FormInfo from "./FormInfo";
import TableListStudent from "./TableListStudent";

export default class InfoStudent extends Component {
  render() {
    return (
      <div className="container">
        <h1
          style={{ backgroundColor: "rgb(49 55 61)", borderRadius: "10px" }}
          className="fs-1 p-3 text-white text-center mt-3"
        >
          Thông tin sinh viên
        </h1>
        <FormInfo />
        {/* <TableListStudent /> */}
      </div>
    );
  }
}
