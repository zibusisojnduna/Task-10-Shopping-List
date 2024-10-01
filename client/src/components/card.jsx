function Card({item, onEdit, onRemove, onIncrease, onDecrease}){
return(
    <div style={{border:"2% solid", borderRadius:"10%", padding:"2%", margin:"2%", boxShadow:"2% 2% 0 rgba()", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h3>{item.name}</h3>
        <div style={{display:"flex"}}>

            <div style={{display:'flex'}}>
                <button onClick={() => onDecrease(item.id)} style={{backgroundColor:"#acb6e5", margin:"1%"}}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item.id)} style={{backgroundColor:"#acb6e5", margin:"1%"}}>+</button>
            </div>

            <button onClick={() => onEdit(item)} style={{backgroundColor:"green", color:"white", margin:"2%"}}>Edit</button>
            <button onClick={() => onRemove(item.id)} style={{backgroundColor:"red", color:"white", margin:"2%"}}>Remove</button>
        </div>
    </div>
    )
}
export default Card