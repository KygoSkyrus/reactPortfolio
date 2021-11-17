import React from 'react'
import {Link} from 'react-router-dom';

const MernProject = () => {
    return (
        <div className='container cont'>
            <h1>mern projects</h1>
            <Link to="/react">react</Link>
            <Link to="/js">js</Link>
            <Link to="/">home</Link>
        </div>
    )
}

export default MernProject
