import React from 'react';
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const isWatchPageOpen = useSelector(store => store.app.isWatchPageOpen)

    //^ Early return
    if (isWatchPageOpen && !isMenuOpen) {
        return null
    }

    return (
        <div className={`border ${isMenuOpen ? 'col-span-2' : 'col-span-1'}  p-3`}>
            <ul className='border-b pb-2'>
                <li>
                    <Link to='/' className={`${isMenuOpen ? 'flex-row px-3' : 'flex-col'} flex items-center py-2 cursor-pointer hover:bg-gray-100`}>
                        <BiHomeAlt className='text-xl' />
                        <span className={`${isMenuOpen ? 'ml-5' : 'text-[10px]'}`}>Home</span>
                    </Link>
                </li>
                <li className={`${isMenuOpen ? 'flex-row px-3' : 'flex-col'} flex items-center py-2 cursor-pointer hover:bg-gray-100`}>
                    <AiOutlineThunderbolt className='text-xl' />
                    <span className={`${isMenuOpen ? 'ml-5' : 'text-[10px]'}`}>Shorts</span>
                </li>
                <li className={`${isMenuOpen ? 'flex-row px-3' : 'flex-col'} flex items-center py-2 cursor-pointer hover:bg-gray-100`}>
                    <MdOutlineSubscriptions className='text-xl' />
                    <span className={`${isMenuOpen ? 'ml-5' : 'text-[10px]'}`}>Subcriptions</span>
                </li>
            </ul>
            <ul className='border-b py-2'>
                <li className={`${isMenuOpen ? 'flex-row px-3' : 'flex-col'} flex items-center py-2 cursor-pointer hover:bg-gray-100`}>
                    <BiHomeAlt className='text-xl' />
                    <span className={`${isMenuOpen ? 'ml-5' : 'text-[10px]'}`}>Home</span>
                </li>
                <li className={`${isMenuOpen ? 'flex-row px-3' : 'flex-col'} flex items-center py-2 cursor-pointer hover:bg-gray-100`}>
                    <AiOutlineThunderbolt className='text-xl' />
                    <span className={`${isMenuOpen ? 'ml-5' : 'text-[10px]'}`}>Shorts</span>
                </li>
                <li className={`${isMenuOpen ? 'flex-row px-3' : 'flex-col'} flex items-center py-2 cursor-pointer hover:bg-gray-100`}>
                    <MdOutlineSubscriptions className='text-xl' />
                    <span className={`${isMenuOpen ? 'ml-5' : 'text-[10px]'}`}>Subcriptions</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
