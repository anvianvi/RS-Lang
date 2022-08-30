import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TextBookWordsList from "../list-of-words-with-pagination/example-of-data";
import "./style.css";

interface RemainingTime {
  remainingTime: number;
}

const renderTime = ({ remainingTime }: RemainingTime) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

let SCORE: number = 0;
let GAMEDURATION: number = 20000;

function GameScreans() {
  const [GaemeFase, setGameFase] = useState(0);
  const [WordsPased, setwordsPased] = useState(0);

  function setGameTime() {
    setGameFase(GaemeFase + 2);
  }

  if (GaemeFase === 0) {
    return (
      <Button
        variant="contained"
        onClick={() => {
          setGameFase(GaemeFase + 1);
          setTimeout(setGameTime, GAMEDURATION);
        }}
      >
        Start
      </Button>
    );
  }
  if (GaemeFase === 1) {
    return (
      <>
        <CountdownCircleTimer
          size={150}
          isPlaying
          duration={GAMEDURATION/1000}
          colors={["#1976d2", "#1976d2", "#1976d2", "#1976d2"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
        <Typography variant="h5">
          {TextBookWordsList[WordsPased].word}
        </Typography>
        <Typography variant="subtitle1">
          {TextBookWordsList[WordsPased].wordTranslate}
        </Typography>
        <div className="game-field-buttons-container">
          <Button
            size="large"
            variant="outlined"
            onClick={() => {
              WordsPased < TextBookWordsList.length - 1
                ? setwordsPased(WordsPased + 1)
                : setwordsPased(WordsPased);
              SCORE++;
            }}
          >
            true
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="error"
            onClick={() =>
              WordsPased > 1
                ? setwordsPased(WordsPased - 1)
                : setwordsPased(WordsPased)
            }
          >
            false
          </Button>
        </div>
        <p>You clicked {WordsPased} times</p>
      </>
    );
  }
  if (GaemeFase === 2) {
    return (
      <>
        <p>Congratulates you score : {SCORE}</p>
        <Button
          variant="contained"
          onClick={() => {
            setGameFase(GaemeFase - 2);
          }}
        >
          {" "}
          restart{" "}
        </Button>
      </>
    );
  }
  return <p>Somth go wrong pls reloude the page (press F5)</p>;
}

export default function SprintGame() {
  return (
    <div className="game-container" id="game-container">
      <GameScreans />
    </div>
  );
}
