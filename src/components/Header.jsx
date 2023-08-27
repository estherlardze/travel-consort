import React, {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'


const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handlesearch = (e) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <div className='flex justify-between items-center bg-[#07ab4b] p-4 shadow-lg'>
      <h3 className='font-bold text-lg cursor-pointer'>Travel Consort</h3>

       <div className='flex justify-between'>
         <h5 className='font-[600] me-3 hidden sm:flex'>Explore new places</h5>
         
         <div className='flex bg-[#e1f7ea] ps-1 rounded'>
           <AiOutlineSearch color='#646262' className='mt-2 me-1'/>
           <input type="text" placeholder='Search...' value={searchTerm} onChange={handlesearch} 
             className='border-0 ps-2 p-1 outline-none rounded bg-[#e1f7ea]'/>
        </div>      
       </div>
    </div>

  )
}

export default Header
