import {LOGIN_SUCCESS,SHOW_ALL_USER_SUCCESS} from '../type'

const initialState = {
    allusers:[]
}

const reducer = (state=initialState,action)=>{
    const {type,payload} = action
    console.log("payload",payload);
    switch(type){
        case SHOW_ALL_USER_SUCCESS:
            localStorage.setItem("allusers",payload)
            return{
                ...state,
                allusers:payload
            }
        default:
            return state
    }
}

export default reducer