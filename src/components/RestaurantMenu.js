import { useEffect, useState } from "react"
import { restaurants } from "../../utils/mockData";
import { useParams } from "react-router";

const RestaurantMenu = ()=>{

    const [restaurant,setRestaurant] = useState(null);
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        //here the api call wiil be made
        console.log('use effect')
         const filteredRest = restaurants.filter((val)=>{
        return val.id === params.resId
    })
    if(filteredRest) setRestaurant(filteredRest)
    },[])

    if(!restaurant) return (
      
    <h2>Loading...
        {console.log('returning')}
    </h2>)

   
    console.log(restaurant)


    return (
        <div className="menu">
            <h1>{restaurant[0]?.name}</h1>
            <h2>Menu</h2>
            <ul>
                {
                    restaurant[0].menu.map((val)=>{
                       return <li key={val}>{val}</li>
                    })
                    
               }
            </ul>
        </div>
    )
}

export default RestaurantMenu