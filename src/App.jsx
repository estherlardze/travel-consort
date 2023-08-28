import React from 'react';
import './index.css'
import { Header, Map, Places } from './components/index';

const App = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-3 ps-4 gap-x-4'>
        <div className='col-span-1'>
         <Places />
        </div>
        <div className='col-span-2'>
          <Map />
       </div>
     </div>

    </div> 
   
  )
}

export default App
