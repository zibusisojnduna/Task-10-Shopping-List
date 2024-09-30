import { useSelector, useDispatch} from "react-redux"
import { verifyUser } from "../features/login/loginSlice"
import { Link } from "react-router-dom"


function Login(){
    const dispatch = useDispatch()
    
    //dispatch(verifyUser())

    return(
        <div style={{justifyContent:"center", textAlign:"center"}}>
            <h1>Login</h1>
            <p>Please enter your login details</p>

            <input type="text" placeholder="Enter your Username" style={{margin:"2%", borderRadius:"15px"}}></input><br></br>
            <input type="text" placeholder="Enter your Password" style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <button style={{margin:"2%", backgroundColor:"#a3c8e6"}}>Login</button><br></br>
            <p>or if you don't have an account <Link to={"/signup"}>Sign Up</Link></p>
        </div>
    )
}
export default Login