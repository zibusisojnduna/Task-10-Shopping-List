import { Link } from "react-router-dom"

function Nav(){
    return(
        
        <ul style={{listStyleType:"none", margin:"0", padding:"0", overflow:"hidden", backgroundColor:"#a8bfe6"}}>

            
        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/"}>Home</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/shoppinglist"}>Shopping List</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/privacy"}>Privacy</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/NoPage"}>No Page</Link>
        </li>

        <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/login"}>Login</Link>

            <li style={{display:"block", color:"black", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
            <Link to={"/signup"}>Sign Up</Link>
        </li>

        </li>
    </ul>
    )
}
export default Nav