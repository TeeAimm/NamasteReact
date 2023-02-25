import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CommentData } from '../assets/constants';

const Comment = ({ data }) => {
    const { name, comment } = data;
    return (
        <div className='flex py-3'>
            <FaUserCircle className='text-5xl' />
            <div className='pl-4'>
                <p className='text-sm font-semibold'>{name}</p>
                <p className='text-sm'>{comment}</p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) => {
    return <>
        {comments.map((item) => {
            return <div key={item.id}>
                <Comment data={item} />
                <div className='ml-5 border-l pl-5'>
                    <CommentList key={item.id} comments={item.replies}/>
                </div>
            </div>
        })}
    </>
}

const CommentsContainer = () => {
    return (
        <>
            <div className='text-2xl font-bold py-4'>Comments:</div>
            <CommentList comments={CommentData} />
        </>
    )
}

export default CommentsContainer