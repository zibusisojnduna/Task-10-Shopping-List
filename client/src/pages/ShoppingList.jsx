import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem, updateItem } from "../features/shoppinglist/shoppingListSlice"

function ShoppingList(){
    const [itemName, setItemName] = useState("")
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()
    const item = useSelector(state => state.ShoppingList.items)

    const handleAddItem = (e) => {
        e.preventDefault()
        if (editId) {
            dispatch(updateItem({id:editId, name:itemName}))
            setEditId(null)
        }else {
            dispatch(addItem({id:Date.now(), name:itemName}))
        }
        setItemName("")
    }

    const handEditItem = (item) => {
        setItemName(item.name)
        setEditId(item.id)
    } 
    return(
        <div>
            <h1>Shopping List</h1>
            
           
        </div>
    )
}
export default ShoppingList