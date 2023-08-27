import React from 'react';
import './index.css'
import { Header, Map, Places } from './components/index';

const App = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-2 ps-4'>
        <div className=''>
         <Places />
        </div>
        <div>
          <Map />
       </div>
     </div>

    </div> 
   
  )
}

export default App
