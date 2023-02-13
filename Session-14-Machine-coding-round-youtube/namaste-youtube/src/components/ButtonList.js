import React from 'react'
import Button from './Button'
import { List } from '../assets/constants'

const ButtonList = () => {
    return (
        <div className='flex'>
            {List.map((item) => {
                return <Button key={item.id} name={item.name} />
            })}
        </div>
    )
}

export default ButtonList