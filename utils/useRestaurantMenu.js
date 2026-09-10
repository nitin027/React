import { useEffect, useState } from "react"
import { restaurants } from "./mockData"

export const useRestaurantMenu =(resId)=>{
    const [restMenu,setRestMenu]=useState([])
    

    useEffect(()=>{
        console.log('resId',resId)
        const rest = restaurants.filter((val)=>{ return val.id === resId})
        setRestMenu(rest)

    },[])

    return restMenu

}