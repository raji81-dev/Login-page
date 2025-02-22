import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
function App() {

  const navigate=useNavigate()
  const[user,setUser]=useState('')
  const[pass,setPass]=useState('')

  function HandleUser(evt){
    setUser(evt.target.value)
  }
  function Handlepass(evt){
    setPass(evt.target.value)
  }


  function check(){
    var logindetails=axios.post("http://localhost:3000/login",{"username":user,"password":pass})
    logindetails.then(function(data){
     if(data.data==true){
       navigate('/success')
     }
     else{
      navigate('/fail')
     }
    })
  }
  return (
  // <div>
  //   <input placeholder='username' name='username' onChange={HandleUser}/>
  //   <input placeholder='password' name='password' onChange={Handlepass}/>
  //  <button onClick={check}>Login</button>
  //  </div>
  <div className="login-container">
 <div className="login-box">
  <h2>Login</h2>
  <div className="input-group">
  <label>Username</label>
  <input placeholder='username' name='username' onChange={HandleUser}/>
  </div>
 <div className="input-group">
 <label>Password</label>
 <input placeholder='password' name='password' onChange={Handlepass}/>
 </div>
 
  <button className="login-btn" onClick={check}>Login</button>
  
</div>
   </div>
  )
}

export default App
