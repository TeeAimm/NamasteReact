import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { onWatchPage } from '../utils/appSlice'

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(onWatchPage())
    }, [])
    return (
        <>
            <div className='col-span-7 border pl-12'>
                <iframe width="727" height="409" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='col-span-5 border'>Hello</div>
        </>
    )
}

export default WatchPage