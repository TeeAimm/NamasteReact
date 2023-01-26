const Shimmer = () => {
    return <div className="restaurant-list-container">
        {Array(10).fill("").map((e,i)=><div className="shimmer-card" key={i}></div>)}
    </div>
}

export default Shimmer;