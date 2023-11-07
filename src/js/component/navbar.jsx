import React from "react";

const NavItem = () => {

  const textItems = ["Home", "About", "Services", "Contact"];

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >{textItems.map((item, i) => {
      return (
        <li className="nav-item" key={i}>
          <a className= {i===0 ? "nav-linnk-active" : "nav-link" } aria-current="page" href="#">{item}</a>
        </li>
      )
    })}</ul>
  )

}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarText">
                <NavItem />
              </div>
            </div>
          </nav>
  );
};

export { Navbar };
