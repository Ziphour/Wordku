import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [loaded, setLoaded] = useState(false);

  // const winCondtions = 0;
  // const checkWin = () => {
  //   return;
  // };
  // const colourChange = () => {
  //   // adds/changes colour styles, by adding class that has animation.
  //   // Don't know how to change it otherwise? Maybe adding a seperate colour will do so
  // };

  useEffect(() => {
    initiateGameboard();
    setLoaded(true);
  }, []);

  useEffect(() => {
    console.log(gameBoard);
  }, [gameBoard]);

  const initiateGameboard = () => {
    const board = [];
    let k = 1;
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const letter = {
          Letter: "S",
          Coordinates: [null, null],
          id: k,
        };
        letter.Coordinates = [i, j];
        row.push(letter);
        k++;
      }
      board.push(row);
    }
    setGameBoard(board);
  };

  const setLetterPanel = (event, coordinates, id) => {
    //! Find co-ordinates
    // How do we know the INPUT letter
    // * You don't need the old one, you can just overwrite with the new one
    const letter = event.target.value;
    const [i, j] = coordinates;

    const letterPanel = {
      Letter: letter,
      Coordinates: [i, j],
      id: id,
    };

    // Inputs letter into J and I
    //? Will this not insert instead of changing it

    setGameBoard((previousGameboard) => {
      const newGameBoard = previousGameboard.map((row) => row);
      newGameBoard[i][j] = letterPanel;
      return newGameBoard;
    });
  };

  return (
    <>
      <div className="grid grid-3 gap-10">
        {loaded &&
          gameBoard.map((row) =>
            row.map((panel) => (
              <div key={panel.id}>
                <input
                  type="text"
                  name=""
                  id=""
                  minLength={0}
                  maxLength={1}
                  placeholder={panel.Letter}
                  value={panel.Letter}
                  onChange={(event) => {
                    setLetterPanel(event, panel.Coordinates, panel.id);
                  }}
                />
                {panel.Letter}
              </div>
            ))
          )}
      </div>
      {/* For loop with co-ords in there */}
    </>
  );
}

export default App;
