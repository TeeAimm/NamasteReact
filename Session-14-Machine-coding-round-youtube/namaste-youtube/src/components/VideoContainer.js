import React, { useEffect, useState } from 'react'
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
            {videos.map((video)=>{
                return <VideoCard info={video} key={video.id}/>
            })}
        </div>
    )
}

export default VideoContainer
