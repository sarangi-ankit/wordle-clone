import React ,{useContext}from 'react'
import { AppContext } from '../App'
import ToggleTheme from './ToggleTheme'
import Board from './Board'
import GameOver from './GameOver'
import Keyboard from './Keyboard'


const Game = () => {

    const { gameOver } =useContext(AppContext);
    
  return (
    <div data-testid="gam1">
        <ToggleTheme/>
        <div data-testid="gam2" className="game">
        
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
    </div>
  )
}

export default Game