import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [win, setWin] = useState(false);
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [loaded, setLoaded] = useState(false);
  // *setWinConditions needed in the future to automatically set new games. Backend produces codes, front end sends get request, get request responds back with a JSON, then setWin is activated based on that.
  const [winCondtions, setWinConditions] = useState([
    [
      { Letter: "a", Coordinates: [0, 0], id: 0, solved: false },
      { Letter: "i", Coordinates: [0, 1], id: 1, solved: false },
      { Letter: "r", Coordinates: [0, 2], id: 2, solved: false },
    ],
    [
      { Letter: "p", Coordinates: [1, 0], id: 3, solved: false },
      { Letter: "o", Coordinates: [1, 1], id: 4, solved: false },
      { Letter: "e", Coordinates: [1, 2], id: 5, solved: false },
    ],
    [
      { Letter: "e", Coordinates: [2, 0], id: 6, solved: false },
      { Letter: "n", Coordinates: [2, 1], id: 7, solved: false },
      { Letter: "d", Coordinates: [2, 2], id: 8, solved: false },
    ],
  ]);

  useEffect(() => {
    if (win) {
      alert(`You win!`);
      throw new Error("Ends game");
    }
    // Ends game
    // Shows Win message
  }, [win]);

  useEffect(() => {
    initiateGameboard();
    setLoaded(true);
  }, []);

  const checkWin = () => {
    winCheckLetters();
    const winTest = winCondtions.every((row, largeIndex) => {
      return row.every((cell, index) => {
        return cell.Letter === gameBoard[largeIndex][index].Letter;
      });
    });
    console.log(winTest);
    if (winTest) {
      setWin(true);
    }
  };
  // Check all, and use every, if one appears false-> return, if not the code will be killed and a congrats message will form.
  const winCheckLetters = () => {
    for (let i = 0; i < winCondtions.length; i++) {
      // Matrix size can be changed in the future, so for loop is based on specific matrix i,j length
      for (let j = 0; j < winCondtions[i].length; j++) {
        if (winCondtions[i][j].Letter === gameBoard[i][j].Letter) {
          setGameBoard((previousGameboard) => {
            const newGameBoard = previousGameboard.map((row) => row);
            newGameBoard[i][j].solved = true;
            return newGameBoard;
          });
        }
      }
    }
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
      <p>oeeniprda</p>
      <div className="grid grid-3 gap-10">
        {loaded &&
          gameBoard.map((row) =>
            row.map((panel) => (
              //? Can put grid to overlap
              <div key={panel.id} className="Grid Grid-overlap">
                {panel.solved && (
                  <p style={{ color: "Green" }}>{panel.Letter}</p>
                )}
                {!panel.solved && <p>{panel.Letter}</p>}
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
              </div>
            ))
          )}
        <button
          onClick={() => {
            checkWin();
          }}
        ></button>
      </div>
      {/* For loop with co-ords in there */}
    </>
  );
}

export default App;

// how does state changes work
