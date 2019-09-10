import React from 'react'
import {NavLink} from 'react-router-dom'
const SignedOutLinks =()=>{
    return(
        <ul className="right">
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/signin">Log In</NavLink></li>
            {/* <li><NavLink to="/" className='btn btn-floating pink lighten-1'>KM</NavLink></li> */}
        </ul>
    )
}

export default SignedOutLinks