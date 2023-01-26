import { useEffect, useState } from "react";

const Profile = (props) => {
    let [count,setCount]=useState(0)
    const [count2]=useState(100)
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("UseEffect timer")
        },1000)
        return() => {
            console.log("Clear UseEffect timer")
            clearInterval(timer)
        }
    })
    return (
        <>
            <h2>Profile Functional Component!</h2>
            <div>Name: {props.name}</div>
            <div>Count: {count} - {count2}</div>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </>
    )
}

export default Profile;