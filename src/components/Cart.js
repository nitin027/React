import { useDispatch, useSelector } from "react-redux"
import { MenuList } from "./MenuList"
import { clearCart } from "../../utils/cartSlice"


//console.log(items)

export const Cart =()=>{
        // const store = useSelector((store)=> store) // this is subsribing to whole store
        // which is also correct but impacts on performance
     const cartItems = useSelector((store)=> store.abcnitin.items)
     const dispatch = useDispatch()
     const clear=()=>{
        dispatch(clearCart())
     }
     console.log(cartItems)
    return (
        <div>
            <h2 className="font-bold text-center text-2xl">Cart</h2>
            {cartItems.length>0 && <h4 onClick={clear}>Clear Cart</h4>}
            <MenuList menu={cartItems} acc={true}/>
        </div>
    )
}