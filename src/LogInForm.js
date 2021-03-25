import React, {useState} from 'react';

function LogInForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
        })
        setUsername("")
        setPassword("")
    }

    const formStyle = {
        margin: "auto",
        padding: "20px",
        width: "60%"
    }

    return (
        <div>
            <div style={formStyle}>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsername} placeholder="Username" />
            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword} placeholder="Password" />
            <br></br>
            <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default LogInForm