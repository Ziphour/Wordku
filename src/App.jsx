import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
        setLetter((prev) => ({ ...prev, Coordinates: [i, j] }));
        const begginingOfBoard = gameBoard.slice(i, j + 1);
        const endOfBoard = gameBoard.slice(j);
        setGameBoard([...begginingOfBoard, [letter], ...endOfBoard]);
      }
    }
  };

  const findLetter = () => {
    // html coordinates gotten
    return gameBoard[(i, j)];
  };

  const setLetterPanel = () => {
    // Find co-ordinates
    // How do we know the INPUT letter
    // *
    const letterPanel = findLetter();
    const i = letterPanel.coordinates[0];
    const j = letterPanel.coordinates[1];
    // !
    const letterFromPanel = Letter.pannel;
    setLetter({ Letter: letterFromPanel, Coordinates: [i, j] });

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
      {/* For loop with co-ords in there */}
      {gameBoard.map((panel) => {
        <div key={panel.coordinates} Coordinates={panel.coordinates}>
          {panel.Letter}
        </div>;
      })}
    </>
  );
}

export default App;
