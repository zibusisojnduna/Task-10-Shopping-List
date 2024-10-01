import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem, updateItem, increseQuantity, decreaseQuantity } from "../features/shoppinglist/shoppingListSlice"
import Card from "../components/card"

function ShoppingList(){
    const [itemName, setItemName] = useState("")
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()
    const items = useSelector(state => state.shoppingList.items)
    

    const handleAddItem = (e) => {
        e.preventDefault()
        if (editId) {
            dispatch(updateItem({id:editId, name:itemName, quantity:1}))
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
        <div style={{textAlign:"center"}}>
            <h1>Shopping List</h1>
            <form onSubmit={handleAddItem}>
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Enter item name" style={{borderRadius:"15px"}}/>
                
                <button style={{margin:"2%", backgroundColor:"#86fde8"}}>{editId ? "Update Item" : "Add Item"}</button>
            </form>

            <div>
                {items.map(item =>
                    <Card key={item.id} item={item} onEdit={handEditItem} onRemove={handleRemoveItem} onIncrease={() => dispatch(increseQuantity(item.id))} onDecrease={() => dispatch(decreaseQuantity(item.id))}/>
                )}
            </div>
        </div>
    )
}
export default ShoppingList