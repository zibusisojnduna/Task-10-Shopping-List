import { Link } from "react-router-dom"
import "../assets/w3.css"

function Nav(){
    return(
        
        <div className="w3-bar" style={{backgroundColor:"#a8bfe6"}}>
        <a href="/" class="w3-bar-item w3-button">Home</a>
        <a href="./shoppinglist" className="w3-bar-item w3-button">Shopping List</a>
        <a href="./privacy" className="w3-bar-item w3-button">Privacy Policy</a>
        <a href="./nopage" className="w3-bar-item w3-button">No Page</a>
        <a href="./login" className="w3-bar-item w3-button">Login</a>
        <a href="./signup" className="w3-bar-item w3-button">Sign Up</a>
      </div>
    )
}
export default Nav