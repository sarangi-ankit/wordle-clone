import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    board,
    disabledLetters,
    visibleLetters,
    almostLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);
  
  return (
    <div data-testid="ky1"  className="keyboard" onKeyDown={handleKeyboard}>
      <div data-testid="ky2" className="line1">
        {keys1.map((key) => {
          return <Key 
          keyVal={key} 
          disabled={disabledLetters.includes(key)}
          visible={visibleLetters.includes(key)}
          almost={almostLetters.includes(key)}
            />;
        })}
      </div>
      <div data-testid="ky3" className="line2">
        {keys2.map((key) => {
          return <Key 
            keyVal={key} 
            disabled={disabledLetters.includes(key)}
            visible={visibleLetters.includes(key)}
            almost={almostLetters.includes(key)}
             />;
        })}
      </div>
      <div data-testid="ky4" className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key) => {
          return <Key
           keyVal={key} 
           disabled={disabledLetters.includes(key)} 
           visible={visibleLetters.includes(key)} 
           almost={almostLetters.includes(key)}
           />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
