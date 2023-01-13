import { useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import "./style.css";
import TextBookWordsList from "../list-of-words-with-pagination/example-of-data";
import { Button, ButtonGroup, IconButton } from "@mui/material";

interface RemainingTime {
  remainingTime: number;
}
const URL = "https://rs-lang-team15.herokuapp.com/";

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
  let [wordsGrup, setWordsGrup] = useState(0);
  let [fase, setfase] = useState(1);

  let [score, setScore] = useState(0);

  const gameArr = TextBookWordsList.filter(function (obj) {
    return obj.group === wordsGrup;
  });

  let answersArray: any = [];

  function genereteAnsvers() {
    answersArray = [];
    let generationArray = [...gameArr];
    answersArray.push(generationArray[fase]);
    generationArray.splice(fase, 1);
    for (let i = 0; i < 3; i++) {
      generationArray.sort(() => 0.5 - Math.random());
      answersArray.push(generationArray[0]);
      generationArray.splice(0, 1);
    }
    return answersArray.sort(() => 0.5 - Math.random());
  }

  if (GameFase === 0) {
    return (
      <>
        <Button
          variant="contained"
          onClick={() => {
            setGameFase(GameFase + 1);
            genereteAnsvers();
            console.log(answersArray);
            console.log(answersArray[0]);
            console.log(answersArray[0].word);

          }}
        >
          Start
        </Button>
      </>
    );
  }
  if (GameFase === 1) {
    return (
      <>
        <div className="words-counter">{fase} / 20</div>
        <IconButton
          color="primary"
          onClick={() => {
            let audioWord = new Audio(URL + gameArr[fase].audio);
            audioWord.play();
          }}
        >
          <VolumeUpIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button>{answersArray[0].word}</Button>

        </ButtonGroup>
        <Button variant="text" color="error" size="small">
          pass
        </Button>
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

          }}
        >
          restart
        </Button>
      </>
    );
  }
  return <p>Somth go wrong pls reloude the page (press F5)</p>;
}

export default function AudioGame() {
  return (
    <div className="audio-game-container" id="audio-game-container">
      <GameScreans />{" "}
    </div>
  );
}
