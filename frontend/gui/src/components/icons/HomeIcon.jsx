import React, {useHistory} from 'react'

// You might not need this component. There is barely any code so you can 
// probably just have this feature in the navbar
function HomeIcon() {
    const handleClick = (e) => {
        history.push('/')
    }
    return (
        <>
            <button onClick={handleClick} >Home Button/Icon</button>
        </>
    )
}

export default HomeIcon
