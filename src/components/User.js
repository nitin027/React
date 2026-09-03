import { useEffect, useState } from "react"

const User = ()=>{
    const [counter,setCounter]=useState(0)

    useEffect(()=>{

        // const timer = setInterval(()=>{
        //     console.log('setInterval of functional component')
        // },3000)
//below func will be returned once the component is removed from dom
        // return ()=>{
        //     clearInterval(timer)
        // }
    },[])
    return(
        <div>
            <h2>Name: Nitin Sundardas Madhani</h2>
            <h3>Location: Bhusawal</h3>
            <h4>Contact: madhaninitin17@gmail.com</h4>
            <button className="btn" onClick={()=>{
                let count = counter
                count++
                setCounter(count)
            }}>Counter</button><span>{counter}</span>
        </div>
    )
}

export default User