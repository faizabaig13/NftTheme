import React from 'react'

const placebidmodal = ({open,onClose}) => {
    if(!open) return null
  return (
   
<>



<div id="authentication-modal" tabIndex={"-1"} className="overlay overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
       
        <div className="relative my-bg rounded-lg shadow dark:bg-gray-700">
            <button onClick={onClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only" >Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium  text-3xl text-white text-center">Place a Bid</h3>
                <p className='mb-4 text-xl font-medium font-light text-1xl text-white text-center'>You must bid at least 2.39 ETH</p>
                <form className="space-y-6" action="#">
                    <div>
                     
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" placeholder="0.00 ETH"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400 font-bold">Enter Quantity <span className='text-white'>1 Available</span> </label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                    </div>
                    <div className="flex justify-between">
                        
                        <p className='text-white font-bold'>Current Bind</p>
                        <p className='text-white font-light'>2.39 ETH</p>
                    </div>
                    <button type="submit" className="w-full text-white bg-mybg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Place a Bid</button>
                
                </form>
            </div>
        </div>
    </div>
    
</div> 
</>
  )
}

export default placebidmodal