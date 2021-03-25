import React, {useState, useEffect} from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import Header from './Header';
import './App.css';

function App() {

  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

// next, use effect hook on auto login route

useEffect(() => {
  const token = localStorage.getItem("token")
  if (token) {
    fetch(`http://localhost:3000/auto_login`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }
}, [])

const handleLogin = (user) => {
  setUser(user)
}

const handleFormSwitch = (input) => {
  setForm(input)
}

const handleAuthClick = () => {
  const token = localStorage.getItem("token")
  fetch(`http://localhost:3000/user_is_authed`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
}


const renderForm = () => {
  switch(form) {
    case "login":
      return <LogInForm handleLogin={handleLogin} />
      break;
    default:
      return <SignUpForm handleLogin={handleLogin} />
  }
}

  return (
    <div className="App">
       <Header handleFormSwitch={handleFormSwitch}/>
      {
       renderForm()
      }
      <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
    </div>
  );
}

export default App;
