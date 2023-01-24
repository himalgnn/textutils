import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
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
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                {props.aboutText}
                            </a>
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
                    <span className="dot" onClick={()=>props.toggleMode('red')} style={{backgroundColor:'red',}}></span>
                    <span className="dot" onClick={()=>props.toggleMode('green')} style={{backgroundColor:'green',}}></span>
                    <span className="dot" onClick={()=>props.toggleMode('blue')} style={{backgroundColor:'blue',}}></span>
                    <span className="dot" onClick={()=>props.toggleMode('purple')} style={{backgroundColor:'purple',}}></span>
                    <span className="dot" onClick={()=>props.toggleMode('light')} style={{backgroundColor:'white',}}></span>
                    <span className="dot" onClick={()=>props.toggleMode('dark')} style={{backgroundColor:'black',}}></span>
                </div>
{/* 
                   <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" onClick={()=>props.toggleMode('dark')} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div> */}
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
