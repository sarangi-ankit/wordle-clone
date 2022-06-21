import React,{useContext} from 'react'
import { AppContext } from '../App'
import ReactSwitch from 'react-switch'

const ToggleTheme = () => {
    const {toggleTheme,theme}=useContext(AppContext)
  return (
    <div className='switch'>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
    </div>
  )
}

export default ToggleTheme