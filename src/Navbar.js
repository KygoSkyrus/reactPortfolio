import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    useEffect(() => {
        let component = document.querySelector('.ul');
        component.addEventListener('click', () => {
            component.classList.toggle('active');
        })
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://thumbs.dreamstime.com/b/dg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164905757.jpg"
                        alt="logo"
                        width="40px"
                    />
                </a>
                <section className="holder" >
                    <ul className="ul navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <li className="li"></li>
                        <li className="li"></li>
                        <li className="li"></li>
                    </ul>
                </section>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/react" className="nav-link color">Projects</Link>
                        </li>
                    </ul>
                    <form className="d-flex justify-content-between ">
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