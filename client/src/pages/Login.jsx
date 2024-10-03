import { useSelector, useDispatch} from "react-redux"
import { login } from "../features/actions/actions"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

   

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ username, password}))
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

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const signup = (username, password) => async (dispatch) =>{
    try {
        // First, check if the username already exists
        const existingUserResponse = await axios.get('http://localhost:3000/users', {
          params: { username },
        });
    
        if (existingUserResponse.data.length > 0) {
          dispatch({ type: SIGNUP_FAILURE, payload: 'Username already exists' });
          return;
        }
    
        // Create a new user
        const newUser = { username, password };
        const response = await axios.post('http://localhost:3000/users', newUser);
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: SIGNUP_FAILURE, payload: 'Sign up failed' });
      }
    };
   