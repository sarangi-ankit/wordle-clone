import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import "./login.css"

const SignIn = () => {

    const dispatch=useDispatch()

    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

     dispatch(login({
        
        email:email,
        password:password,
        loggedIn:true
     }))
        
       
    }
  return (
   
    <div data-testid="apptest">
        <form data-testid="formtest" onSubmit={(e)=>handleSubmit(e)}>
            <div class="imgcontainer" >
                <img src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE=" alt="Avatar" class="avatar" />
            </div>

            <div class="container">
                

                <label for="uname"><b>Email</b></label>
                <input 
                    type="email"
                    placeholder="Enter Email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                    data-testid="email-input"
                />

                <label for="psw"><b>Password</b></label>
                <input 
                    type="password"
                    placeholder="Enter Password" 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                    data-testid="password-input"
                />

                <button >Login</button>
                
                   <p>Dont have account ?</p> 
                    <a href=""><button style={{width:"90px"}}>SignUp</button></a>
                
                
                
            </div>

                
        </form>
    </div>
         
    
  )
}

export default SignIn