import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addStuToListAction,
  editStuToListAction,
  findStuToListAction,
} from "../Redux/Action/infoStuAction";

class FormInfo extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      phoneNunbers: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      phoneNunbers: "",
      email: "",
    },
    errClass: {
      maSV: "",
      hoTen: "",
      phoneNunbers: "",
      email: "",
    },
    // errClass: "is-invalid",
    activeBTN: true,
  };
  getValueInput = (event) => {
    let { id, value } = event.target;

    let newState = this.state;
    newState.value[id] = value;

    let type = event.target.getAttribute("data-type");

    if (newState.value[id] === "") {
      newState.errClass[id] = "is-invalid";

      newState.errors[id] =
        id === "maSV"
          ? "Mã sinh viên không được để trống"
          : id === "hoTen"
          ? "Họ tên sinh viên không được để trống"
          : id === "phoneNunbers"
          ? "Số điện thoại sinh viên không được để trống"
          : "Email sinh viên không được để trống";
    } else {
      newState.errClass[id] = "is-valid";
      newState.errors[id] = "";

      let regexNotSpace = /^\S*$/;
      let regexNotText = /^[0-9]+$/;
      let regexNotNumber = /^([^0-9]*)$/;
      let regixEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      switch (type) {
        case "maSV":
          {
            let notSpace = regexNotSpace.test(newState.value[id]);
            let nottext = regexNotText.test(newState.value[id]);

            if (!nottext) {
              newState.errClass[id] = "is-invalid";
              newState.errors[id] = "No text";
            }
            if (!notSpace) {
              newState.errClass[id] = "is-invalid";
              newState.errors[id] = "No space";
            }
          }
          break;
        case "hoTen":
          {
            let notNumber = regexNotNumber.test(newState.value[id]);

            if (!notNumber) {
              newState.errClass[id] = "is-invalid";
              newState.errors[id] = "No numbers";
            }
          }
          break;
        case "email":
          {
            let emailregex = regixEmail.test(newState.value[id]);

            if (!emailregex) {
              newState.errClass[id] = "is-invalid";
              newState.errors[id] = " Email syntax error!";
            } else {
              newState.errClass[id] = "is-valid";
              newState.errors[id] = "";
            }
          }
          break;
        case "phoneNunbers":
          {
            let PhoneRegex = regexPhoneNumber.test(newState.value[id]);

            if (!PhoneRegex) {
              newState.errClass[id] = "is-invalid";
              newState.errors[id] = "Phone number syntax error!";
            } else {
              newState.errClass[id] = "is-valid";
              newState.errors[id] = "";
            }
          }
          break;

        default:
          break;
      }
    }

    let valid = false;
    for (const item in this.state.value) {
      if (this.state.errors[item] !== "" || this.state.value[item] === "") {
        valid = true;
      }
    }

    // console.log(valid);
    this.setState({
      value: newState.value,
      errors: newState.errors,
      errClass: newState.errClass,
      activeBTN: valid,
    });
  };
  getValueSearch = (event) => {
    let { value } = event.target;
    console.log(value);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addStuToListAction(this.state.value));
  };
  render() {
    console.log(this.props.listInfoStuFind);
    let { maSV, hoTen, phoneNunbers, email } = this.state.errors;
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="my-3">
          <div className="row mb-3">
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${this.state.errClass.maSV}`}
                  placeholder="Mã sinh viên"
                  id="maSV"
                  data-type="maSV"
                  onChange={this.getValueInput}
                  // value={this.props.listInfoStuFind.maSV}
                />
                <label htmlFor="floatingInput">Mã sinh viên</label>
                <div className="invalid-feedback">{maSV}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${this.state.errClass.hoTen}`}
                  placeholder="Họ tên"
                  id="hoTen"
                  data-type="hoTen"
                  onChange={this.getValueInput}
                  // value={this.props.listInfoStuFind.hoTen}
                />
                <label htmlFor="floatingInput">Họ tên</label>
                <div className="invalid-feedback">{hoTen}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${this.state.errClass.phoneNunbers}`}
                  placeholder="Số điện thoại"
                  id="phoneNunbers"
                  data-type="phoneNunbers"
                  onChange={this.getValueInput}
                  // value={this.props.listInfoStuFind.phoneNunbers}
                />
                <label htmlFor="floatingInput">Số điện thoại</label>
                <div className="invalid-feedback">{phoneNunbers}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${this.state.errClass.email}`}
                  placeholder="Email"
                  id="email"
                  data-type="email"
                  onChange={this.getValueInput}
                  // value={this.props.listInfoStuFind.email}
                />
                <label htmlFor="floatingInput">Email</label>
                <div className="invalid-feedback">{email}</div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-dark mb-3"
            disabled={this.state.activeBTN}
            type="submit"
            hidden={false}
          >
            Thêm sinh viên
          </button>
          <button
            className="btn btn-dark mb-3"
            // disabled={this.state.activeBTN}
            // type="submit"
            // hidden={false}
            onClick={() => {
              this.props.dispatch(editStuToListAction(this.state.value));
            }}
          >
            Cập nhật
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(event) => {
              this.props.dispatch(findStuToListAction(event.target.value));
            }}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listInfoStuFind: state.infoStu.arrListStuFind,
  };
};
export default connect(mapStateToProps)(FormInfo);
