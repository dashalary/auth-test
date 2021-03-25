import React, {useState, useEffect} from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';
import './App.css';

function App() {

  const [user, setUser] = useState({})

// next, use effect hook on auto login route

useEffect(() => {
  const token = localStorage.getItem("token")
  if (token) {
    fetch(`http://localhost:3000/auto_login`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      setUser(data)
    })
  }
}, [])

const handleLogin = (user) => {
  setUser(user)
}

  return (
    <div className="App">
      {
        <LogInForm handleLogin={handleLogin} />
      }
    </div>
  );
}

export default App;
