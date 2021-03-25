import React from 'react'

const headerStyle = {
    background: "teal",
    height: "15vh",
}

function Header(props) {
    return (
        <div style={headerStyle}>
            <h1 style={{color: "white"}}>JWT Authorization</h1>
            <button className="ui button" onClick={() => props.handleFormSwitch("signUp")}>Sign Up</button>
            <button className="ui button" onClick={() => props.handleFormSwitch("logIn")}>Log In</button>
        </div>
    )
}

export default Header