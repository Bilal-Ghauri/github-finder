import { SEARCH_USER ,GET_USER , SET_LOADING , GET_REPOS , REMOVE_ALERT , CLEAR_USERS , SET_ALERT} from "./types";

const GithubReducer = (state, action) => {
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                users : action.payload,
                loading:false,
            }
        case SET_ALERT :
            return{
                ...state,
                alert : action.payload
            }
        case CLEAR_USERS:
            return{
                ...state,
                users : [],
                loading : false
            }
        case REMOVE_ALERT:
            return{
                ...state,
                alert : null,
            }
        case GET_REPOS:
            return{
                ...state,
                repos : action.payload
            }
        case SEARCH_USER:
            return {
                ...state,
                user : action.payload,
                loading : false
            }
        case SET_LOADING:
            return {
                ...state,
                loading : true
            }
        default:
            return state
    }
}
export default GithubReducer