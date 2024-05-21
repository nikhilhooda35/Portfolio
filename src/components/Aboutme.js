// import gsap , {ScrollTrigger} from 'gsap';
import React, { useEffect, useRef } from 'react'
import './About.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const text = useRef(null)

        // gsap.to(text,{
        //     scrollTrigger:{
        //         trigger:text,
        //         scrub:1,
        //         x:"-100%",
        //         repeat:-1,
        //         yoyo:true,
        //         start:'top center'
        //     },

        // })
   
    return (
        <>
            <div className="bg-[#FBF2CF] p-4 w-full mx-auto justify-between flex items-center">
                <div className="P-3 w-4/5 mx-auto justify-between flex items-start">
                    <p>01/</p>
                    <div className='space-y-4 w-4/5 mx-auto'>
                        <h2 className='text-[30px] uppercase'>PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES.I CREATE MEMORABLE WEB EXPERIENCES,I have a Knack for creating user-friendly,aesthetically pleasing functional Web Products,ranging from websites to Web-Apps</h2>
                        <h2 className='text-[30px]'>WHEN I'M NOT BUILDING OR EXPLORING NEW WEB TECHNOLOGIES(blockchain) , I'M PROBABLY INDOORS VIBING TO MUSIC OR WATCHING MOVIES(rarely)</h2>
                    </div>
                </div>



            </div>
            {/* <div className='py-2 space-y-4'>
                <div className='w-4/5 mx-auto font-bold'>
                    <h2 className='text-xl'>Technologies i use</h2>
                </div>

                <div className='text' ref={text}>
                    <h2 className='bg-black  text-white font-semibold stroke-slate-300 text-4xl'>REACTJS NEXTJS GSAP NEST  GRAPHQL EXPRESS</h2>
                </div>
                <div className=''>
                    <h2 className='  bg-black text-white font-semibold stroke-slate-300 text-4xl'>SOLIDITY HARDHAT  ETHERSJS WEB3JS PYTHON</h2>
                </div>
            </div> */}
        </>
    )
}

export default About