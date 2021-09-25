import React, { useEffect , Fragment, useContext} from 'react'
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner'
import Repos from '../links/Repos'
import GithubContext from '../../context/githubContext';


const User = ({ match })=> {
    let githubContext = useContext(GithubContext)

    let {getUsers , user , getUserRepos , loading ,  repos } = githubContext
    
    useEffect(()=> {
        getUsers(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    },[])
    let {name , company , avatar_url , location , bio , blog , login , html_url , followers , following , public_repos , public_gists , hireable} = user
    if(loading) {
        return (<Spinner />)
    }else{
            return (
                <div className="user">
                    <div className="hired">
                        <Link to="/"><button>Back to Search Results</button></Link>
                        <span className="hiring">Hireable: {hireable ? <i class="fas fa-check-circle green"></i> : <i class="fas fa-times-circle red"></i> }</span> 
                    </div>
                    <div className="intro">
                        <div className="name">
                            <img src={avatar_url} alt={name} style={{margin:'2px 0'}}/>
                            <h2 style={{margin:'2px 0'}}>{name}</h2>
                            {location && (<p style={{margin:'2px 0'}}>Location : {location}</p>)}
                        </div>
                        <div className="location">
                            {bio && (
                                <Fragment>
                                    <p style={{margin:'2px 0' ,fontSize:'20px'}}>Bio</p>
                                    <p style={{margin:'2px 0'}}>{bio}</p>
                                </Fragment>
                            )}
                            <button style={{margin:'5px 0'}} className='githubProfileBtn'><a href={html_url}>Github Profile</a></button>
                            {login && (<p style={{margin:'2px 0'}}>Username : {login}</p>)}
                            {company && (<p style={{margin:'2px 0'}}>Company : {company}</p>)}
                            {blog && (<p style={{margin:'2px 0'}}>Website : {blog}</p>)}
                        </div>
                    </div>
                    <div className="navButtons">
                            <button className="followers">Follower : {followers}</button>
                            <button className="following">Following : {following}</button>
                            <button className="repos">Public Repos : {public_repos}</button>
                            <button className="gists">Public Gists : {public_gists}</button>
                    </div>
                    <Repos repos= {repos}/>
                </div>
            )
        }
        }

export default User

