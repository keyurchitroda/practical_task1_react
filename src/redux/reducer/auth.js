import {LOGIN_SUCCESS} from '../type'

const initialState = {
    isAuthenticated: false,
    users:[]
}

const reducer = (state=initialState,action)=>{
    const {type,payload} = action
    console.log("payload",payload);
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem("token",payload.token)
            return{
                ...state,
                isAuthenticated: true,
                users:payload
            }
        default:
            return state
    }
}

export default reducer