import React from 'react';
import {data} from './dummyData'

const Places = () => {
  return (
    <div className='mt-4'>
      <h3 className='text-lg md:text-2xl'>Restaurants, Hotels and attractions around you</h3>
      <p>type</p>
      <div>
        <select name="" id="" className='border-0 border-b-2 p-1 outline-none'>
         <option value="restaurant">Restaurants</option>
         <option value="restaurant">Hotels</option>
         <option value="restaurant">Attractions</option>
        </select>
        <select name="" id="" className='border-0 border-b-2 p-1 ms-2 outline-none'>
          <option value="3.0">Rating</option>
          <option value="3.0">3.0</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
        </select>
      </div>

      {data.map((item ) => {
        <h3>{item.name}</h3>
})}

    </div>
  )
}

export default Places
