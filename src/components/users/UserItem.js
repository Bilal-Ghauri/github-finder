
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ( {user: {login , avatar_url }}) => {
    
        return (
            <div className="userItem">
                <img src={avatar_url} alt={login} />
                {login}
                <Link to={`/user/${login}`}>Profile</Link>
            </div>
        )
}

UserItem.propTypes = {
    user : PropTypes.object.isRequired,
}

export default UserItem