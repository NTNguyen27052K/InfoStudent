import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  deleteStuToListAction,
  editStuToListAction,
  findStuToListAction,
  readOnly,
} from "../Redux/Action/infoStuAction";
import FormInfo from "./FormInfo";

class TableListStudent extends Component {
  state = {
    arrStudent: [],
  };

  renderListStu = (listStu) => {
    return listStu.map((item, index) => {
      return (
        <tr className="text-center" key={index}>
          <td>{item.maSV}</td>
          <td>{item.hoTen}</td>
          <td>{item.phoneNunbers}</td>
          <td>{item.email}</td>
          <td>
            {/* this.props.dispatch(deleteStuToListAction(item)); */}
            <button
              className="btn btn-dark me-2"
              onClick={() => {
                this.props.dispatch(deleteStuToListAction(item));
                // this.setState({
                //   ...this.state,
                // });
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <button
              className="btn btn-dark"
              onClick={async () => {
                await this.props.dispatch(
                  editStuToListAction({
                    value: item,
                    action: "findStuEdit",
                  })
                );
                await this.props.dispatch(readOnly(true));

                this.props.setValueInput(
                  this.props.listInfoStu.infoStu.arrListStuFind[0].maSV,
                  this.props.listInfoStu.infoStu.arrListStuFind[0].hoTen,
                  this.props.listInfoStu.infoStu.arrListStuFind[0].phoneNunbers,
                  this.props.listInfoStu.infoStu.arrListStuFind[0].email,
                  false,
                  true
                );
              }}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  renderListStuForAction = () => {
    if (this.props.listInfoStu.infoStu.actionStu === "addStu") {
      return this.renderListStu(this.props.listInfoStu.infoStu.arrListStu);
    }
    if (this.props.listInfoStu.infoStu.actionStu === "findStu") {
      return this.renderListStu(this.props.listInfoStu.infoStu.arrListStuFind);
    }
    if (this.props.listInfoStu.infoStu.actionStu === "") {
      // this.props.dispatch(actionStu : "findStu");
      return this.renderListStu(this.props.listInfoStu.infoStu.arrListStu);
    }
    if (this.props.listInfoStu.infoStu.actionStu === "editStu") {
      return this.renderListStu(this.props.listInfoStu.infoStu.arrListStu);
    }
  };

  render() {
    // console.log(this.props.listInfoStu.infoStu.arrListStuFind);

    return (
      <div>
        <table
          className="container text-white mb-3"
          style={{ border: "1px solid black", borderRadius: "10px" }}
        >
          <thead>
            <tr className="text-center">
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderListStuForAction()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // .infoStu.arrListStu, .infoStu.arrListStuFind
  // listInfoStuFind: state,
  //   addStu: state.infoStu.addStu,
  return {
    listInfoStu: state,
  };
};

export default connect(mapStateToProps)(TableListStudent);
