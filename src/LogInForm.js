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
        
    }

    return (
        <div>
            <h2>Log In</h2>
        </div>
    )

}

export default LogInForm