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
import { register } from "../redux/features/authSlice";
export default function Register() {
  const initalState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initalState);
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return toast.error("Password Doesn't match");
    if (firstName && lastName && email && password && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

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
          <h5>Sign Up</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              noValidate
              className="row g-3"
            >
              <MDBValidationItem
                feedback=" Provide your First Name"
                invalid
                className="col-md-6"
              >
                <MDBInput
                  label="First Name"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={onInputChange}
                  required
                />
              </MDBValidationItem>
              <MDBValidationItem
                feedback="Provide your Last Name"
                invalid
                className="col-md-6"
              >
                <MDBInput
                  label="Last Name"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={onInputChange}
                  required
                />
              </MDBValidationItem>
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
              <MDBValidationItem
                feedback="Please Provide your Confirm Password"
                invalid
                className="col-md-12"
              >
                <MDBInput
                  label=" Password Confirm"
                  type="password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={onInputChange}
                  required
                />
              </MDBValidationItem>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }} className="mt-2">
                  {loading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  Register
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
          <MDBCardFooter>
            <p>
              Already have an account?
              <Link to="/login">
                <span> Sign In</span>
              </Link>
            </p>
          </MDBCardFooter>
        </MDBCard>
      </div>
    </>
  );
}
