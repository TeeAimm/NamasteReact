import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info)
    const { snippet, statistics } = info || {};
    const { channelTitle, title, thumbnails } = snippet || {}
    return (
        <div className='col-span-3'>
            <div>
                {/* Show channel icon here */}
            </div>
            <div>
                <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} />
                <div>{title}</div>
                <div>{channelTitle}</div>
                <div>{statistics?.viewCount}</div>
            </div>
        </div>
    )
}

export default VideoCard