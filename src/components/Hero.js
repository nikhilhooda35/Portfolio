import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import $ from "jquery"
import './Hero.css'
import CircleType from 'circletype';
const Hero = ({ timeline, ease }) => {
    let emeke = useRef(null)
    let ofuzor = useRef(null)
    let surname = useRef(null)
    let ref = useRef()
    const rotated = useRef()
    // const circleType = new CircleType(rotated.current).radius(80);
    const t2 = gsap.timeline()
    const front = useRef(null)
    console.log(front.current)
    const el = document.querySelector('#front')
 
    console.log(el)   
    // useEffect(() => {
    //     timeline.from([surname, emeke], 2, {
    //         stagger: .2,
    //         opacity: 0,
    //         y: -20,
    //         duration:.1
    //     })
    //     t2.from(ref,{
    //         rotate: 360,
    //         repeat:-1,
    //         left: 20
    //     })
    // })
    return (
        <>
            <div className='h-[120vh] flex justify-center items-center'>
                <div className='w-[85%]' ref={front}>
                    <div className='space-y-1 w-4/5' id='front'>
                        <h1 className='text-[70px] font-bold'>FRONTEND</h1>
                        <h2 className='text-[70px] font-bold'>WEB DEVELOPER</h2>
                    </div>
                    <div>
                        <img src="/images/emeke.jpeg" className='object-cover image w-[50%] h-[250px]' />
                        {/* <div className="bg-no-repeat bg-right-bottom ..." style={{backgroundImage:"url('/images/emeke.jpeg')"}}></div> */}
                    </div>
                    {/* <div class="circular-text">
                        <span id="rotated" ref={rotated}
                        >stone • fox • swim • tapcheck • wolves • fox • swim • tapcheck
                            • wolves</span>
                        
                    </div>
                    <div class="arrow">
                        <ion-icon name="arrow-down"></ion-icon>
                    </div> */}
                    <div className='flex justify-between items-center py-4'>
                        <div className='self-end mt-3'>
                            <h3 className='font-bold '>Senior Front End Developer</h3>
                        </div>
                        <div className=''>
                            <h1 className='text-right font-bold text-[50px]'>OFUZOR</h1>
                            <h2 className='text-[50px] font-bold'>CHUKWUEMEKE</h2>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero