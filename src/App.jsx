import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [loaded, setLoaded] = useState(false);
  const [winCondtions, setWinConditions] = useState([
    [
      { Letter: "", Coordinates: [0, 0], id: 0, solved: false },
      { Letter: "", Coordinates: [0, 1], id: 1, solved: false },
      { Letter: "", Coordinates: [0, 2], id: 2, solved: false },
    ],
    [
      { Letter: "", Coordinates: [1, 0], id: 3, solved: false },
      { Letter: "", Coordinates: [1, 1], id: 4, solved: false },
      { Letter: "", Coordinates: [1, 2], id: 5, solved: false },
    ],
    [
      { Letter: "", Coordinates: [2, 0], id: 6, solved: false },
      { Letter: "", Coordinates: [2, 1], id: 7, solved: false },
      { Letter: "", Coordinates: [2, 2], id: 8, solved: false },
    ],
  ]);

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

  // function for enter button here

  // Checks Letters in right place or words?
  // Check letters in right place

  const checkWin = () => {
    for (let i = 0; i < winCondtions.length; i++) {
      // Matrix size can be changed in the future, so for loop is based on specific matrix i,j length
      for (let j = 0; j < winCondtions[i].length; j++) {
        if (winCondtions[i][j].Letter === gameBoard[i][j].Letter);
        {
          // Send green code alert, change a code to that.
        }
      }
    }
    return;
  };

  const initiateGameboard = () => {
    const board = [];
    let k = 1;
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const letter = {
          Letter: "",
          Coordinates: [null, null],
          id: k,
          solved: false,
        };
        letter.Coordinates = [i, j];
        row.push(letter);
        k++;
      }
      board.push(row);
    }
    setGameBoard(board);
  };

  const updateLetterPanel = (event, coordinates, id) => {
    //! Find co-ordinates
    // How do we know the INPUT letter
    // * You don't need the old one, you can just overwrite with the new one
    const letter = event.target.value;
    const [i, j] = coordinates;

    const letterPanel = {
      Letter: letter,
      Coordinates: [i, j],
      id: id,
      solved: false,
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
              //? Can put grid to overlap
              <div key={panel.id} className="Grid Grid-overlap">
                {!panel.solved && (
                  <input
                    type="text"
                    name=""
                    id=""
                    minLength={0}
                    maxLength={1}
                    placeholder={panel.Letter}
                    value={panel.Letter}
                    onChange={(event) => {
                      updateLetterPanel(event, panel.Coordinates, panel.id);
                    }}
                  />
                )}
                {panel.solved && <p style={{ color: "red" }}>{panel.Letter}</p>}
                {!panel.solved && <p>{panel.Letter}</p>}
              </div>
            ))
          )}
        <button
          onClick={() => {
            checkWin;
          }}
        ></button>
      </div>
      {/* For loop with co-ords in there */}
    </>
  );
}

export default App;

// how does state changes work
