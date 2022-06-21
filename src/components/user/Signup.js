import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import "./login.css"

const Signup = () => {

    const dispatch=useDispatch()

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

     dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true
     }))
        
       
    }
  return (
   

        <form onSubmit={(e)=>handleSubmit(e)}>
            <div class="imgcontainer" >
                <img src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE=" alt="Avatar" class="avatar" />
            </div>

            <div class="container">
                <label for="uname"><b>Name</b></label>
                <input 
                    type="text"
                    placeholder="Enter Name" 
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    required
                />

                <label for="uname"><b>Email</b></label>
                <input 
                    type="text"
                    placeholder="Enter Email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                />

                <label for="psw"><b>Password</b></label>
                <input 
                    type="password"
                    placeholder="Enter Password" 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                />

                <button type="submit">signup</button>
                
            </div>

                
        </form>
         
    
  )
}

export default Signup