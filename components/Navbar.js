import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
// import Image from "next/image";

import { animate, motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import WalletModal from './walletModal'
// import Logo from "../public/streamlineLogo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
  const [navbar,setNavbar] = useState(false)
const [openModal,setOpenModal] = useState(false)
  const changeBackground= () =>{
if(window.scrollY>=100){
  setNavbar(true)
}
else{
  setNavbar(false)
}
}
React.useEffect(() => {
  window.addEventListener("scroll", changeBackground);
}, []);

return (
	<motion.div 
    className={styles.navbar}
    initial={{
		opacity:0,
		translateX:1 % 2 === 0 ? -50 : 50,
    translateY:-50}
}
    animate={{opacity:1,translateX:0,
    translateY:0
    }}
    transition={{duration:0.3,delay: 0 * 0.2}}
    >
		<div>
		<nav className={navbar ? 'bg-[#09032B] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600'  : 'px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600'}>
				<div className="w-ful">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
	<img src="/logo.png" alt="" width={"200px"}/>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4 hover:transition-all">
									<Link
										activeclassName="Home"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-pink-600 font-semibold px-3 py-2 text-md hover:font-black text-xl"
									>
										Home
									</Link>
									<Link
										activeclassName="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#7759F3] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium text-xl"
									>
	Explore
									</Link>
									<Link
										activeclassName="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#7759F3] text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium text-xl"
									>
					Pages
									</Link>

									<Link
										activeclassName="Services"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#7759F3] text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium text-xl"
									>
		Community
									</Link>

									<Link
										activeclassName="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#7759F3] text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium text-xl"
									>
							Contact
									</Link>
                  
								</div>
							</div>
						</div>
            <div className="hidden relative md:block m-10">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none mr-5 pr-5">
      <img src="/search.png" alt="" width={"20px"}/>
        <span className="sr-only">Search icon</span>
      </div>
     <input type="text" placeholder="Search here..." className={styles.input}/>
    </div>
    <button type="button"  className={styles.wltbtn} onClick={()=> setOpenModal(true)}><img src="/wallet2.png" alt="" width={"30px"}/>Wallet</button>
	<WallerModal open={openModal} onClose={()=> setOpenModal(false)}/>
	
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-[#581c87] inline-flex items-center justify-center p-2 rounded-md text-white  "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>

              

						</div>
					</div>
				</div>



				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-[#09032B] px-2 pt-2 pb-3 space-y-1  sm:px-3"
							>
								<Link
									href="/home"
									activeclassName="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#0f044a] text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									activeclassName="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#0f044a] text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								<Link
									href="/work"
									activeclassName="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#0f044a] text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>
								<Link
									href="/services"
									activeclassName="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#0f044a] text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/contact"
									activeclassName="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#0f044a] text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium ransition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
								>
									Contact
								</Link>

                <form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className=" outline-none block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Search Mockups, Logos..." required=""/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#581c87] hover:bg-[#0f044a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
                
							</div>
						</div>

            
					)}
          
				</Transition>
			</nav>
		</div>
		</motion.div>
	);
}

export default Navbar;