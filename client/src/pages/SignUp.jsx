import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup, resetState } from "../features/signup/signupSlice" 
import { useNavigate } from "react-router-dom"


function SignUp(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confrimPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("") 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, success} = useSelector((state) => state.signup)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confrimPassword) {
            setError("Passwords do not match.");
            return
        }
    setError("")
    dispatch(signup({name, email, username, password}))
    }

    useEffect(() => {
        if (success) {
            navigate("/login")
        }
        return () => {
            dispatch(resetState())
        }

    }, [success, navigate, dispatch])




    return(
        <div style={{textAlign:"center"}}>
            <h1>Sign Up</h1><br></br>
            <p>Please add in the following details.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required></input><br></br>
                <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required></input><br></br>
                <input type="text" placeholder="Select your username" value={username} onChange={(e) => setUsername(e.target.value)} required></input><br></br>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required></input><br></br>
                <input type="password" placeholder="Confirm your password" value={confrimPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input><br></br>

                <button disabled={loading}>{loading ? 'Registering...' : 'Sign Up'}</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default SignUp