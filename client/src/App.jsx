import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainList from './views/MainList'
import PirateAdd from './views/PirateAdd'
import './style/header.css'
import "./style/body.css"
import PirateDetails from './views/PirateDetails'
import PirateUpdate from './views/PirateUpdate'
import { PostionArray } from './context/PostionArray'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  document.body.style = 'background: #ffa500;';
  return (
    <div className='mybody h-100' >
      <PostionArray.Provider value={['Sailor', "First Mate", "Captain"]} >
        <Routes>
          <Route path='/' element={<Navigate to="/pirates" />}></Route>
          <Route path="/pirates" element={<MainList />}></Route>
          <Route path="/pirates/add" element={<PirateAdd />}></Route>
          <Route path="/pirates/:id/details" element={<PirateDetails />}></Route>
          <Route path="/pirates/:id/update" element={<PirateUpdate />}></Route>
        </Routes>
      </PostionArray.Provider>
    </div>
  )
}

export default App
