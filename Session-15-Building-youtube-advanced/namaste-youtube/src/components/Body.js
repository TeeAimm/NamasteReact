import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Body = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Body
