import "./style.css";
import Parser from "html-react-parser";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextBookWordsList from "./example-of-data";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";

const URL = "https://react-learnwords-example.herokuapp.com/";

function playAudio(e: string) {
  const audio = new Audio(URL + e);

  function togglePause() {
    if (audio.paused && audio.currentTime > 0 && !audio.ended) {
      audio.pause();
      console.log("playing");
    } else {
      console.log("paused");
      audio.play();
    }
  }
  togglePause();
}

export default function ListOfWords() {
  return (
    <div className="cards-container">

      {TextBookWordsList.map((el) => (
        <Paper elevation={6} className="word-contaier" id={el.id}>
          <div className="word-container-header">
            <Avatar
              alt={el.word}
              src={URL + el.image}
              sx={{ width: 120, height: 120 }}
            />
            <div className="wodr-box">
              <Typography variant="h5">
                {el.word}
                <IconButton
                  className="card-voise-button"
                  color="primary"
                  onClick={() => {
                    playAudio(el.audio);
                  }}
                >
                  <VolumeUpIcon />
                </IconButton>
              </Typography>
              <Typography variant="subtitle2">{el.transcription}</Typography>
              <Typography variant="body1" className="card-translation">
                {el.wordTranslate}
              </Typography>
            </div>
          </div>
          <Typography variant="body1">
            <IconButton
              className="card-voise-button"
              color="primary"
              onClick={() => {
                playAudio(el.audioMeaning);
              }}
            >
              <VolumeUpIcon sx={{ fontSize: 20 }} />
            </IconButton>
            {Parser(el.textMeaning)}
          </Typography>
          <Typography variant="body2" className="card-translation">
            {el.textMeaningTranslate}
          </Typography>
          <Typography variant="body1">
            <IconButton
              className="card-voise-button"
              color="primary"
              onClick={() => {
                playAudio(el.audioMeaning);
              }}
            >
              <VolumeUpIcon />
            </IconButton>
            {Parser(el.textExample)}
          </Typography>
          <Typography variant="body2" className="card-translation">
            {el.textExampleTranslate}
          </Typography>
        </Paper>
      ))}
    </div>
  );
}
