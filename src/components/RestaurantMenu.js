import { useEffect, useState } from "react"
import { restaurants } from "../../utils/mockData";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import { MenuList } from "./MenuList";

const RestaurantMenu = ()=>{

   /// const [restaurant,setRestaurant] = useState(null);
    const params = useParams()
    console.log(params.resId)
    const restaurant = useRestaurantMenu(params?.resId)
    const [index,setShowAccordion]=useState(0)
    

    // useEffect(()=>{
    //     //here the api call wiil be made
    //     console.log('use effect')
    //      const filteredRest = restaurants.filter((val)=>{
    //     return val.id === params.resId
    // })
    // if(filteredRest) setRestaurant(filteredRest)
    // },[])

    if(restaurant.length===0) return (
      
    <h2>Loading...
        {console.log('returning')}
    </h2>)

   
    console.log('rest',restaurant)


    return (
        <div className="text-center">
            <h1>{restaurant[0]?.name}</h1>
            <p>cuisine:{restaurant[0]?.cuisine}</p>
            <p>cuisine:{restaurant[0]?.rating}</p>
            <div >
                {
                    restaurant[0].menu.map((val,key)=>{

                       
                     return(  <div key={val.title} className="mx-auto my-2 border border-solid border-black w-9/12">
                     <div   onClick={()=>{
                            setShowAccordion(key)
                        }} className="flex cursor-pointer items-center mx-3 my-2  w-100  justify-between">
                         <h6>{val.title}</h6>   
                         <p>arrow</p>
                           </div> 
                       <MenuList i={key} acc={index===key?true:false} setAcc={setShowAccordion} key={val.title} menu={val.items} />
                       
                        </div>)
                    })
                    
               }
            </div>
        </div>
    )
}

export default RestaurantMenu