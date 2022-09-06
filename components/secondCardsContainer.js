import React from 'react'
import Nftcreaters from './nftcreaters';
const secondCardsContainer = () => {
  return (
    <div className="container max-w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-5 bggradient">
         <h1 className='text-center text-white font-extralight text-4xl mt-2 mb-3'>Explore Assests NFTs </h1>
    <p className='font-extralight text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, suscipit repellat 
    <br/> 

    Eveniet nobis, laborum voluptas culpa libero similique.</p>
<div className="myflex flex justify-center" data-aos="fade-right">




{Nftcreaters.map((e)=>{
       return (
         <>
   <main class="card-main">
  <div class="card-wrapper">
    <div class="card-image">
      <img src={e.nftpic} alt="equilibrium" />
    </div>
    <div class="card-details">
      <div class="card-text">
        <a href="#">
          <h1>{e.name}</h1>
        </a>
      
      </div>
      <div class="card-stats">
        <div class="amount">
          <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_nft-preview-card-component/main/images/icon-ethereum.svg" alt="ethereum icon" />
          <span>{e.nft} ETH</span>
        </div>
        <div class="time">
        
          <button className='nftcard-btn'>Place a bid</button>
        </div>
      </div>
    </div>
    <div class="card-author">
      <div class="author-avater">
        <img src={e.Imgsrc} alt="owner image" />
      </div>
      <p>by <a href="#">{e.username}</a></p>
    </div>
  </div>
</main>
      
           </>
     );})}

</div>
<div class="bg-fixed bgimg mt-10 w-100">

</div>
</div>
  )
}

export default secondCardsContainer