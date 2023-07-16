import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteStuToListAction,
  findStuToListAction,
} from "../Redux/Action/infoStuAction";

class TableListStudent extends Component {
  state = {
    arrStudent: [],
  };
  setState = {};
  renderListStu = () => {
    return this.state.arrStudent.map((item, index) => {
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
              onClick={() => {
                this.props.dispatch(findStuToListAction(item.maSV));
              }}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.state);
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
        <tbody>{this.renderListStu()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listInfoStu: state.infoStu.arrListStu,
    listInfoStuFind: state.infoStu.arrListStuFind,
  };
};

export default connect(mapStateToProps)(TableListStudent);

// renderListStu = (listInfoStu) => {
//   return listInfoStu.map((item, index) => {
//     return (
//       <tr className="text-center" key={index}>
//         <td>{item.maSV}</td>
//         <td>{item.hoTen}</td>
//         <td>{item.phoneNunbers}</td>
//         <td>{item.email}</td>
//         <td>
//           <button
//             className="btn btn-dark me-2"
//             onClick={() => {
//               this.props.dispatch(deleteStuToListAction(item));
//             }}
//           >
//             <i className="fa-solid fa-trash"></i>
//           </button>
//           <button
//             className="btn btn-dark"
//             onClick={() => {
//               this.props.dispatch(findStuToListAction(item.maSV));
//             }}
//           >
//             <i className="fa-solid fa-pen"></i>
//           </button>
//         </td>
//       </tr>
//     );
//   });
// };
