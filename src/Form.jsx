import React from 'react'
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
export default function Form({fly}) {
  return (
    <form className="search-form" onSubmit={e=>fly(e)}>
      <div className='search-container' >
        <SearchIcon className='search-icon'/>
        <input type="text" className='input' placeholder='Location or Latitude,Longitude'/>
        <button  type='submit' className='submit-btn'></button>
      </div>
    </form>
  )
}
