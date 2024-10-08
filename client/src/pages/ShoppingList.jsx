import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addList, addItem, removeItem, removeList } from "../features/shoppinglist/shoppingListSlice"
import Card from "../components/card"


function ShoppingList(){
  const dispatch = useDispatch()
  const lists = useSelector((state) => state.shoppingList.lists)
  const [listName, setListName] = useState("")
  const [itemName, setItemName] = useState("")
  const [currentListName, setCurrentListName] = useState("")
    

    const handleAddList = () => {
        if (listName) {
            dispatch(addList(listName))
            setListName("")
        }
    }

    const handleAddItem = (listName) => {
        if (itemName) {
            dispatch(addItem({listName, item:itemName}))
            setItemName("")
        }
    }

    const handleRemoveItem = (listName, item) => {
        dispatch(removeItem({listName, item}))
    }

    const handleRemoveList = (name) => {
        dispatch(removeList(name))
        setCurrentListName
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Shopping List</h2>
            <input type="text" placeholder="List Name" value={listName} onChange={(e) => setListName(e.target.value)}/>
            <button onClick={handleAddList} style={{backgroundColor:"green", color:"white", margin:"2%"}}>Add List</button>

            <div style={{display:"flex", }}>
            {lists.map((list) => (
          <Card
            key={list.name}
            list={list}
            onRemoveList={handleRemoveList}
            onAddItem={() => handleAddItem(list.name)}
            onRemoveItem={(item) => handleRemoveItem(list.name, item)}
            itemName={itemName}
            setItemName={setItemName}
          />
        ))}
            </div>
        </div>
    )
}
export default ShoppingList