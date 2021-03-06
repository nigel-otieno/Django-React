import React from 'react'
import { logout } from '../../api'

function LogoutIcon() {

    const handleClick = async (e) => {
        await logout()
    }
    return (
        <>
           <button onClick={handleClick} >Logout Button/Icon</button> 
        </>
    )
}

export default LogoutIcon
