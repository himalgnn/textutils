import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link" href="about">
                                {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
                    <div className="palette">
                        <span className="dot" onClick={()=>props.toggleMode('#850000','white','Red')} style={{backgroundColor:'red'}}></span>
                        <span className="dot" onClick={()=>props.toggleMode('#21500D','white','Green')} style={{backgroundColor:'green'}}></span>
                        <span className="dot" onClick={()=>props.toggleMode('#00337C','white','Blue')} style={{backgroundColor:'blue'}}></span>
                        <span className="dot" onClick={()=>props.toggleMode('#FF78F0','black','Pink')} style={{backgroundColor:'pink'}}></span>
                        <span className="dot" onClick={()=>props.toggleMode('#1a1f24','white','Dark')} style={{backgroundColor:'black'}}></span>
                        <span className="dot" onClick={()=>props.toggleMode('white','black', 'Light')} style={{backgroundColor:'white'}}></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps ={
  title: "TextUtils",
  aboutText: "About",
};
