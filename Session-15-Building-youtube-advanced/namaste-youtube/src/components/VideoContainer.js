import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../assets/constants'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos()
    }, [])
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json()
        console.log("videos", json?.items)
        setVideos(json?.items)
    }
    return videos?.length === 0 ? <Shimmer /> : (
        <div className='grid grid-cols-12 gap-4'>
            {videos?.map((video) => {
                return <Link className='col-span-3' to={'watch?v=' + video.id} key={video.id} state={{
                    id: video.id,
                    snippet: video.snippet,
                    statistics: video.statistics
                }}>
                    <VideoCard info={video} />
                </Link>
            })}
        </div>
    )
}

export default VideoContainer
