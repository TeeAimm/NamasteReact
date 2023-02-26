import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { onWatchPage, notOnWatchPage } from '../utils/appSlice'
import CommentsContainer from './CommentsContainer'
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import useNumberFormatter from '../utils/useNumberFormatter'

const WatchPage = () => {
    const { state } = useLocation();
    const { snippet, statistics } = state;
    const [searchParams] = useSearchParams()
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisLiked, setDisIsLiked] = useState(false)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const likeCount = useNumberFormatter(statistics?.likeCount)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(onWatchPage())
        return () => {
            dispatch(notOnWatchPage())
        }
    }, [])
    
    const handleLike = () => {
        setIsLiked(!isLiked)
        if (isDisLiked) {
            setDisIsLiked(false)
            setIsLiked(true)
        }
    }
    const handleDislike = () => {
        setDisIsLiked(!isDisLiked)
        if (isLiked) {
            setIsLiked(false)
            setDisIsLiked(true)
        }
    }
    console.log("state", state)
    return (
        <>
            <div className={`${isMenuOpen ? 'col-span-6' : 'col-span-7 pl-12'} border `}>
                <iframe
                    className='relative w-full h-[409px]'
                    src={"https://www.youtube.com/embed/" + searchParams.get('v')}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <div className='font-semibold text-xl pt-4 pb-4'>{snippet?.title}</div>
                <div className='flex items-center'>
                    <div className='font-semibold pr-4'>{snippet?.channelTitle}</div>
                    <button
                        className={`${isSubscribed ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-black text-white hover:bg-gray-800'} font-medium rounded-full px-4 py-2 text-sm`}
                        onClick={() => setIsSubscribed(!isSubscribed)}>
                        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                    </button>
                    <button
                        className='flex items-center ml-auto px-4 py-2 bg-gray-200 rounded-l-full hover:bg-gray-300'
                        onClick={() => handleLike()}>
                        {isLiked ? <AiFillLike className='text-2xl transition-all focus:scale-125 active:scale-125' /> : <AiOutlineLike className='text-2xl transition-all focus:scale-125 active:scale-125' />}
                        <div className='text-sm font-medium pl-2'>{likeCount}</div>
                    </button>
                    <button
                        className='px-4 py-2 border-l border-gray-300 bg-gray-200 rounded-r-full hover:bg-gray-300'
                        onClick={() => handleDislike()}>
                        {isDisLiked ? <AiFillDislike className='text-2xl' /> : <AiOutlineDislike className='text-2xl' />}
                    </button>
                </div>
                <CommentsContainer />
            </div>
            <div className={`${isMenuOpen ? 'col-span-4' : 'col-span-5'} border`}>Hello</div>
        </>
    )
}

export default WatchPage