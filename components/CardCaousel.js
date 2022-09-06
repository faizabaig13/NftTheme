import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardsCarouselData from './cardscarouseldata'
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container max-w-full profileCardsection p-10">
        <h1 className="text-white text-center text-5xl mb-5">Popular Collection</h1>
         <p className="text-gray-400 text-center text-1xl mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Quisquam, eveniet aspernatur quae tenetur provident quasi!</p>
      <Slider {...settings} data-aos="fade-right" >
      {CardsCarouselData.map((e)=>{
             return (
            
              <div class="nft bg-mycardsbg mt-5 mb-10 p-5 border-gray-800 rounded-lg border  shadow-2xl">
              <div class='main'>
              <div class="flex space-x-4 mymx">
  <div><img src={e.mainImg1} className="space-x-4 userimgcard rounded-md mt-2"/></div>
  <div class="flex flex-col ... w-96">
  <div><img src={e.smallImg1} className="space-x-4 userimgcardsmall rounded-md  mt-2"/></div>
  <div><img src={e.smallImg2} className="userimgcardsmall rounded-md  mt-2"/></div>
  <div><img src={e.smallImg3} className="userimgcardsmall rounded-md mt-2"/></div>
  </div>
</div>
                <h2>{e.name}</h2>
               
                <div class='creator'>
                  <div class='wrapper'>
                    <img src={e.Imgsrc} alt="Creator" />
                  </div>
                  <p><ins>Creation of</ins><span className='text-white'> NFT</span> </p>
                </div>
              </div>
              </div>

         
          
           );})}
           </Slider>
           </div>
    );
  }
}