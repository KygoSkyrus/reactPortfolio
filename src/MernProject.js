import React from 'react'
import { Link } from 'react-router-dom';
import data from './Data';

const MernProject = () => {
    return (
        <div className=" cont">
            <div className='container '>
                <h1>mern projects</h1>

                <div className="w-25 d-flex justify-content-between">
                    <Link to="/react"><i className="fab fa-react"></i></Link>
                    <Link to="/js"><i className="fab fa-js"></i></Link>
                    <Link to="/"><i className="fa fa-home"></i></Link>
                </div>

                <div class="row row-cols-1 row-cols-md-4 g-4 mb-3 mt-3">
                    {data.mern.map(x => <div class="col">
                        <div class="card h-100">
                            <img src={x.pic} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-title">{x.name}</h3>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default MernProject
