import React, { useEffect } from 'react'
import data from './Data';

export default function JsProject() {

    let arr = [];

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        arr = Array.from(document.getElementsByClassName('c'));
        arr.map(x => x.addEventListener('mouseenter', function () {
            x.classList.toggle('applyflip');
        }));
        arr.map(x => x.addEventListener('mouseleave', function () {
            x.classList.toggle('applyflip');
        }));
    }, [])


    return (
        <div className="" id="j">
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5 mt-3">
                {data.javascript.map(x => <div className="col c" key={x.id}>
                    <a href={x.link} target="_blank" rel="noreferrer">
                        <div className="card h-100 content">
                            <div className="cardFront">
                                <img src={x.pic} className="card-img-top" alt="..." />
                                <h3 className="card-title">{x.name}</h3>
                            </div>
                            <div className="cardBack">
                                <h3 className="card-title">{x.name}</h3>
                                <p className="card-text">{x.description}</p>
                                <a href={x.source} target="_blank" rel="noreferrer">
                                    <button className="btn btn-outline-dark d-flex align-items-center">GITHUB&nbsp;<i className="fa fa-github"></i></button>
                                </a>
                            </div>
                        </div></a>
                </div>)}
            </div>
        </div >
    )
}

