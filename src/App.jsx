import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [letters, setLetters] = useState([]);
  const [gameBoard, setGameBoard] = useState([]);
  const [letter, setLetter] = useState({
    Letter: "",
    Coordinates: [],
  });

  useEffect(() => {
    initiateGameboard();
  }, []);

  const initiateGameboard = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const begginingOfBoard = gameBoard.slice(i, j + 1);
        const endOfBoard = gameBoard.slice(j);
        setGameBoard([...begginingOfBoard, [letter], ...endOfBoard]);
      }
    }
  };

  const findLetter = () => {
    // html coordinates gotten
    return gameBoard[(i, j)].Letter;
  };

  const setLetterPanel = () => {
    // Find co-ordinates
    // How does the letter clicked relate to, ah, can use co-ord's
    const letterPanel = findLetter();

    const i = letterPanel.coordinates[0];
    const j = letterPanel.coordinates[1];

    const letter = letterPanel.Letter;
    // Inputs letter into J and I
    setGameBoard((gameBoard) => {
      const begginingOfBoard = gameBoard.slice(i, j + 1);
      const endOfBoard = gameBoard.slice(j)(
        ...begginingOfBoard,
        [letter],
        ...endOfBoard
      );
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
