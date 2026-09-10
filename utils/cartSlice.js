import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //muating the state here
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            //state=[]  // this is not the changing the state its assignign a new reference
            //to change the original state we need to change the original state
            //back in old redux we need to return changed state
            //const newState={...state}
            //newState.push(action.payloaf)
            // return newState // now also RTK does this behind the sences
            state.items.length=0
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
console.log(cartSlice,'cartslice')

export default cartSlice.reducer