import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";
import ToggleTheme from "./components/ToggleTheme";
import Game from "./components/Game";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/user/Login"
import GameRule from "./components/GameRule";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export const AppContext = createContext();

function App() {
  const notify = () => toast("Word not found!");
  // const user=useSelector(selectUser)
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState('');
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [visibleLetters, setVisibleLetters] = useState([]);
  const [almostLetters,setAlmostLetters]=useState([])
  const [theme, setTheme] = useState("dark");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      console.log("words",words)
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
    
  }, []);
  
  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      notify()
    }
    localStorage.setItem("currword",JSON.stringify(currWord))
    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
    
    console.log("curr",currWord)
  };
  
  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
       {/* {
        user? */}
        <div className="App"  id={theme}>
        
          <Navbar/>
          
          {/* <GameRule/> */}
          <AppContext.Provider
            value={{
              board,
              setBoard,
              currAttempt,
              setCurrAttempt,
              correctWord,
              onSelectLetter,
              onDelete,
              onEnter,
              setDisabledLetters,
              disabledLetters,
              visibleLetters,
              setVisibleLetters,
              almostLetters,
              setAlmostLetters,
              theme,
              toggleTheme,
              gameOver,
            }}
          >
            <ToastContainer />
            <div className="game">
              <Game/>
            </div>
          </AppContext.Provider>
      </div>
      {/* :<Login />
      } */}
    </>
   
    
  );
}

export default App;
