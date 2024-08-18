import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const MainList = () => {

  const [pirates, setPirates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates")
      .then(res => {
        console.log(res) ; 
        setPirates(res.data.pirates) ; 
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [])

  const deletePirate = (id) =>{
    axios.delete("http://localhost:8000/api/pirates/"+id)
      .then(res => {
        console.log(res) ; 
        setPirates(pirates.filter(pirate => pirate._id != id )) ; 
      })
      .catch(err => console.log(err));
  }



  if (loading) {
    return (
      <div>
        <Header text="Pirate Crew" url="/pirates/add" textUrl="Add Pirate"></Header>

      </div>
    )
  }
  return (
    <div>
      <Header text="Pirate Crew" url="/pirates/add" textUrl="Add Pirate"></Header>
      <div className='my-5 d-flex flex-column justify-content-center align-items-center '>
        {

          pirates && pirates.map((pirate, index) => {
            return (
              <div key={index} className="card my-3 w-50 myCard" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={pirate.imgurl}  className="img-fluid rounded-start imageUrl" alt={pirate.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h5 className="m-5 card-title text-center">{pirate.name}</h5>
                      <div className='d-flex justify-content-center'>
                          <Link className='mx-3 btn btn-primary ' to={"/pirates/"+pirate._id+"/details"}> View Pirate</Link>
                          <button className='btn btn-danger ' onClick={() => deletePirate(pirate._id)}>Walk To Plank</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MainList
