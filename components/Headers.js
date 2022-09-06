import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"

import { animate, motion } from 'framer-motion'
const Headers = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
    },[])
const easing = [.6,-.05,.01,.99]
    const fadeInUp = {
      initital:{
        y:60,
        opacity:0
      },
      animate:{
        y:0,
        opacity:1,
        transition : {
duration:.6,
ease:easing
        }
      }
    }
  return (
    
  <div>
    <motion.div 
    className={styles.headerContainer}
    initial={{opacity:0,translateX:-50,
    translateY:-50}}
    animate={{opacity:1,translateX:0,
    translateY:0
    }}
    transition={{duration:0.3,delay: 0 * 0.2}}
    >
    
    <div className='overflow-hidden'>
<section className={styles.headerContainer}>
  <div className={styles.headerchild}>

<div className={styles.element1}>
<div className={styles.textstyle}>
  <h1>Discover Collect </h1>
 <h1>And Sell<span className={styles.textstyleborder}> NFT TOKEN</span></h1> 
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias porro delectus itaque autem ipsa ex excepturi soluta dolor voluptas, sit iste minima odio impedit eum quibusdam. Adipisci, voluptatem amet! Inventore.</p>
  <div className={styles.btnparent}>
    <button>Explore More</button>
   
    <button>Collect NFT</button>
  </div>
</div>
<img src="/1.png" alt=""  />
<img src="/21.png" alt="" />
<div className={styles.spaceman}>
<img src="/c3.png" alt=""/>
</div>
</div>

</div>
<img src="/border1.png" alt=""  className={styles.element2}/>
<div className={styles.charctercontent}>
 <div className={styles.imgbox1}>
 
 </div>
 <h1>NFT TOKEN</h1>
 <div className={styles.imgbox2}>
 
 </div>
 
</div>


</section>
</div>
  

</motion.div>
</div>
  )
}

export default Headers      