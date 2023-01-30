const Shimmer = () => {
    return <>
        <div className="grid grid-cols-4 mx-16 gap-8 my-16 ">
            {Array(10).fill("").map((e, i) => {
                return <div className=" mx-3" key={i}>
                    <div className="h-40 border bg-gray-200 animate-pulse "></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-2/3 mt-5"></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-1/2 mt-3"></div>
                </div>
            })
            }
        </div>
    </>
}

export default Shimmer;