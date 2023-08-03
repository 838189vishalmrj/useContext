import React from 'react'
import { Link } from 'react-router-dom'
import './headerComponent.css'
import { useContext } from 'react'
import { AuthContext } from '../../context'

const HeaderComponent = ()=>{

    const {isAuthentcated,logout} = useContext(AuthContext)

    return (
        <ul className='toNavigation'> 
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
            <li>
                {isAuthentcated ?<button onClick={logout}>Logout</button> :<Link to="/login">Login</Link>}
            </li>

        </ul>
    )
}

export default HeaderComponent