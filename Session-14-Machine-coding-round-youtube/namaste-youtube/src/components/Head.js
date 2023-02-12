import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";

const Head = () => {
    return (
        <div className='flex justify-between items-center px-4 shadow-lg'>
            <div className='flex items-center'>
                <RxHamburgerMenu className='text-2xl'/>
                <img className='w-32' alt="YouTube Home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0joG-qM5mvn1XZ-udwSlceKM8eVlj68x0A&usqp=CAU" />
            </div>
            <div className='flex w-[728px] mr-11'>
                <input className='border-gray-300 border px-3 w-[540px] rounded-l-full' placeholder='Search' type="text" />
                <button className='py-3 px-5 border border-gray-300 border-l-0 bg-gray-100 rounded-r-full'>
                    <TfiSearch/>
                </button>
            </div>
            <div>
                <FaUserAlt className='text-2xl'/>
            </div>
        </div>
    )
}

export default Head
