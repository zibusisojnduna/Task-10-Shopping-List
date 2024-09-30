import React, { useEffect, useState } from "react";

function searchbar(){
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchitems = async () => {
            const response = await fetch("http://localhost:3000/itmes")
            const data = await response.json()
            setItems(data)
        }
        fetchitems()
    }, [])

    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return(
        <div>
            <input type="text" placeholder="Search item by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>

            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.name}</li>
            ))}
            </ul>
            
        </div>
    )

}
export default searchbar