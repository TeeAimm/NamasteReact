import React from 'react'

const Shimmer = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            {Array(10).fill("").map((e, i) => {
                return <div className="col-span-3" key={i}>
                    <div className="h-40 border rounded-lg bg-gray-200 animate-pulse "></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-2/3 mt-5"></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-1/2 mt-3"></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-1/2 mt-1"></div>
                </div>
            })
            }
        </div>
    )
}

export default Shimmer