import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"> 
                <img
                    src="https://thumbs.dreamstime.com/b/dg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164905757.jpg"
                    alt="logo"
                    width="40px"
                />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/react" className="nav-link color">Projects</Link>
                        </li>
                    </ul>
                    <form class="d-flex justify-content-between ">
                        <a href="tel:8076806118" target="_blank">
                            <i className="fa fa-phone " aria-hidden="true"></i>
                        </a>
                        <a href="mailto:kygoskyrus@gmail.com" target="_blank">
                            <i className="fa fa-envelope " aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/KygoSkyrus" target="_blank">
                            <i className="fa fa-github " aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dheeraj-gupta-a71145170" target="_blank">
                            <i className="fa fa-linkedin " aria-hidden="true"></i>
                        </a>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar