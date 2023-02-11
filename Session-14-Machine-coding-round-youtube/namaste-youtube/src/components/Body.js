import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
    return (
        <div>
            Body
            <div className='flex'>
                <Sidebar />
                <MainContainer />
            </div>
        </div>
    )
}

export default Body
