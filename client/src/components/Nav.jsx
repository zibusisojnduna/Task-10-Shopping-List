import { Link } from "react-router-dom"

function Nav(){
    return(
        
        <ul style={{listStyleType:"none", margin:"0", padding:"0", overflow:"hidden", backgroundColor:"#a8bfe6"}}>

            
        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/"} style={{color:"black"}}>Home</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/shoppinglist"}style={{color:"black"}}>Shopping List</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/privacy"} style={{color:"black"}}>Privacy</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/NoPage"} style={{color:"black"}} >No Page</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/login"} style={{color:"black"}}>Login</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/signup"} style={{color:"black"}}>Sign Up</Link>
        </li>

        
    </ul>
    )
}
export default Nav