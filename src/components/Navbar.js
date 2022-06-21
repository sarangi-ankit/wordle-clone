import { textAlign } from '@mui/system';
import React, { useState } from 'react'
import { IoAlertCircleSharp } from "react-icons/io5"; 
import GameRule from './GameRule';

const Navbar = () => {

    const [showRule,setShowRule]=useState(false)
  return (
    <div  data-testid="test">
        <nav data-testid="navtest">
            <h1 data-testid="mytest">Wordle</h1>
            <div data-testid="test1" style={{position:"relative" , left:"100px" ,bottom:"30px",backgroundColor:"#0000"}}>
                <IoAlertCircleSharp style={{}}onClick={()=>setShowRule(!showRule)}/>
            </div>
            
          </nav>
          {showRule && <GameRule/>}
          
          
    </div>
  )
}

export default Navbar