function Card({item}){
return(
    <div style={{border:"2% solid black", borderRadius:"5px", padding:"5%", margin:"2%", maxWidth:"100%"}}>
        <img>{item.image}</img>
        <h2>{item.name}</h2>
        <p>Price:{item.price}</p>
    
    </div>
    )
}
export default Card