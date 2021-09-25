import React, { useContext } from 'react'
import ReposItem from './ReposItem'
import GithubContext from '../../context/githubContext'

const Repos = () => {
    const githubContext = useContext(GithubContext)
    let {repos} = githubContext
    return (
        <div>
            <h2 style={{margin:"10px 0"}}>New Created Repositories:</h2>
            {repos.map(repo => {
                return <ReposItem repo={repo}/>
            })}
        </div>
    )
}

export default Repos;
