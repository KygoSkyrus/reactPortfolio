import React, { useEffect } from 'react'
import data from './Data';

export default function MernProject () {

    let arr = [];

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        arr = Array.from(document.getElementsByClassName('c'));//converting HTMLcollection prototype into array
        arr.map(x => x.addEventListener('mouseenter', function () {
            x.classList.toggle('applyflip');
        }));
        arr.map(x => x.addEventListener('mouseleave', function () {
            x.classList.toggle('applyflip');
        }));
    }, [])

    return (
            <div className="" id="m">
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5 mt-3">
                    {data.mern.map(x => <div className="col c" key={x.id}>
                        <a href={x.link} target="_blank" rel="noreferrer">
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
    )
}
