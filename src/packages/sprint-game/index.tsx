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

function CountDown() {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        size={150}
        isPlaying
        duration={45}
        colors={["#1976d2", "#1976d2", "#1976d2", "#1976d2"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: false, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

function GameField() {
  const [count, setCount] = useState(1);

  return (
    <>
      <CountDown />
      <Typography variant="h5">{TextBookWordsList[count].word}</Typography>
      <Typography variant="subtitle1">
        {TextBookWordsList[count].wordTranslate}
      </Typography>
      <div className="game-field-buttons-container">
        <Button
          size="large"
          variant="outlined"
          onClick={() =>
            count < TextBookWordsList.length - 1
              ? setCount(count + 1)
              : setCount(count)
          }
        >
          true
        </Button>
        <Button
          size="large"
          variant="outlined"
          color="error"
          onClick={() => (count > 1 ? setCount(count - 1) : setCount(count))}
        >
          false
        </Button>
      </div>
      <p>You clicked {count} times</p>
    </>
  );
}

export default function SprintGame() {
  return (
    <div className="game-container" id="game-container">
      {/* <Button
        variant="contained"
        onClick={() => {
          const field = document.getElementById("game-container");
          ReactDOM.render(<GameField />, field);
        }}
      >
        Start
      </Button> */}
      <GameField />
    </div>
  );
}
