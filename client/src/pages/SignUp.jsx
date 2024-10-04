import { Link } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux"
import { signup } from "../features/actions/actions"
import { useState } from "react"

function SignUp(){
    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
 
    

    


    return(
        <div style={{textAlign:"center"}}>
            <h1>Sign Up</h1>
            <p>Please enter the following fields</p>

            <form>
           
            <input type="text" placeholder="Choose your username" value={username} onChange={(e) => setUsername(e.target.value)} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <input type="password" placeholder="Enter your password"  value={password} onChange={(e) => setPassword(e.target.value)} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <button style={{backgroundColor:"#a3c8e6"}}><Link to={"/shoppinglist"} style={{color:"black"}}>Sign Up</Link></button> 
            </form>
            
        </div>
    )
}
export default SignUp