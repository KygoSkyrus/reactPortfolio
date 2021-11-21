import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import data from './Data';

const MernProject = () => {

    let arr = [];

    useEffect(() => {
        arr = Array.from(document.getElementsByClassName('c'));//converting HTMLcollection prototype into array
        arr.map(x => x.addEventListener('mouseenter', function () {
            x.classList.toggle('applyflip');
        }));
        arr.map(x => x.addEventListener('mouseleave', function () {
            x.classList.toggle('applyflip');
        }));
    }, [])

    return (
        <div className=" cont">

            <div className="d-flex justify-content-between align-items-center px-4  mb-5 navbar bg-light project-nav">
                <a href="/">
                    <img
                        src="https://thumbs.dreamstime.com/b/dg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164905757.jpg"
                        alt="logo"
                        width="40px"
                    />
                </a>
                <div className="d-flex justify-content-between project-icons">
                    <Link to="/react" data-bs-toggle="tooltip" data-bs-placement="top" title="React projects"><i className="fab fa-react" ></i></Link>
                    <Link to="/js" data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript projects"><i className="fab fa-js"></i></Link>
                    <Link to="/mern" data-bs-toggle="tooltip" data-bs-placement="top" title="Mern projects"><i className="fab fa-node green"></i></Link>
                    <Link to="/"><i className="fa fa-home"></i>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5 mt-3">
                    {data.mern.map(x => <div className="col c" key={x.id}>
                        <a href={x.link} target="_blank">
                            <div className="card h-100 content">
                                <div className="cardFront">
                                    <img src={x.pic} className="card-img-top" alt="..." />
                                    <h3 className="card-title">{x.name}</h3>
                                </div>
                                <div className=" cardBack">
                                    <h3 className="card-title">{x.name}</h3>
                                    <p className="card-text">This is a longer card wi th shis is a longer card wi th supportinhis is a longer card wi th supportinhis is a longer card wi th supportinupporting te</p>
                                </div>
                            </div></a>
                    </div>)}
                </div>
            </div >
        </div>
    )
}

export default MernProject
