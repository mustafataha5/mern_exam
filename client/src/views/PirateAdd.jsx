import React, { useState } from 'react'
import Header from '../components/Header'
import PirateForm from '../components/PirateForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PirateAdd = () => {
  
  const [errors,setErrors] = useState({}) ;   
  const navigate = useNavigate() ; 

  const addPirate = (newPirate) =>{
    axios.post("http://localhost:8000/api/pirates",newPirate)
    .then((res) => {
        setErrors({});
        console.log(res)
        navigate('/pirates')
        })
      .catch((err) => {
        const errorsObject = err.response.data.errors;
        const errorMessages = {};
        for (let key of Object.keys(errorsObject)) {
          errorMessages[key] = errorsObject[key].message;
        }
        setErrors(errorMessages);
      });
  }
  
    return (
    <div>
      <Header text="New Pirate" url="/pirates" textUrl="See Crew"/>
      <PirateForm atSubmitDo={addPirate} errors={errors} />
    </div>

  )
}

export default PirateAdd
