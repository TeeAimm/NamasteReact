import React from 'react';
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    if (!isMenuOpen) return null
    return (
        <div className='border col-span-2 p-3'>
            <ul className='border-b pb-2'>
                <li className='flex px-3 py-2 items-center cursor-pointer hover:bg-gray-100'>
                    <BiHomeAlt className='text-xl' />
                    <span className='ml-5'>Home</span>
                </li>
                <li className='flex px-3 py-2 items-center cursor-pointer hover:bg-gray-100'>
                    <AiOutlineThunderbolt className='text-xl' />
                    <span className='ml-5'>Shorts</span>
                </li>
                <li className='flex px-3 py-2 items-center cursor-pointer hover:bg-gray-100'>
                    <MdOutlineSubscriptions className='text-xl' />
                    <span className='ml-5'>Subcriptions</span>
                </li>
            </ul>
            <ul className='border-b py-2'>
                <li className='flex px-3 py-2 items-center cursor-pointer hover:bg-gray-100'>
                    <BiHomeAlt className='text-xl' />
                    <span className='ml-5'>Home</span>
                </li>
                <li className='flex px-3 py-2 items-center cursor-pointer hover:bg-gray-100'>
                    <AiOutlineThunderbolt className='text-xl' />
                    <span className='ml-5'>Shorts</span>
                </li>
                <li className='flex px-3 py-2 items-center cursor-pointer hover:bg-gray-100'>
                    <MdOutlineSubscriptions className='text-xl' />
                    <span className='ml-5'>Subcriptions</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
