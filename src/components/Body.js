import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../../utils/mockData"
import { useEffect, useState } from "react"
import { Link } from "react-router"

const Body = () => {
// args would be an datatypes array,object,null any value second arg would be setcallback func(by default not added by coder)
//return would be an array which can be destructure
 let [listOfRestaurants,setListOfRestaurants] = useState(restaurants)   



// with no dependency array useeffect is called every time after component is rendered
//with empty dependency arry useeffect is called only one time after componet is rendered for first time
//if dependency array is [listOfRestaurants] => useeffect is called everytime when listOfRestaurants is updated
 useEffect(()=>{
console.log('called after component is rendered')
//setListOfRestaurants([...listOfRestaurants]) //recursive body functional component calls
 } ,[listOfRestaurants])

 const [searchText,setSeachText] = useState('')

 console.log('called before useeffect as this is displayed during component is rendered')
    return (
        <div className="body">
            <div className="search">
             <input type="text" id="search" onChange={(e)=>{
                console.log(e.target.value)
                 //setSeachText(e.target.value)
               const filteredRest = restaurants.filter((val)=> {
                 return  val.name.toLowerCase().includes(e.target.value.toLowerCase()) || !e.target.value 
                 // return  val.name.toLowerCase().includes(e.target.value.toLowerCase()) this is also valid because in empty search text includes in rest name 
            })
               console.log(filteredRest)
              
               setListOfRestaurants(filteredRest)
             }}></input><button><label htmlFor="search">Search</label></button>   
            <button className="filter-btn" onClick={()=>{
              const filteredRest= listOfRestaurants.filter((restaurant)=>{
                    if(restaurant.rating>4){
                        return true
                    }
                })
                console.log(listOfRestaurants)
                setListOfRestaurants(filteredRest) // this will re-render body component means call the body() function again to update the dom
            }}>
              
                Top Rated 
            </button>
            </div>
            <div className="res-container">
               {
               
                listOfRestaurants.map((restaurant,index)=>{
                    // let abc='nitin' js declaration and initialization is allowed only in callback inside{} when its inside jsx other wise inside js{} not allowed
                    // console.log(abc)
                  return ( <Link key={restaurant?.id}  to={"/restaurant/"+restaurant?.id}><RestaurantCard  
                  resData={restaurant} /></Link>)
                })
               }
                 
            </div>
        </div>
    )
}

//resName="Meghana foods" cuisine="Biryani asian foods" 
// props name are converted into js object and can be destructure also 
//config driven UI based on backend data we can display different UI like card info

export default Body
