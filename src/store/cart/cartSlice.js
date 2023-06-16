import { createSlice } from "@reduxjs/toolkit"


const initialState={
    cart:[],
    cartUI:0,
    total:0,
}



const cartSlice=createSlice({
    name:"cart",
    initialState,

    reducers:{

        addItem(state,action){
            const existingItem= state.cart.find((item)=> item.id===action.payload.id);
            if(!existingItem){
                state.cart.push({
                    id:action.payload.id,
                    title:action.payload.title,
                    price:action.payload.price,
                    quantity:1
                  })
            }
            else{
                existingItem.quantity++;
            }
            state.cartUI++;
            state.total= state.total+ action.payload.price
        },
        decreaseQuantity(state,action){
            if(action.payload.quantity===1){
               const newCart= state.cart.filter((item)=>{
                    return item.id !== action.payload.id
                })
                state.cart=newCart
                state.cartUI--;
            }
            else{
                const existingItem= state.cart.find((item)=> item.id===action.payload.id);
                 existingItem.quantity--;
                 state.cartUI--
            }
            state.total-=action.payload.price

        },
         
        removeItem(state,action){
            const newCart= state.cart.filter((item)=>{
                return item.id !== action.payload.id
            })

            const existingItem= state.cart.find((item)=> item.id===action.payload.id);
            state.cart=newCart
            state.cartUI -= action.payload.quantity;
            state.total -= action.payload.quantity * action.payload.price
            // existingItem.quantity = 0;
        }


    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;