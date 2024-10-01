import { createSlice } from "@reduxjs/toolkit";

const shoppingListSlice =  createSlice({
    name:"shoppin list",
    initialState: {
        items: [],
    },
     reducers:{
        addItem(state, action) {
            state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateItem(state, action) {
            const { id, name } = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem) {
                existingItem.name = name 
            }

        }
     }
})
export const { addItem, removeItem, updateItem} = shoppingListSlice.actions

export default shoppingListSlice.reducer