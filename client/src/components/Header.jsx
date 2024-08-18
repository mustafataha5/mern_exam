import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({text,url,textUrl}) => {
  return (
    <div className='p-3 d-flex justify-content-center myheader align-items-center'> 
      <h1 className='text-light text-center mx-5 w-75'>{text}</h1>
      <Link className=' btn btn-light h-50  border border-dark border-2 rounded-1' to={url}>{textUrl}</Link>
    </div>
  )
}

export default Header
