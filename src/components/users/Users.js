import React,{useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import GithubContext from '../../context/githubContext'

const Users = () => {
    let githubContext = useContext(GithubContext)
    let {loading , users } = githubContext
    if(loading){
        return <Spinner />
    }else{
        return (
            <div className="users">
                {users.map(user =>
                    {return <UserItem key={user.id} user={user} />}
                )}
            </div>
        )
    }
}


export default Users
