import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TextBookWordsList from "../list-of-words-with-pagination/example-of-data";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
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

const randomBoolean = () => Math.random() >= 0.45;

let GAMEDURATION: number = 30000;

function GameScreans() {
  const [GameFase, setGameFase] = useState(0);
  const [WordsPased, setWordsPased] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  let [correctInRow, setcorrectInRow] = useState(0);
  let [score, setScore] = useState(0);

  function setGameTime() {
    setGameFase(GameFase + 2);
  }

  function showNextQuestion(prop: boolean) {
    if (isTrue === prop) {
      if (correctInRow < 3) {
        setcorrectInRow(correctInRow + 1);
      }
      setWordsPased(WordsPased + 1);
      setIsTrue(randomBoolean());
      correctInRow > 0
        ? setScore(score + 10 * correctInRow)
        : setScore(score + 10);
    } else {
      setWordsPased(WordsPased + 1);
      setIsTrue(randomBoolean());
      setcorrectInRow((correctInRow = 0));
    }
  }

  function DisplayStars() {
    if (correctInRow === 3) {
      return (
        <div className="stars-container">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <div> +{10 * correctInRow} points</div>
        </div>
      );
    } else if (correctInRow === 2) {
      return (
        <div className="stars-container">
          <StarIcon color="primary" />
          <StarIcon color="primary" />
          <StarBorderIcon color="primary" />
          <div> +{10 * correctInRow} points</div>
        </div>
      );
    } else if (correctInRow === 1) {
      return (
        <div className="stars-container">
          <StarIcon color="primary" />
          <StarBorderIcon color="primary" />
          <StarBorderIcon color="primary" />
          <div>+{10 * correctInRow} points</div>
        </div>
      );
    }
    return (
      <div className="stars-container">
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
        <div> +10 points</div>
      </div>
    );
  }

  if (GameFase === 0) {
    return (
      <Button
        variant="contained"
        onClick={() => {
          setGameFase(GameFase + 1);
          setTimeout(setGameTime, GAMEDURATION);
        }}
      >
        Start
      </Button>
    );
  }
  if (GameFase === 1) {
    return (
      <>
        <div className="sprint-container">
          <CountdownCircleTimer
            size={150}
            isPlaying
            duration={GAMEDURATION / 1000}
            colors={["#1976d2", "#1976d2", "#1976d2", "#1976d2"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
          <div className="sprint-mainpart-container">
            <Typography variant="h5" id="sprint-word">
              {TextBookWordsList[WordsPased].word}
            </Typography>
            <Typography variant="subtitle1" id="sprint-translation">
              {isTrue === true
                ? TextBookWordsList[WordsPased].wordTranslate
                : TextBookWordsList[
                    Math.floor(Math.random() * TextBookWordsList.length)
                  ].wordTranslate}
            </Typography>
            <div className="game-field-buttons-container">
              <Button
                size="large"
                variant="outlined"
                onClick={() => {
                  WordsPased < TextBookWordsList.length - 1
                    ? showNextQuestion(true)
                    : setWordsPased(WordsPased);
                }}
              >
                true
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="error"
                onClick={() =>
                  WordsPased < TextBookWordsList.length - 1
                    ? showNextQuestion(false)
                    : setWordsPased(WordsPased)
                }
              >
                false
              </Button>
            </div>
          </div>
          <div className="sprint-score-container">
            <DisplayStars />
            <Typography>Current score: {score}</Typography>
          </div>
        </div>
      </>
    );
  }
  if (GameFase === 2) {
    return (
      <>
        <p>Congratulates you score : {score}</p>
        <Button
          variant="contained"
          onClick={() => {
            setGameFase(GameFase - 2);
            setcorrectInRow((correctInRow = 0));
            setScore((score = 0));
          }}
        >
          restart
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
