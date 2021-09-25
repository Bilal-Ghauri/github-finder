import React, { useContext } from 'react'
import ReposItem from './ReposItem'
import GithubContext from '../../context/githubContext'

const Repos = () => {
    const githubContext = useContext(GithubContext)
    return (
        <div>
            <h2 style={{margin:"10px 0"}}>New Created Repositories:</h2>
            {githubContext.repos.map(repo => {
                return <ReposItem repo={repo}/>
            })}
        </div>
    )
}

export default Repos;
