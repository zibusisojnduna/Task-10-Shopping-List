import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/actions";

const initialState ={
  user:null,
  error:null,
}

const authReduecer = (state = initialState, action) =>{
  switch (action.type) {
    case LOGIN_SUCCESS:
      return{
        ...state,
        error:action.payload,
      }
      case LOGOUT:
        return {
          ...state,
          user:null,
          error:null,
        }
        default:
          return state
  }
}
export default authReduecer