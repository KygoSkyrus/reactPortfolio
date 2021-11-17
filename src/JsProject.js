import React from 'react'
import {Link} from 'react-router-dom';

const JsProject = () => {
    return (
        <div className="container cont">
            <h1>js projects</h1>
            <Link to="/react">react</Link>
            <Link to="/mern">mern</Link>
            <Link to="/">home</Link>
        </div>
    )
}

export default JsProject
