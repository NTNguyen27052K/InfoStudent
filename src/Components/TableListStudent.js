import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStuToListAction } from "../Redux/Action/infoStuAction";

class TableListStudent extends Component {
  renderListStu = (listInfoStu) => {
    return listInfoStu.map((item, index) => {
      return (
        <tr className="text-center" key={index}>
          <td>{item.maSV}</td>
          <td>{item.hoTen}</td>
          <td>{item.phoneNunbers}</td>
          <td>{item.email}</td>
          <td>
            <button
              className="btn btn-dark me-2"
              onClick={() => {
                this.props.dispatch(deleteStuToListAction(item));
              }}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
            <button className="btn btn-dark">
              <i class="fa-solid fa-pen"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.listInfoStu.arrListStu.phoneNunbers);
    return (
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
        <tbody>{this.renderListStu(this.props.listInfoStu.arrListStu)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listInfoStu: state.infoStu,
  };
};

export default connect(mapStateToProps)(TableListStudent);
