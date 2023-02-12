import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                <Sidebar />
                <MainContainer />
            </div>
        </div>
    )
}

export default Body
