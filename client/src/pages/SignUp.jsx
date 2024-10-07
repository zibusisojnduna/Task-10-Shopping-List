import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup, resetState } from "../features/signup/signupSlice" 
import { useNavigate } from "react-router-dom"


function SignUp(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error, success} = useSelector((state) => state.signup)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(signup({username, password}))
    }

    useEffect(() => {
        if (success) {
            navigate("/shoppinglist")
        }
        return () => {
            dispatch(resetState())
        }

    }, [success, navigate, dispatch])


    return(
        <div>
            <h1>Sign Up</h1><br></br>
            <p>Please add in the following details.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Select your username" value={username} onChange={(e) => setUsername(e.target.value)} required></input><br></br>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required></input><br></br>

                <button disabled={loading}>{loading ? 'Registering...' : 'Sign Up'}</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default SignUp