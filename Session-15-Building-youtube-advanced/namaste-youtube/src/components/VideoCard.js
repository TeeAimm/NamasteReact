import React from 'react'
import useNumberFormatter from '../utils/useNumberFormatter';
import useTimeAgo from '../utils/useTimeAgo';
import { BsDot } from "react-icons/bs";

const VideoCard = ({ info }) => {
    /* console.log(info) */
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet
    const viewCount = useNumberFormatter(statistics?.viewCount)
    const publishedAtTime = useTimeAgo(publishedAt)
    return (
        <div >
            <div>
                {/* Show channel icon here */}
            </div>
            <div>
                <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} />
                <div className='text-sm font-semibold pt-3 pb-2'>{title}</div>
                <div className='text-xs text-[#606060] pb-1'>{channelTitle}</div>
                <div className='flex items-center'>
                    <div className='text-xs text-[#606060]'>{viewCount} views</div>
                    <div className='px-1 text-xs text-[#606060]'><BsDot/></div>
                    <div className='text-xs text-[#606060]'>{publishedAtTime}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard