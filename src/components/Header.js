import gsap, { Expo } from 'gsap'
import React, { useEffect, useRef } from 'react'
import '../App.css'
gsap.registerPlugin()

const Header = ({ timeline, ease }) => {

  let header = useRef(null)
  let menu = useRef(null)
  let web = useRef(null)
  let lagos = useRef(null)
  let menuRef = useRef(null)
  let home = useRef(null)
  let about = useRef(null)
  let blog = useRef(null)
  let facebook = useRef(null)
  let linkedin = useRef(null)
  let twitter = useRef(null)
  useEffect(() => {
    timeline.from([lagos, menu], 1.2, {
      stagger: .4,
      y: -100,
      opacity: 0,
      ease: ease
    })
  })

  // const t2 = gsap.timeline({
  //   paused:true
  // })
  // t2.to(menuRef, {
  //   duration: 1,
  //   x: "0%",
  //   ease: Expo.easeInOut
  // })

  const menuToggle = () => {
    const t2 = gsap.timeline()
    t2.to(menuRef, {
      duration: 1,
      x: "0%",
      ease: Expo.easeInOut
    })
    t2.from([home, about, blog], {
      opacity: 0,
      y: 20,
      stagger: .4
    })
  t2.from(header,{
    opacity: 0
  })

  }
  const menuClose = () => {
    const t2 = gsap.timeline()
    t2.to(menuRef, {
      duration: 1,
      x: "-100%",
      ease: Expo.easeInOut
    })

    // t2.from()
    // t2.play()
    console.log('Great is ur faithfulness')
  }
  return (
    <>
      <div ref={el => menuRef = el} className="menu">
        <div className='absolute top-5 right-10'>
          <p className='font-bold text-[20px] cursor-pointer text-white' onClick={menuClose}>close</p>
        </div>
        <div className='flex justify-center items-center w-full h-[100vh]'>
          <div className='w-4/5 mx-auto space-y-7'>
            <h2 className='text-[75px] font-bold text-white cursor-pointer hover:text-black' ref={el => home = el}>HOME</h2>
            <h2 className='text-[75px] font-bold text-white cursor-pointer hover:text-black' ref={el => about = el}>ABOUT</h2>
            <h2 className='text-[75px] font-bold text-white cursor-pointer hover:text-black' ref={el => blog = el}>BLOG</h2>
            <div className='p-3 flex space-x-6 text-white' ref={el=>header=el}>
              <p ref={el => facebook = el}>Facebook</p>
              <p ref={el => linkedin = el}>LinkedIn</p>
              <p ref={el => twitter = el}>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex w-[90%] mx-auto justify-between items-center'>
          <div className='font-bold text-xl' ref={el => lagos = el}>NIKHIL</div>
          <div className='font-bold text-xl'>
             NOIDA, INDIA
          </div>
          {/* <div className='font-bold text-white text-2xl' ref={el => web = el}>OFUZOR </div> */}
          <div className='font-bold text-xl cursor-pointer' onClick={menuToggle} ref={el => menu = el}>MENU</div>
        </div>
      </div>
    </>
  )
}

export default Header