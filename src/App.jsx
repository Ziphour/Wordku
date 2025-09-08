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
      { Letter: "", Coordinates: [0, 0], id: 0 },
      { Letter: "", Coordinates: [0, 1], id: 1 },
      { Letter: "", Coordinates: [0, 2], id: 2 },
    ],
    [
      { Letter: "", Coordinates: [1, 0], id: 3 },
      { Letter: "", Coordinates: [1, 1], id: 4 },
      { Letter: "", Coordinates: [1, 2], id: 5 },
    ],
    [
      { Letter: "", Coordinates: [2, 0], id: 6 },
      { Letter: "", Coordinates: [2, 1], id: 7 },
      { Letter: "", Coordinates: [2, 2], id: 8 },
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
    // loop that checks the sent loop
    // compares each one, to the first one in its name (could compare each i = i (letting us index it first))
    //

    for (let i = 0; i < winCondtions.length; i++) {
      for (let j = 0; j < winCondtions[i].length; j++) {
        if (
          winCondtions[i][j].Letter === gameBoard[i][j].Letter &&
          winCondtions[i][j].Coordinates === gameBoard[i][j].Coordinates
        );
        {
          // Send green code alert, change a code to that.
          // Do i then block them from changing the letters after that? I think so.
          // That would mean i'd need a word blocker function
        }
      }
    }
    return;
  };

  function wordblock() {}

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
                    updateLetterPanel(event, panel.Coordinates, panel.id);
                  }}
                />
                {panel.Letter}
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
