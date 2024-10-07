
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../features/login/loginSlice"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(){
 const dispatch = useDispatch()
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")
 const { loading, error, user } = useSelector((state) => state.login);

 const navigate = useNavigate()

 const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ username, password }));
    if (user) {
      navigate('/shoppinglist'); 
    }
  };


    return(
        <div style={{justifyContent:"center", textAlign:"center"}}>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Please enter your login details</p>

            <input type="text" placeholder="Enter your Username" onChange={(e) => setUsername(e.target.value)} value={username} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>
            <input type="text" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <button style={{margin:"2%", backgroundColor:"#a3c8e6"}} disabled={loading}>{loading ? "Logging in" : "Login"}</button><br></br>
            <p>or if you don't have an account <Link to={"/signup"}>Sign Up</Link></p>
            </form>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}
export default Login

