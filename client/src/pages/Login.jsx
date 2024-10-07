import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"


function Login(){
  const dispatch = useDispatch()
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")

 const handleLogin = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);
    if (response.data.length > 0) {
      const user = response.data[0];
      dispatch({ type: 'LOGIN', payload: user });
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
  }
  }
 

    return(
        <div style={{justifyContent:"center", textAlign:"center"}}>
            <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <p>Please enter your login details</p>

            <input type="text" placeholder="Enter your Username" onChange={(e) => setUsername(e.target.value)} value={username} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>
            <input type="text" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <button style={{margin:"2%", backgroundColor:"#a3c8e6"}}><Link to={"/shoppinglist"}>Login</Link></button><br></br>
            <p>or if you don't have an account <Link to={"/signup"}>Sign Up</Link></p>
            </form>
            
            
        </div>
    )
}
export default Login

