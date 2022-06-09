import React, { useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import {setLogout} from "../redux/features/authSlice"

export default function Header() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
        >
          Tourpedia
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigate"
          style={{ color: "#606080" }}
          onClick={() => setShow(!show)}
        >
          <MDBIcon icon="bars" fas></MDBIcon>
        </MDBNavbarToggler>
        <MDBCollapse id="navbarCollapse3" show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-2">
            {user && <h5 style={{marginRight: "20px", marginTop: "30px"}}>
              Logged in as: {user?.result?.firstName}
              </h5>}
          <MDBNavbarItem>
                  <MDBNavbarLink href="/">
                    <p className="header-text">Home</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
            {user ? (
              <>
                
                <MDBNavbarItem>
                  <MDBNavbarLink href="/addTour">
                    <p className="header-text">Add Tour</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink href="/logout" onClick={() => dispatch(setLogout())}>
                    <p className="header-text">Logout</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            ) : (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p className="header-text">Login</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
