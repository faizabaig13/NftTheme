import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import profileUsers from './profileUsers'
const ProfileCards = () => {
    useEffect(()=>{
        Aos.init({duration:500})
        },[])
  return (
    
      <div className="container max-w-full profileCardsection">
    <div className="myflex flex justify-center cardflex">


    {profileUsers.map((e)=>{
       return (
         <>
        <div className="mycolumncard mb-10">
        <div className="profileCard" data-aos="zoom-out-up">
    <img src={e.UserImg}/>
    <div className="name"><p className='font-bold text-white text-1xl'>{e.name}</p></div>
    <p className='font-light text-white text-1xl'><img src="/icon.png" alt=""  width={"25px"}/> {e.nft} ETH</p>
    <button className='profilebtn'>FOLLOW</button>
        </div>
    </div>
    </>
    
     );})}
    </div>
    <p className='text-white text-center p-5'>Empowering 230,000+ Businesses With Innovation <span className="text-purple">Top Creators </span> </p>
    </div>
  )
}

export default ProfileCards