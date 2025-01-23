import {useState,useEffect} from "react"
const useOnlineStatus = ()=>{
    const [isOnline,setIsOnline]= useState(true);

    useEffect(()=>{
        window.addEventListener("offline",(e)=>{
            setIsOnline(false);
        })
        window.addEventListener("online",(e)=>{
            setIsOnline(true);
        })
    },[])
    return isOnline;
}

export default useOnlineStatus