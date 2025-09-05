import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [loaded, setLoaded] = useState(false);
  const [letter, setLetter] = useState({
    Letter: "",
    Coordinates: [],
  });
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
    console.log(loaded);
  }, [loaded]);

  // useEffect(() => {
  //   console.log(gameBoard);
  // }, [gameBoard]);

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

  //  for (let i = 0; i < 3; i++) {
  //    for (let j = 0; j < 3; j++) {
  //      setLetter((prev) => ({ ...prev, Coordinates: [i, j] }));
  //      setGameBoard(
  //        gameBoard.map((rowValue, rowi) => {
  //          rowi === i
  //            ? rowValue.map((colValue, coli) => {
  //                coli === j ? letter : null;
  //              })
  //            : null;
  //        })
  //      );
  //    }
  //  }
  //  console.log(gameBoard);

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
      <div className="">
        {loaded &&
          gameBoard.map((row) =>
            row.map((panel) => (
              <div key={panel.id}>
                {/* <input
                type="text"
                name=""
                id=""
                maxLength={1}
                value={panel.Letter}
                onChange={(e) => setLetterPanel(e.target.value)}
              /> */}
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
