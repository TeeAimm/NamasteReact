import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
        const onlineHelper=()=>{
            setIsOnline(true)
        }
        const offlineHelper=()=>{
            setIsOnline(false)
        }
        window.addEventListener('online',onlineHelper)
        window.addEventListener('offline',offlineHelper)
        return () => {
            window.removeEventListener('online',onlineHelper)
            window.removeEventListener('offline',offlineHelper)
        }
    },[])
    return isOnline;
}

export default useOnline;