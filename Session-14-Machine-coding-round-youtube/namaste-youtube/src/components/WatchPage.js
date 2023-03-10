import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { onWatchPage, notOnWatchPage } from '../utils/appSlice'

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    console.log(searchParams.get('v'))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(onWatchPage())
        return () => {
            dispatch(notOnWatchPage())
        }
    }, [])
    return (
        <>
            <div className={`${isMenuOpen ? 'col-span-6' : 'col-span-7 pl-12'} border `}>
                <iframe
                    className='relative w-full h-[409px]'
                    src={"https://www.youtube.com/embed/" + searchParams.get('v')}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="acceleroMeter; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
            <div className={`${isMenuOpen ? 'col-span-4' : 'col-span-5'} border`}>Hello</div>
        </>
    )
}

export default WatchPage