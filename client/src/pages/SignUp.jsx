import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup, resetState } from "../features/signup/signupSlice" 
import { useNavigate } from "react-router-dom"


function SignUp(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Select your username" value={userData.username} onChange={handleChange} required></input><br></br>
                <input type="password" placeholder="Enter your password" value={userData.password} onChange={handleChange} required></input><br></br>

                <button>Register</button>
            </form>
        </div>
    )
}

export default SignUp