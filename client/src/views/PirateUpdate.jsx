import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header';
import PirateForm from '../components/PirateForm';
import axios from 'axios';
import { PostionArray } from '../context/PostionArray';

const PirateUpdate = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [pirate, setPirate] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
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




    const updatePirate = (newPirate) => {
        axios.patch("http://localhost:8000/api/pirates/"+id, newPirate)
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





    if (loading) {
        return (
            <div>
                <Header text="Loading Pirate Info" url="/pirates" textUrl="See Crew" />
            </div>
        )
    }
    return (
        <div>

            <Header text={"Update " + pirate.name} url={"/pirates/" + id + "/details"} textUrl="See Details" />

            <PirateForm
                initName={pirate.name}
                initImgUrl={pirate.imgurl}
                initNumOfTreasure={pirate.numOfTreasure}
                initCatchphrase={pirate.catchphrase}
                initPostion={pirate.postion}
                initStatus={pirate.status}
                atSubmitDo={updatePirate}
                errors={errors}
                btnText="Update" />
        </div>

    )
}

export default PirateUpdate
