import React, { Component } from "react";
import { connect } from "react-redux";
import { addStuToListAction } from "../Redux/Action/infoStuAction";

class FormInfo extends Component {
  state = {
    maSV: "",
    hoTen: "",
    phoneNunbers: "",
    email: "",
  };
  getValueInput = (event) => {
    let { id, value } = event.target;
    this.setState({
      [id]: value,
    });
    console.log();
  };
  render() {
    console.log(this.state);
    return (
      <div className="my-3">
        <div className="row mb-3">
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Mã sinh viên"
                id="maSV"
                onChange={this.getValueInput}
              />
              <label htmlFor="floatingInput">Mã sinh viên</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Họ tên"
                id="hoTen"
                onChange={this.getValueInput}
              />
              <label htmlFor="floatingInput">Họ tên</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Số điện thoại"
                id="phoneNunbers"
                onChange={this.getValueInput}
              />
              <label htmlFor="floatingInput">Số điện thoại</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                id="email"
                onChange={this.getValueInput}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
          </div>
        </div>
        <button
          className="btn btn-dark"
          disabled
          onClick={() => {
            console.log(this.state);
            this.props.dispatch(addStuToListAction(this.state));
          }}
        >
          Thêm sinh viên
        </button>
      </div>
    );
  }
}

const Reduxcomponent = connect()(FormInfo);

export default Reduxcomponent;
//
