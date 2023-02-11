import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Head = () => {
    return (
        <div className='flex justify-between items-center px-4'>
            <div className='flex items-center'>
                <RxHamburgerMenu className='text-2xl'/>
                <img className='w-32' alt="YouTube Home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0joG-qM5mvn1XZ-udwSlceKM8eVlj68x0A&usqp=CAU" />
            </div>
            <div>
                <input />
            </div>
            <div></div>
        </div>
    )
}

export default Head
