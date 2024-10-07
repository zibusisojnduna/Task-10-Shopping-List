import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../features/signup/signupSlice"

function SignUp(){
    const dispatch = useDispatch()
    const error =  useSelector((state) => state.auth.error)
    const [userData, setUserData] = useState({username: "", password: ""})
   
    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signup(userData))
    }
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