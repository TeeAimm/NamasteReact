import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../assets/constants';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch()
    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }
    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggestion(), 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])
    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
        const json = await data.json()
        console.log(searchQuery, json[1])
    }
    return (
        <div className='flex justify-between items-center px-4'>
            <div className='flex items-center'>
                <RxHamburgerMenu className='text-2xl cursor-pointer' onClick={() => handleToggleMenu()} />
                <a href="/"><img className='w-32' alt="YouTube Home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0joG-qM5mvn1XZ-udwSlceKM8eVlj68x0A&usqp=CAU" /></a>
            </div>
            <div className='flex w-[728px] mr-11'>
                <input
                    className='border-gray-300 border px-3 w-[540px] rounded-l-full'
                    placeholder='Search'
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='py-3 px-5 border border-gray-300 border-l-0 bg-gray-100 rounded-r-full'>
                    <TfiSearch />
                </button>
            </div>
            <div>
                <FaUserAlt className='text-2xl' />
            </div>
        </div>
    )
}

export default Head
