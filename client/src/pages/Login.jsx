import { useSelector, useDispatch} from "react-redux"
import { verifyUser } from "../features/login/loginSlice"


function Login(){
    const dispatch = useDispatch()
    
    dispatch(verifyUser())

    return(
        <></>
    )
}
export default Login