import React, { useContext, useState } from 'react'
import GithubContext from '../../context/githubContext'

const Search = ()=> {
    const githubContext = useContext(GithubContext)
    let { clearUser , users , setUserData , searchUser} = githubContext;
    const [text , setText] = useState('')
    const onChange = e => setText(e.target.value)
    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            setUserData('Please Enter a Username')
        }else{
            searchUser(text);
            setText('')
        }
        
    }
    return (
        <div className="seachDiv" style = {styling}>
            <form onSubmit={onSubmit}>
                <input type="text"
                placeholder="Search User.."
                name="text"
                value = {text}
                onChange= {onChange}
                autoComplete="off"
                style={{width:'100%', outline:'none', fontSize:'17px', border:"1px solid rgba(0,0,0,0.3)",padding:'2px 5px'}}/>
                <input type="submit" 
                style = {{margin:'10px 0', width:'100%', border:'none' , padding:'6px 0', cursor:'pointer', backgroundColor:"rgba(0,0,0,1)", color:"white"}}/>
            </form>
            
            {users.length > 0  && ( <button onClick={clearUser}
            style={{width:'100%',cursor:'pointer',padding:'6px 0', border:'none'}}>
                Clear
            </button>)}
        </div>
        )
    }


let styling = {
    width : "100%",
    margin:'20px 0',
}

export default Search
