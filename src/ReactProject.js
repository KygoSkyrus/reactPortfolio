import React from 'react'
import { Link } from 'react-router-dom';
import data from './Data';


const ReactProject = () => {


    return (
        <div className=" cont">

            <div className="container">
                <h1>reactprojects</h1>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                {data.card.map(x=><div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{x.name}</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>)}
                </div>
                

                <Link to="/js">js</Link>
                <Link to="/mern">mern</Link>
                <Link to="/">home</Link>
            </div >
        </div>
    )
}

export default ReactProject
