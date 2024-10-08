import "../assets/w3.css"

function Card({list, onRemoveList, onAddItem, onRemoveItem, itemName, setItemName}){
return(
    <div className="w3-card-4">
        <header className="w3-container" style={{backgroundColor:"#86fde8"}}>
            <h3>{list.name}</h3>
            <button onClick={() => onRemoveList(list.name)} style={{backgroundColor:'red', color:'white', margin:"2%"}}>Remove List</button>
        </header>

        <div className="w3-container">
            <input type="text" placeholder="Add item" value={itemName} onChange={(e) => setItemName(e.target.value)}></input>
            <button onClick={onAddItem} style={{backgroundColor:"green", color:"white", margin:"2%"}}>Add Item</button>

            <ul>
                {list.items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => onRemoveItem(item)} style={{backgroundColor:"red", color:"white", margin:"2%"}}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>



    </div>
    )
}
export default Card