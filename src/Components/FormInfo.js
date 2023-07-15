import React, { Component } from "react";
import { connect } from "react-redux";
import { addStuToListAction } from "../Redux/Action/infoStuAction";

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
    activeBTN: false,
  };
  getValueInput = (event) => {
    let { id, value } = event.target;

    let newState = this.state;

    let type = event.target.getAttribute("data-type");

    newState.value[id] = value;

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
      newState.errClass[id] = "";
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
              newState.errClass[id] = "";
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
              newState.errClass[id] = "";
              newState.errors[id] = "";
            }
          }
          break;

        default:
          break;
      }
    }

    this.setState({
      value: newState.value,
      errors: newState.errors,
      errClass: newState.errClass,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    let { maSV, hoTen, phoneNunbers, email } = this.state.errors;
    console.log(this.state);
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
                />
                <label htmlFor="floatingInput">Email</label>
                <div className="invalid-feedback">{email}</div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-dark"
            disabled={this.state.activeBTN}
            type="submit"
            onClick={() => {
              console.log(this.state);
              this.props.dispatch(addStuToListAction(this.state.errors.value));
            }}
          >
            Thêm sinh viên
          </button>
        </div>
      </form>
    );
  }
}

const Reduxcomponent = connect()(FormInfo);

export default Reduxcomponent;
//
