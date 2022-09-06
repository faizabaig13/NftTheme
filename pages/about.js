import React, { useEffect, useState } from 'react'

import Users from './users'
import Cards from './Liveactioncards'
import Aos from 'aos'
import "aos/dist/aos.css"
// import Modal from '../components/Modal'

const About = () => {
  useEffect(()=>{
    Aos.init({duration:500})
    },[])
  return (

    <div className="container max-w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 bggradient">
   <div className="flex justify-center flexcontainer mx-auto" data-aos="zoom-out-right">

{Users.map((e)=>{
       return (
         <>
        <div className="card mt-20 flex m-8">
    
         <div className="image">
             <img src={e.Imgsrc} alt="" width={"90px"}/>
         </div>
       <div className="infotext mt-5">
       <p className='font-extrabold text-white'>{e.name}</p>
       <span className='font-extralight text-white'>{e.infotext}</span>
        </div>
         
       </div>
      
           </>
     );})}

    </div>
<Cards />
{/* <button >Open Modal</button> */}

</div>






  )
}

export default About