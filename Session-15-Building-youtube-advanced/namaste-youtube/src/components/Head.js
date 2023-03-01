import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { GET_SEARCH_RESULT_API, YOUTUBE_SEARCH_SUGGESTION_API } from '../assets/constants';
import { cacheSuggestion } from '../utils/SearchSlice';
import { useNavigate } from 'react-router-dom';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const cacheResult = useSelector(store => store.search)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            if (cacheResult[searchQuery]) {
                setSuggestions(cacheResult[searchQuery])
            } else
                getSearchSuggestion()
        },
            200)
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])
    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])
        dispatch(cacheSuggestion({
            [searchQuery]: json[1]
        }))
    }
    const handleSearch = async (key) => {
        console.log('btn clicked-', key)
        const data = await fetch(GET_SEARCH_RESULT_API + key)
        const json = await data.json()
        navigate('/results')
        console.log('data-', json)
    }
    return (
        <div className='sticky top-0 bg-white flex justify-between items-center px-4 z-50'>
            <div className='flex items-center'>
                <RxHamburgerMenu className='text-2xl cursor-pointer' onClick={() => handleToggleMenu()} />
                <Link to="/"><img className='w-32' alt="YouTube Home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0joG-qM5mvn1XZ-udwSlceKM8eVlj68x0A&usqp=CAU" /></Link>
            </div>
            <div>
                <div className='flex w-[728px] mr-11'>
                    <input
                        className='border-gray-300 border px-3 w-[540px] rounded-l-full'
                        placeholder='Search'
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button
                        className='py-3 px-5 border border-gray-300 border-l-0 bg-gray-100 rounded-r-full'
                        onClick={() => handleSearch(searchQuery)}>
                        <TfiSearch />
                    </button>
                </div>
                {suggestions?.length !== 0 && showSuggestions && <div className='fixed border bg-white shadow-lg rounded-xl w-[540px]'>
                    <ul className='py-4'>
                        {suggestions?.map((item) => {
                            return <li key={item} className='px-4 py-1 flex items-center hover:bg-gray-200'>
                                <TfiSearch />
                                <div className='pl-4'>
                                    {item.slice(0, searchQuery?.length)}
                                    <span className='font-semibold'>{item.slice(searchQuery?.length)}</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>}
            </div>

            <div>
                <FaUserAlt className='text-2xl' />
            </div>
        </div>
    )
}

export default Head
