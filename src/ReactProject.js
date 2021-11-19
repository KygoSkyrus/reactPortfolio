import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import data from './Data';


const ReactProject = () => {

    let arr=[];

    useEffect(() => {
        arr = Array.from(document.getElementsByClassName('c'));//converting HTMLcollection prototype into array
        arr.map(x=>x.addEventListener('mouseenter',function(){
            x.classList.toggle('applyflip');
        }));
        arr.map(x=>x.addEventListener('mouseleave',function(){
            x.classList.toggle('applyflip');
        }));
    }, [])


    return (
        <div className=" cont">

            <div className="container">
                <h1>reactprojects</h1>

                <div className="w-25 d-flex justify-content-between">
                    <Link to="/js" data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript projects"><i className="fab fa-js" ></i></Link>
                    <Link to="/mern"><i className="fab fa-node"></i></Link>
                    <Link to="/"><i className="fa fa-home"></i>
                    </Link>
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-4 mb-3 mt-3">
                    {data.react.map(x => <div className="col c" id="c1" key={x.id}>
                            <div className="card h-100 content">
                                <img src={x.pic} className="card-img-top cardFront" alt="..." />
                                <div className=" cardBack">
                                    <h3 className="card-title">{x.name}</h3>
                                    <p className="card-text">This is a longer card wi th shis is a longer card wi th supportinhis is a longer card wi th supportinhis is a longer card wi th supportinupporting te</p>
                                </div>
                            </div>
                        </div>)}
                </div>

            </div >
        </div>
    )
}

export default ReactProject
