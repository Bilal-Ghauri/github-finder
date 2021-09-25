import React, {Fragment} from 'react'
import Alert from '../users/Alert'
import Search from '../users/Search'
import Users from '../users/Users'

function Home() {
    return (
        <Fragment>
            <Alert />
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home
