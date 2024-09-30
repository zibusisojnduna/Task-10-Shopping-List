import { Link } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux"
import { signup, resetSignUp } from "../features/signup/signupSlice"
import { useState } from "react"

function SignUp(){
    const dispatch = useDispatch()
    const { loading, error, user } = useSelector((state) => state.signup)
    const [formData, setFormData] = useState({ name:"", email:"", username:"", password:"", confirmPassword:"",})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signup(formData))
    }


    return(
        <div style={{textAlign:"center"}}>
            <h1>Sign Up</h1>
            <p>Please enter the follwing fields</p>

            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <input type="text" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br> 

            <input type="text" placeholder="Enter your username" value={formData.username} onChange={handleChange} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <input type="text" placeholder="Enter your password"  value={formData.password} onChange={handleChange} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <input type="text" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required style={{margin:"2%", borderRadius:"15px"}}></input><br></br>

            <button  disabled={loading} style={{backgroundColor:"#a3c8e6"}}><Link to={"/shoppinglist"} style={{color:"black"}}>Sign Up</Link></button> 
            </form>
            
        </div>
    )
}
export default SignUp