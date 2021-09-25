import React, { useContext } from 'react'
import GithubContext from '../../context/githubContext';

const Alert = () => {
    const githubContext = useContext(GithubContext)
    let {alert} = githubContext
        return ( 
            alert !== null && (<div className={`alert`}>
                <i className="fa fa-info-circle"></i>
                <p>{alert}</p> 
            </div> )
        )
    
}

export default Alert;