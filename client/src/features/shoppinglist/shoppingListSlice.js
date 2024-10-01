import { createSlice } from "@reduxjs/toolkit";


const shoppingListSlice =  createSlice({
    name:"shoppin list",
    initialState: {
        items: [],
    },
     reducers:{
        addItem(state, action) {
            state.items.push({...action.payload, quantity:1})
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateItem(state, action) {
            const { id, name, quantity } = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem) {
                existingItem.name = name
                existingItem.quantity = quantity 
            }

        },
        increseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload)
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }
        }
     }
})
export const { addItem, removeItem, updateItem, increseQuantity, decreaseQuantity} = shoppingListSlice.actions

export default shoppingListSlice.reducer