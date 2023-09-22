import React from 'react'

export default function PostOutage({addOutageArea}) {
  return (
    <form className='add-outage-form' onSubmit={e=>addOutageArea(e)}>
      <div className='form-wrapper'>
        <h3>Add Outage Area</h3>
        <input type="text" className='input outage' placeholder='Location'/>
        <input type="text" className='input outage' placeholder='radius in meters'/>
        <textarea className='textarea' placeholder='Enter description'/>
        <button  type='submit' className='add-outage-btn'>Add</button>
      </div>
    </form>
  )
}
