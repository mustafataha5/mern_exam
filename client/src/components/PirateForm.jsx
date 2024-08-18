import React, { useContext, useState } from 'react'
import { PostionArray } from '../context/PostionArray';

const PirateForm = ({ initName = '',
    initImgUrl = '',
    initNumOfTreasure = 0,
    initCatchphrase = '',
    initPostion = 0,
    initStatus = [false, false, false],
    errors = {},
    btnText = 'Add',
    atSubmitDo 
}) => {
    const [name, setName] = useState(initName);
    const [imgurl, setImgUrl] = useState(initImgUrl);
    const [numOfTreasure, setNumOfTreasure] = useState(initNumOfTreasure);
    const [catchphrase, setCatchphrase] = useState(initCatchphrase);
    const [postion, setPostion] = useState(initPostion);
    const [status, setStatus] = useState(initStatus);
    const postionArray = ['Sailor', "First Mate", "Captain"];
    const selectArray = useContext(PostionArray) ;

    const submitHandle = (e) =>{
        e.preventDefault() ; 
        atSubmitDo({name,imgurl,numOfTreasure,catchphrase,postion,status})
        //console.log(status)
        setName(initName);
        setImgUrl(initImgUrl) ; 
        setCatchphrase(initCatchphrase)
        setNumOfTreasure(initNumOfTreasure)
        setPostion(initPostion) ;
        setStatus(initStatus)
    }


    return (
        <div >
            <form onSubmit={submitHandle} className='my-5 row h-100 d-flex justify-content-center ' >

                <div className='col-4'>

                    <div>
                        <p>Name:</p>
                        <input className="block" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                        {errors.name && <small className='error'>{errors.name}</small>}
                    </div>

                    <div className='my-3'>
                        <p>Image Url:</p>
                        <input className="block" type="text" value={imgurl} onChange={(e) => setImgUrl(e.target.value)} />
                            <br />
                        {errors.imgurl && <small className='error'>{errors.imgurl}</small>}
                    </div>

                    <div className='my-3'>
                        <p># Of Treasuer Chests:</p>
                        <input className="block" type="text" value={numOfTreasure} onChange={(e) => setNumOfTreasure(e.target.value)} />
                        <br />
                        {errors.numOfTreasure && <small className='error'>{errors.numOfTreasure}</small>}
                    </div>

                    <div className='my-3'>
                        <p>Pirate Catch Phrase:</p>
                        <input className="block" type="text" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} />
                        <br />
                        {errors.catchphrase && <small className='error'>{errors.catchphrase}</small>}
                    </div>
                </div>
                <div className='col-4'>

                    <div className=''>
                        <p>Crew Postion:</p>
                        <select value={postion} onChange={e => setPostion(e.target.value)}>
                            {selectArray.map((postionName, id) =>
                                <option key={id} value={id}>{postionName}</option>
                            )}
                        </select>
                    </div>

                    <div className='my-5'>
                        <div>
                            <input type='checkbox' checked={status[0]} onChange={() => setStatus([!status[0], status[1], status[2]])} />
                            <label className='mx-2' htmlFor="">Peg Leg</label>
                        </div>
                        <div>
                            <input type='checkbox' checked={status[1]} onChange={() => setStatus([status[0], !status[1], status[2]])} />
                            <label className='mx-2' htmlFor="">Eye Patch</label>
                        </div>
                        <div>
                            <input type='checkbox' checked={status[2]} onChange={() => setStatus([status[0], status[1], !status[2]])} />
                            <label className='mx-2' htmlFor="">Hook Hand</label>
                        </div>


                    </div>

                    <button type='submit'>{btnText} Pirate</button>

                </div>
            </form>
        </div>
    )
}

export default PirateForm
