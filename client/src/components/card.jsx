import { useState } from "react"
import "../assets/w3.css"

function Card({list, onRemoveList, onAddItem, onRemoveItem, onEditItem, itemName, setItemName, }){
    const [editingIndex, setEditingIndex] = useState(null)
    const [editItemName, setEditItemName] = useState("")

    const handleAddItem = () => {
        if(itemName.trim()) {
            onAddItem()
            setItemName("")
        }
    }

    const handleEditItem = (index,) => {
        setEditingIndex(index)
        setEditItemName(list.items[index])
    }

    const handleUpdateItem = () => {
        if (editItemName.trim()) {
            onEditItem(editingIndex, editItemName)
            setEditingIndex(null)
            setEditItemName("")
        }
    }
return(
    <div className="w3-card-4" style={{margin:"2%"}}>
        <header className="w3-container" style={{backgroundColor:"#86fde8"}}>
            <h3>{list.name}</h3>
            <button onClick={() => onRemoveList(list.name)} style={{backgroundColor:'red', color:'white', margin:"2%"}}>Remove List</button>
        </header>

        <div className="w3-container" style={{backgroundColor:"#99dae7"}}>
            <input type="text" placeholder="Add item" value={itemName} onChange={(e) => setItemName(e.target.value)}></input>
            <button onClick={handleAddItem} style={{backgroundColor:"green", color:"white", margin:"2%"}}>Add Item</button>

            <ul style={{backgroundColor:"#a3c8e6"}}>
                {list.items.map((item, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                            <input 
                            type="text"
                            value={editItemName}
                            onChange={(e) => setEditItemName(e.target.value)}
                            />
                            <button
                            onClick={handleUpdateItem}
                            style={{backgroundColor:"green", color:"white"}}>
                                Update
                            </button>
                            </>

                        ):(
                            <>
                            {item}
                            <button
                            onClick={() => handleEditItem(index)}
                            style={{backgroundColor:"green", color:"white", margin:"2%"}}>
                                Edit
                            </button>
                        
                            </>
                        )}
                        <button onClick={() => onRemoveItem(item)} style={{backgroundColor:"red", color:"white", margin:"2%"}} aria-label={`Remove item ${item}`}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>



    </div>
    )
}
export default Card