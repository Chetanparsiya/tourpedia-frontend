import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBValidationItem,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";
export default function Login() {
  const initalState = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const {loading,error} = useSelector((state) => ({...state.auth}))
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initalState);
  const { email, password } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  useEffect(()=> {
    error&&toast.error(error)
  },[error])

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };
  return (
    <>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          marginTop: "120px",
        }}
      >
        <MDBCard alignment="center">
          <MDBIcon fas icon="user-circle" className="fa-2x" />
          <h5>Sign in</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              noValidate
              className="row g-3"
            >
              <MDBValidationItem
                feedback="Please Provide your Email"
                invalid
                className="col-md-12"
              >
                <MDBInput
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem
                feedback="Please Provide your Password"
                invalid
                className="col-md-12"
              >
                <MDBInput
                  label="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                  required
                />
              </MDBValidationItem>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }} className="mt-2">
                  {loading&&(<MDBSpinner 
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                    />)}
                  Login
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
          <MDBCardFooter>
            <p>
              Don't have an account?
              <Link to="/register">
                <span> Sign Up</span>
              </Link>
            </p>
          </MDBCardFooter>
        </MDBCard>
      </div>
    </>
  );
}
