import React from 'react'

const Modal = ({open,onClose}) => {
    if(!open) return null
  return (
      <>
      {/* Uncomment This Code to use Modal */}
 {/* <div onclick={onClose} className='overlay'>
     <div onclick={(e)=>{
//          e.stopPropagation()
//      }} className="modalContainer">
//          <img src="/nft2.jpeg" alt="" width={"50px"}/>
//          <div className="modalRight">
//              <p onClick={onClose} className='closeBtn'>X</p>
//              <div className="content">
//                  <p>Do you Want a</p>
//                  <h1>$20 Credit</h1>
//                  <p>For your first Trade</p>
//              </div>
//              <div className="btnContainer">
//                  <button className="myBtnPrimary">
//                      <span className='bold'>I love NFT's</span>
//                  </button>
//                  <button className="BtnOutline" onClick={onClose}>
//                      <span className='bold'>No,</span>Thanks
//                  </button>
//              </div>
//          </div>
//      </div>
//  </div> */}
</>
  )
}

export default Modal


{/* <Modal open={openModal} onClose={()=> setOpenModal(false)}/>

onClick={()=> setOpenModal(true)} */}