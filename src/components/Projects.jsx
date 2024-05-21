import React from 'react'
import './Project.css'
const Projects = () => {
  return (
    <>
       <div className='py-6 mt-4 containers'>
           <div className='w-4/5 mx-auto'>
              <div className='flex justify-between items-center'>
                 <p className='text-xl fonr-bold'>0/2</p>
                 <p>Selected Few</p>
                 <h2 className='font-bold text-xl'>Recent Project / Contributions</h2>           
              </div>
              <div className='py-4 mt-5 underline'>
                  <div className='flex justify-between items-start'>
                      <h2 className='font-bold text-[50px]'>PAYBUYMAX</h2>
                      <img className='w-3/5 object-cover' src="/images/paybuymaxx.png"/>
                  </div>
              </div>
              <div className='py-4 mt-5 underline'>
                  <div className='flex justify-between items-start'>
                      <h2 className='font-bold text-[50px]'>YNOTATION</h2>
                      <img className='w-3/5  object-cover image  bg-gradient-to-r from-gray-400 to-gray-100' src="/images/ynotation.png"/>
                      {/* <div className='ynotaion'></div> */}
                  </div>
              </div>
              <div className='py-4 mt-5 underline'>
                  <div className='flex justify-between items-start'>
                      <h2 className='font-bold text-[50px]'>ENDSARS</h2>
                      <img className='w-3/5  object-cover' src="/images/endsars.png"/>
                  </div>
              </div>
           </div>
       </div>
    </>
  )
}

export default Projects