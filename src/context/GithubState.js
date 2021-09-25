import React , { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import GithubReducer from './GIthubReducer'
import { GET_USER , SET_LOADING , SEARCH_USER , GET_REPOS , REMOVE_ALERT , SET_ALERT , CLEAR_USERS} from "./types";

const GithubState = props => {
    let initialState = {
        users : [],
        loading : false, 
        alert : null ,
        user : {},
        repos : []
    }
    const [state , dispatch] = useReducer(GithubReducer , initialState)

    const searchUser = async(text) => {
        setLoading()
        let res = await axios.get(`https://api.github.com/search/users?q=${text}&clientId=${process.env.REACT_APP_Client_ID}&clientSecret=${process.env.REACT_APP_Client_Secret}`)
        dispatch({
            type: GET_USER,
            payload: res.data.items,
        })
    }

    const getUserRepos = async (username) => {
        let res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&clientId=${process.env.REACT_APP_Client_ID}&clientSecret=${process.env.REACT_APP_Client_Secret}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    const setUserData = (msg) => {
        dispatch({
                type : SET_ALERT,
                payload : msg,
        })
        setTimeout(() =>
            dispatch({
                type:REMOVE_ALERT 
            }
            ) , 3000);
    }

    const clearUser = () => {
        dispatch({
            type : CLEAR_USERS,
        })
    }


    //get user from the API
    const getUsers = async(userName) => {
        setLoading()
        let res = await axios.get(`https://api.github.com/users/${userName}?clientId=${process.env.REACT_APP_Client_ID}&clientSecret=${process.env.REACT_APP_Client_Secret}`)
        dispatch({
            type : SEARCH_USER,
            payload : res.data,
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
        })
    }

    return <githubContext.Provider value={{
                users:  state.users,
                loading : state.loading,
                alert : state.alert,
                user : state.user,
                repos : state.repos,
                getUsers,
                setLoading,
                searchUser,
                getUserRepos,
                setUserData,
                clearUser
            }}>
        {props.children}
    </githubContext.Provider>
}

export default GithubState;