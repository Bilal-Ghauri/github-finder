import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading" style={styler}/>
        </Fragment>
    )
}

let styler = {
    width: '50px',
    height: '50px',
    display: 'block',
    margin: '30px auto'
}

export default Spinner