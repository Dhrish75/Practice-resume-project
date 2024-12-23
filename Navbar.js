import React from "react";
import { Link, Outlet } from "react-router-dom"; // Correctly import Outlet

const DoThis = () => {

}

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar" style={{ backgroundColor: "#E0E0E0" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              RESUME BUILDER
            </a>
            <div className="nav-item" on onClick={DoThis}>
          <a data-bs-toggle="popover" data-bs-placement="bottom" >Contact</a>
        </div>
        <Link to = "/signup" className="nav-item2">Login</Link>
          </div>
        </nav>
        <Outlet /> {/* This will render the Card or Details component */}
      </>
    );
  }
}

export default Navbar;