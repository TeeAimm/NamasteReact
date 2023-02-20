import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    return (
        <div className={`border ${isMenuOpen ? 'col-span-10' : 'col-span-11'}`}>
            <ButtonList />
            <VideoContainer/>
        </div>
    )
}

export default MainContainer
