import React from 'react'
import ReactProject from './ReactProject';
import JsProject from './JsProject'
import MernProject from './MernProject'

const Projects = () => {

    const hidenseek = (e,x) => {
        const r = document.getElementById('r');
        const j = document.getElementById('j');
        const m = document.getElementById('m');

        if (x === "r") {
            r.style.display = "block"
            m.style.display = "none"
            j.style.display = "none"
          
            //adding color to the icon
            e.target.classList.add("blue");
            //removing color from other icons
            const yellow=e.target.parentNode.nextElementSibling.parentNode.children[1].children;
            const green=e.target.parentNode.nextElementSibling.parentNode.children[2].children;//getting the parent of i which is a and then the nextelemment sibling of that a, which is another a and then againg going to the specific child element 
            //just got it working  
            green[0].classList.remove('green');
            yellow[0].classList.remove('yellow');
        
        } else if (x === "j") {
            j.style.display = "block"
            m.style.display = "none"
            r.style.display = "none"
            j.classList.add('yellow');

            e.target.classList.add("yellow");
            const blue=e.target.parentNode.nextElementSibling.parentNode.children[0].children;
            const green=e.target.parentNode.nextElementSibling.parentNode.children[2].children;
            green[0].classList.remove('green');
            blue[0].classList.remove('blue');

        } else if (x === "m") {
            m.style.display = "block"
            r.style.display = "none"
            j.style.display = "none"
            m.classList.add('green');

            e.target.classList.add("green");
            const blue=e.target.parentNode.nextElementSibling.parentNode.children[0].children;
            const yellow=e.target.parentNode.nextElementSibling.parentNode.children[1].children;
            blue[0].classList.remove('blue');
            yellow[0].classList.remove('yellow');
        }
    }

    return (
        <div className=" cont">

            <div className="d-flex justify-content-between align-items-center px-4  mb-5 navbar bg-light project-nav bg-light">
                <a href="/">
                    <img
                        src="https://thumbs.dreamstime.com/b/dg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164905757.jpg"
                        alt="logo"
                        width="40px"
                    />
                </a>
                <div className="d-flex justify-content-between project-icons">
                    <a href="#react" data-bs-toggle="tooltip" data-bs-placement="top" title="React projects" onClick={(e) => hidenseek(e,"r")}><i className="fab fa-react blue" ></i></a>
                    <a href="#javascript" data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript projects" onClick={(e) => hidenseek(e,"j")}><i className="fab fa-js"></i></a>
                    <a href="#mern" data-bs-toggle="tooltip" data-bs-placement="top" title="Mern projects" onClick={(e) => hidenseek(e,"m")}><i className="fab fa-node "></i></a>
                    <a href="/"><i className="fa fa-home"></i></a>
                </div>
            </div>

            <div className="container">
                <ReactProject />
                <MernProject />
                <JsProject />
            </div>
        </div>
    )
}

export default Projects
