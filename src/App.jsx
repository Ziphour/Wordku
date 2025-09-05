import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [gameBoard, setGameBoard] = useState();
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
        setGameBoard((prev) => {
          [...prev, [letter]];
        });
      }
    }
  };

  const findLetter = () => {
    // html coordinates gotten

    return gameBoard[(i, j)];
  };

  const setLetterPanel = (letterPanel) => {
    // Find co-ordinates
    // How do we know the INPUT letter
    // * You don't need the old one, you can just overwrite with the new one
    const i = letterPanel.coordinates[0];
    const j = letterPanel.coordinates[1];
    const letterFromPanel = letterPanel.Letter;
    setLetter({ Letter: letterFromPanel, Coordinates: [i, j] });

    const letter = letterPanel.Letter;
    // Inputs letter into J and I
    //? Will this not insert instead of changing it
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
          <input
            type="text"
            name=""
            id=""
            maxLength={1}
            value={panel.Letter}
            onChange={(e) => setLetterPanel(e.target.value)}
          />
          {panel.letter}
        </div>;
      })}
    </>
  );
}

export default App;
