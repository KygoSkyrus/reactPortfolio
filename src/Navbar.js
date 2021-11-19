import React from 'react'
import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <img
                        src="https://thumbs.dreamstime.com/b/dg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164905757.jpg"
                        alt="logo"
                        width="55px"
                    />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/react" className="nav-link text-light">Projects</Link>
                            </li>
                        </ul>

                        <form className="d-flex w-25 justify-content-center">
                            <i className="fa fa-phone " aria-hidden="true"></i
                            > <i className="fa fa-envelope " aria-hidden="true"></i
                            >
                            <i className="fa fa-github " aria-hidden="true"></i
                            >
                            <i className="fa fa-linkedin " aria-hidden="true"></i
                            >
                            <i className="fa fas-react"></i>

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar