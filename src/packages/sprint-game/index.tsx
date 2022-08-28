import Button from "@mui/material/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ReactDOM from "react-dom";

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
        isPlaying
        duration={45}
        colors={["#1976d2", "#1976d2", "#1976d2", "#1976d2"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default function SprintGame() {
  return (
    <div className="game-container" id="game-container">
      <Button
        onClick={() => {
          const field = document.getElementById("game-container");
          ReactDOM.render(<CountDown />, field);
        }}
      >
        sometest
      </Button>
    </div>
  );
}
