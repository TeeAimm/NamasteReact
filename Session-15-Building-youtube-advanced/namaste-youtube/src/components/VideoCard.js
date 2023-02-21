import React from 'react'

const VideoCard = ({ info }) => {
    /* console.log(info) */
    const { snippet, statistics } = info || {};
    const { channelTitle, title, thumbnails } = snippet || {}
    return (
        <div >
            <div>
                {/* Show channel icon here */}
            </div>
            <div>
                <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} />
                <div className='text-sm font-semibold pt-3 pb-2'>{title}</div>
                <div className='text-xs text-[#606060] pb-1'>{channelTitle}</div>
                <div className='text-xs text-[#606060]'>{statistics?.viewCount} views</div>
            </div>
        </div>
    )
}

export default VideoCard