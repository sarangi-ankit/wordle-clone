import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

function GameOver() {

  const notify = () => toast("Wow so easy!");
  const [copied,setCopied]=useState(false)
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
    
      <h3 >
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1 data-testid="test-1">Correct Word:{correctWord}</h1>
      {gameOver.guessedWord && (
        <>
          <h3>You guessed in {currAttempt.attempt} attempts</h3>
          <CopyToClipboard text={`You guessed in ${currAttempt.attempt} attempt`}
            onCopy={()=>setCopied(true)}
            
          >
            <button style={{position:"relative" ,bottom:"20px"}}>Share Result</button>
            
          </CopyToClipboard>
          
          {copied?<h3>copied to clipboard</h3>:null}
        </>
        
      )}
    </div>
  );
}

export default GameOver;
