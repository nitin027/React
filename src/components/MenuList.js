import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../../utils/cartSlice"

export const MenuList = ({menu,i,setAcc,acc})=>{
    console.log(menu)
    //Uncontrolled component with state vairabled inside child
  //  const [showAccordion,setShowAccordion]=useState(true)
  const dispatch = useDispatch()
  
  const addToCart = (name)=>{
    dispatch(addItem(name))
    
  }
    return (
        <div  >
            
                
                    
                        {/* <div onClick={()=>{
                            setAcc(i)
                        }} className="flex cursor-pointer items-center mx-3 my-2  w-100  justify-between">
                         <h6>{menu.title}</h6>   
                         <p>arrow</p>
                         </div>    */}
                        {
                       acc && menu.map((item)=>{
                         return (   
                            <div key={item.id} className="flex  items-center justify-between w-100 mx-3">
                           <div>    
                          <p>{item.name}</p>  
                          <p>Price:{item.price}</p>
                            <p>{item.description}</p>
                            </div>
                            <div className="w-3/12 relative">
                                  
                          <img src={item.image} className=" h-20 max-w-100 my-2"></img> 
                           <button onClick={() => addToCart(item)} className="border border-black p-1 bg-black rounded-md absolute top-2 left-6"><span className="text-white">Add+</span></button>  
                            </div>
                         
                          </div>
                         )
                        })
                        }
                        </div>
    )
}