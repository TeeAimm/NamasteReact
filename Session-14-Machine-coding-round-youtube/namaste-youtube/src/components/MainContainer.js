import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
    return (
        <div className='border col-span-10'>
            <ButtonList />
            <VideoContainer/>
        </div>
    )
}

export default MainContainer
