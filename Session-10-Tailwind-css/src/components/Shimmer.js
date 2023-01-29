const Shimmer = () => {
    return <div className="flex flex-wrap">
        {Array(10).fill("").map((e,i)=><div className="bg-gray-400 mt-5 w-72 h-72 m-2" key={i}></div>)}
    </div>
}

export default Shimmer;