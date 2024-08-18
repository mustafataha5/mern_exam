import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { PostionArray } from '../context/PostionArray';

const PirateDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [pirate, setPirate] = useState();
    const postionArray = ['Sailor', "First Mate", "Captain"];
    const selectArray = useContext(PostionArray) ;
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => {
                console.log(res);
                setPirate(res.data.pirate);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div>
                <Header text="Loading Pirate Info" url="/pirates" textUrl="See Crew" />
            </div>
        )
    }
    return (
        <div>
            <Header text={pirate.name} url="/pirates" textUrl="See Crew" />
            <div className='my-5 row d-flex justify-content-center h-100'>
                <div className='col-4'>
                    <div className='card '>
                        <div className='mybody card-body d-flex flex-column align-items-center justify-content-center'>
                            <div className="col-md-4">
                                <img src={pirate.imgurl} className="img-fluid rounded-start" alt={pirate.name} />
                            </div>
                            <h3>"{pirate.catchphrase}"</h3>
                            <Link to={"/pirates/" + id + "/update"} className='btn btn btn-light h-50  border border-dark border-2 rounded-1' > Edit {pirate.name}</Link>
                            {/* <button type='submit' className='btn btnbtn btn-outline-dark h-50  border border-dark border-2 rounded-1'> Edit {pirate.name}</button> */}
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card p-3 '>
                        <h2 className='text-center card-title'>About</h2>
                        <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                                <p>Postion: {selectArray[pirate.postion]}</p>
                                <p>Treasures: {pirate.numOfTreasure}</p>
                                <p>Peg Leg: {pirate.status[0] ? "Yes" : "No" }</p>
                                <p>Eye Patch: {pirate.status[1] ? "Yes" : "No" }</p>
                                <p>Hook Hand: {pirate.status[2] ? "Yes" : "No" }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PirateDetails
