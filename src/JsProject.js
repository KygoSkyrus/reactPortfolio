import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import data from './Data';

const JsProject = () => {

    let arr = [];

    useEffect(() => {
        arr = Array.from(document.getElementsByClassName('c'));
        arr.map(x => x.addEventListener('mouseenter', function () {
            x.classList.toggle('applyflip');
        }));
        arr.map(x => x.addEventListener('mouseleave', function () {
            x.classList.toggle('applyflip');
        }));
    }, [])


    return (
        <div className="cont">
            <h1>js projects</h1>
            <div className="container">

                <div className="w-25 d-flex justify-content-between">
                    <Link to="/react"><i className="fab fa-react"></i></Link>
                    <Link to="/mern"><i className="fab fa-node"></i></Link>
                    <Link to="/"><i className="fa fa-home"></i></Link>
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5 mt-5">
                    {data.javascript.map(x =>
                        <div className="col c" key={x.id}>
                            <div className="card h-100 content">
                                <div className="cardFront">
                                <img src={x.pic} className="card-img-top" alt="..." />
                                <h3 className="card-title">{x.name}</h3>
                                </div>
                                <div className=" cardBack">
                                    <h3 className="card-title">{x.name}</h3>
                                    <p className="card-text">This is a longer card wi th shis is a longer card wi th supportinhis is a longer card wi th supportinhis is a longer card wi th supportinupporting te</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default JsProject
