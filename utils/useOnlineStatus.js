import { useEffect, useState } from "react"

export const useOnlineStatus = ()=>{
    const [onlineStatus,setOnlineStatus] = useState(true)

    //Check status whether it is online or offline
    useEffect(()=>{
        console.log('useEffect called from custom hook')
    window.addEventListener('offline',()=>{
        console.log('offline')
        setOnlineStatus(false)
    })
    window.addEventListener('online',()=>{
        console.log('online')
        setOnlineStatus(true)
    })
    
    },[])
    

  // Return boolean  
  return onlineStatus
    
}