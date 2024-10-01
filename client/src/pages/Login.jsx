import { useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { loginUser } from "../features/login/loginSlice"
import { useState } from "react"

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
   

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ username, password}))
    }
    
    return(
        <div style={{justifyContent:"center", textAlign:"center"}}>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Please enter your login details</p>

            <input type="text" placeholder="Enter your Username" onChange={(e) => setUsername(e.target.value)} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>
            <input type="text" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <button style={{margin:"2%", backgroundColor:"#a3c8e6"}}>Login</button><br></br>
            <p>or if you don't have an account <Link to={"/signup"}>Sign Up</Link></p>
            </form>
            
            
        </div>
    )
}
export default Login