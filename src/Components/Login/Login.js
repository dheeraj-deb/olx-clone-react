import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../Store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link,useHistory } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
