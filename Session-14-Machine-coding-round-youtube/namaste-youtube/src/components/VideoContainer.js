import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../assets/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos()
    }, [])
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json()
        setVideos(json?.items)

    }
    return (
        <div className='grid grid-cols-12 gap-4'>
            {videos.map((video) => {
                return <Link className='col-span-3' to={'watch?v=' + video.id} key={video.id}>
                    <VideoCard info={video} />
                </Link>
            })}
        </div>
    )
}

export default VideoContainer
