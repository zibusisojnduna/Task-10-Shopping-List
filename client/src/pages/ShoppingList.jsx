import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem, updateItem } from "../features/shoppinglist/shoppingListSlice"
import Counter from "../components/counter"
import Increment from "../components/increment"
import Decrement from "../components/decrement"

function ShoppingList(){
    const [itemName, setItemName] = useState("")
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()
    const item = useSelector(state => state.ShoppingList.items)
    const [counter, setCounter] = useState(0)

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

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    return(
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleAddItem}>
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
                <Counter setCounter={setCounter} counter={counter}/>
                <Decrement setCounter={setCounter} counter={counter}/><Increment setCounter={setCounter} counter={counter}/>

            </form>
           
        </div>
    )
}
export default ShoppingList