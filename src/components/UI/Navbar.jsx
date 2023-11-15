import React from "react";
import {Navbar, Container, Nav as BootstrapNav} from "react-bootstrap";

export default function Nav({ links, currentPage }) {
    return (
      <nav className="navbar navbar-expand cool-text py-4">
        <div className="container-fluid d-flex justify-content-between align-items-center pr-4">
          <div className="container-fluid navbar-text cool-text">
            Lucas Fernandez
          </div>
        <div className="me-auto">
          <ul className="navbar-nav">
            {links.map((link,index) => (
              <li className="nav-item" key={index}>
                {link}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </nav>
    );
  }