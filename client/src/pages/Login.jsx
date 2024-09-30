import { useSelector, useDispatch} from "react-redux"
import { verifyUser } from "../features/login/loginSlice"


function Login(){
    const dispatch = useDispatch()
    
    dispatch(verifyUser())

    return(
        <div>
            <h1>Login</h1>
            <p>Please enter your login details</p>

            <input type="text" placeholder="Enter your Username" style={{margin:"2%"}}></input><br></br>
            <input type="text" placeholder="Enter your Password"></input><br></br>

            <button>Login</button>
        </div>
    )
}
export default Login