import React, { Component, createRef, useRef } from "react";
import { connect } from "react-redux";
import {
  addStuToListAction,
  editStuToListAction,
  findStuToListAction,
  readOnly,
  searchStuToListAction,
} from "../Redux/Action/infoStuAction";
import TableListStudent from "./TableListStudent";

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

    activeBTN: true,

    btnUpdate: true,
    btnAdd: false,
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addStuToListAction(this.state.value));
    this.setState({
      ...this.state,
      value: {
        maSV: "",
        hoTen: "",
        phoneNunbers: "",
        email: "",
      },
    });
  };
  // maSV, hoTen, phoneNunbers, email
  setValueInput = (maSV, hoTen, phoneNunbers, email, btnUpdate, btnAdd) => {
    this.setState({
      ...this.state,
      value: {
        maSV: maSV,
        hoTen: hoTen,
        phoneNunbers: phoneNunbers,
        email: email,
      },
      btnUpdate,
      btnAdd,
    });
  };
  render() {
    let { maSV, hoTen, phoneNunbers, email } = this.state.errors;
    console.log(this.state);

    return (
      <div>
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
                    readOnly={this.props.listInfoStu.infoStu.readOnly}
                    onChange={this.getValueInput}
                    value={this.state.value.maSV}
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
                    value={this.state.value.hoTen}
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
                    value={this.state.value.phoneNunbers}
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
                    value={this.state.value.email}
                  />
                  <label htmlFor="floatingInput">Email</label>
                  <div className="invalid-feedback">{email}</div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-dark mb-3 me-3"
              disabled={this.state.activeBTN}
              type="submit"
              hidden={this.state.btnAdd}
            >
              Thêm sinh viên
            </button>
            <button
              className="btn btn-dark mb-3"
              // disabled={this.state.activeBTN}
              // type="submit"
              hidden={this.state.btnUpdate}
              type="button"
              onClick={() => {
                // this.state.value
                this.props.dispatch(
                  editStuToListAction({
                    value: this.state.value,
                    action: "editStu",
                  })
                );
                this.setState({
                  ...this.state,
                  value: {
                    maSV: "",
                    hoTen: "",
                    phoneNunbers: "",
                    email: "",
                  },
                  btnUpdate: true,
                  btnAdd: false,
                });
                this.props.dispatch(readOnly(false));
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
                this.props.dispatch(searchStuToListAction(event.target.value));
              }}
            />
          </div>
        </form>{" "}
        <TableListStudent setValueInput={this.setValueInput} ref={this.ref} />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     listInfoStu: state,
//   };
// };
// export default connect(mapStateToProps)(FormInfo);
const mapStateToProps = (state) => {
  // .infoStu.arrListStu, .infoStu.arrListStuFind
  // listInfoStuFind: state,
  //   addStu: state.infoStu.addStu,
  return {
    listInfoStu: state,
  };
};

export default connect(mapStateToProps)(FormInfo);
