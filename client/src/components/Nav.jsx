import { Link } from "react-router-dom"
import "../assets/w3.css"

function Nav(){
    return(
        
        <div className="w3-bar w3-#a8bfe6">
        <a href="" class="w3-bar-item w3-button">Home</a>
        <a href="#" class="w3-bar-item w3-button">Shopping List</a>
        <a href="#" class="w3-bar-item w3-button">Privacy Policy</a>
        <a href="#" class="w3-bar-item w3-button">No Page</a>
      </div>
    )
}
export default Nav