import React from 'react'

const Parallax = () => {

    return (
        <>
            
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <img
                            src="https://thumbs.dreamstime.com/b/dg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164905757.jpg"
                            alt="logo"
                            width="55px"
                        />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item ">
                                    <a class="nav-link active text-light" aria-current="page" href="#t">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#t">projects</a>
                                </li>
                            </ul>

                            <form class="d-flex w-25 justify-content-center">
                                <i class="fa fa-phone " aria-hidden="true"></i
                                > <i class="fa fa-envelope " aria-hidden="true"></i
                                >
                                <i class="fa fa-github " aria-hidden="true"></i
                                >
                                <i class="fa fa-linkedin " aria-hidden="true"></i
                                >
                                <i class="fa fas-react"></i>

                            </form>
                        </div>
                    </div>
                </nav>

          
        </>
    )
}

export default Parallax

/*
const arr = [];

    for (var i = 0; i < 1000; i++) {
        let bin = Math.floor(Math.random() * 2);
        arr.push(bin);
    }
    <div className="container">
                {arr.length > 0 ? arr.map((x, i) => <span key={i}>{x}</span>) : null}
            </div>

*/